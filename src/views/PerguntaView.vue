<template>
  <div class="container">

    <h1 class="title has-text-centered is-1 mt-4">Odonto App</h1>

    <h2 class="title">NOVA PERGUNTA</h2>

    <div class="field">
      <label class="label">Nome da pergunta</label>
      <div class="control">
        <input class="input" type="text" placeholder="Insira o nome da pergunta" v-model="formulario.nome">
      </div>
    </div>

    <div class="field">
      <label class="label">Título</label>
      <div class="control">
        <input class="input" type="text" placeholder="Insira o título da pergunta" v-model="formulario.titulo">
      </div>
    </div>

    <div class="field">
      <label class="label">Conteúdo da pergunta</label>
      <div class="control">
        <textarea class="textarea" placeholder="Digite aqui o conteúdo da pergunta" v-model="formulario.texto"></textarea>
      </div>
    </div>

    <!-- <div class="field">
      <label class="label">Imagem</label>
      <div class="control">
        <input class="input" type="text" placeholder="Insira a URL da imagem" v-model="formulario.url_imagem">
      </div>
    </div> -->

    <div class="file has-name">
      <label class="file-label">
        <input class="file-input" type="file" name="resume" v-on:change="imagemSelecionada($event)">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
            Escolha uma imagem...
          </span>
        </span>
        <span class="file-name">
          {{ arquivoImagem.nome_imagem ? arquivoImagem.nome_imagem : '...' }}
        </span>
      </label>
    </div>

    <div class="image-container">
      <img class="image" :src="arquivoImagem.url_imagem" alt="">
    </div>

    <div
      v-for="(opcao, index) in formulario.opcoes"
      :key="index"
      class="field">
      <label class="label">Opcao</label>
      <div class="control">
        <input class="input" type="text" placeholder="Texto da opção" v-model="opcao.opcao_texto">
      </div>

      <label class="label">Próxima pergunta</label>
      <div class="select">
        <select @change="alterarProximaPerguntaDaOpcao($event, index)">
          <option selected>Seleciona a próxima pergunta</option>
          <option
            v-for="proximaPergunta in proximasPerguntas"
            :key="proximaPergunta.id"
            :value="proximaPergunta.id"
            :selected="opcao.proxima_pergunta === proximaPergunta.id"
          >
            {{ proximaPergunta.data().titulo }}
          </option>
        </select>
      </div>

      <div class="control">
        <button class="button is-link" @click="removerOpcao(index)">Remover</button>
      </div>
    </div>

    <div class="control">
      <button class="button is-link" @click="adicionarNovaOpcao()">Adicionar</button>
    </div>

    <div class="field is-grouped">
      <div class="control" v-if="!route.params.idPergunta">
        <button @click="adicionarNovaPergunta()" class="button">Cadastrar</button>
      </div>
      <div class="control" v-if="route.params.idPergunta">
        <button @click="editarPergunta()" class="button">Salvar Edicao</button>
      </div>
      <div class="control">
        <RouterLink to="/dashboard" class="button is-danger">Cancelar</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { db, storage } from '@/firebase'
import { collection, getDocs, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { RouterLink, useRouter, useRoute } from 'vue-router'
import { getStorage, ref as refStorage, uploadBytes, getDownloadURL } from "firebase/storage";

const router = useRouter()
const route = useRoute()

const proximasPerguntas = ref([]);
const formulario = ref({
  nome: '',
  texto: '',
  titulo: '',
  url_imagem: '',
  opcoes: [
    {
      opcao_texto: '',
      proxima_pergunta: ''
    },
  ]
})

const perguntasRef = collection(db, "perguntas");
const storageRef = ref(storage);
let idPergunta = null
const arquivoImagem = ref({})

onMounted( () => {
  if(route.params.idPergunta) {
    idPergunta = route.params.idPergunta
    carregaPerguntaParaEdicao(idPergunta)
  }

  getTodasPerguntas();
});

const getTodasPerguntas = async () => {
  const querySnapshot = await getDocs(perguntasRef);
  querySnapshot.forEach((doc) => {
    proximasPerguntas.value.push(doc);
  });
}

const alterarProximaPerguntaDaOpcao = (event, index) => {
  formulario.value.opcoes[index]['proxima_pergunta'] = event.target.value;
}

const removerOpcao = (index) => {
  formulario.value.opcoes.splice(index, 1);
}

const adicionarNovaOpcao = () => {
  formulario.value.opcoes.push({
      opcao_texto: '',
      proxima_pergunta: ''
    })
}

const adicionarNovaPergunta = async () => {
  await enviarImagem();

  await addDoc(perguntasRef, formulario.value);
  router.push("/dashboard");
}

const enviarImagem = async () => {
  const extensaoImagem = arquivoImagem.value.type.split('/')[1]
  const nomeDaImagem = Date.now() + extensaoImagem
  const mountainsRef = refStorage(storage, nomeDaImagem);

  await uploadBytes(mountainsRef, arquivoImagem.value).then( async () => {
    formulario.value.url_imagem = await getDownloadURL(mountainsRef)
  });
}

const carregaPerguntaParaEdicao = async (idPergunta) => {
  const docRef = doc(db, "perguntas", idPergunta);
  const docSnap = await getDoc(docRef);

  formulario.value = docSnap.data();
  arquivoImagem.value.url_imagem = docSnap.data().url_imagem
}

const editarPergunta = async () => {

  await enviarImagem();

  const docRef = doc(db, "perguntas", idPergunta);
  await updateDoc(docRef, formulario.value);
  router.push("/dashboard");
}

const imagemSelecionada = (event) => {
  const imagem = event.target.files[0]
  arquivoImagem.value = imagem
  arquivoImagem.value.url_imagem = URL.createObjectURL(imagem)
}
</script>