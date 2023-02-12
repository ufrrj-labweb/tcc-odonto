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
      class="field is-grouped mt-5"
    >
      <div class="control is-expanded">
        <input class="input" type="text" placeholder="Texto da opção" v-model="opcao.opcao_texto">
      </div>

      <div class="select">
        <select @change="alterarProximaPerguntaDaOpcao($event, index)">
          <option selected>Seleciona a próxima pergunta</option>
          <option
            v-for="proximaPergunta in proximasPerguntas"
            :key="proximaPergunta.id"
            :value="proximaPergunta.id"
            :selected="opcao.proxima_pergunta === proximaPergunta.id"
          >
            {{ proximaPergunta.data().nome }}
          </option>
        </select>
      </div>

      <div class="control ml-3">
        <button class="button" @click="removerOpcao(index)">Remover opcao</button>
      </div>
    </div>

    <div class="control mt-5">
      <button class="button" @click="adicionarNovaOpcao()">Adicionar opcao</button>
    </div>

    <div class="field is-grouped is-grouped-right mt-6">
      <div class="control" v-if="!route.params.idPergunta">
        <button @click="adicionarNovaPergunta()" class="button">Cadastrar</button>
      </div>
      <div class="control" v-if="route.params.idPergunta">
        <button @click="editarPergunta()" class="button">Salvar Edicao</button>
      </div>
      <div class="control">
        <RouterLink to="/dashboard" class="button is-danger is-light">Cancelar</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import { db, storage } from '@/firebase';
import { RouterLink, useRouter, useRoute } from 'vue-router';
import { 
  collection, getDocs, addDoc, 
  doc, getDoc, updateDoc 
} from "firebase/firestore";
import { 
  ref as refStorage, uploadBytes, 
  getDownloadURL, deleteObject 
} from "firebase/storage";

const router = useRouter()
const route = useRoute()

/*
  REFERÊNCIAS DO FORMULÁRIO
*/
const proximasPerguntas = ref([]);
const arquivoImagem = ref({})
const formulario = ref({
  nome: '',
  texto: '',
  titulo: '',
  url_imagem: '',
  nome_imagem_firestore: '',
  opcoes: [
    {
      opcao_texto: '',
      proxima_pergunta: ''
    },
  ]
})

/*
  REFERÊNCIAS DO FIREBASE
*/
const perguntasRef = collection(db, "perguntas");

/*
  OUTRAS VARIÁVEIS
*/
let idPergunta = null


onMounted( () => {
  if(route.params.idPergunta) {
    idPergunta = route.params.idPergunta;
    carregaPerguntaParaEdicao(idPergunta);
  }

  getTodasPerguntas();
});

/*
  GET TODAS AS PERGUNTAS
*/
const getTodasPerguntas = async () => {
  const querySnapshot = await getDocs(perguntasRef);
  querySnapshot.forEach((doc) => {
    proximasPerguntas.value.push(doc);
  });
}

/**
 * ALTERA PROXIMA PERGUNTA
 */
const alterarProximaPerguntaDaOpcao = (event, index) => {
  formulario.value.opcoes[index]['proxima_pergunta'] = event.target.value;
}

/**
 * FUNCOES QUE GERENCIAM AS OPCOES
 */
const removerOpcao = (index) => {
  formulario.value.opcoes.splice(index, 1);
}

const adicionarNovaOpcao = () => {
  formulario.value.opcoes.push({
    opcao_texto: '',
    proxima_pergunta: ''
  });
}

/**
 * FUNCOES QUE SE COMUNICAM COM O FIREBASE
 */

const carregaPerguntaParaEdicao = async (idPergunta) => {
  const docRef = doc(db, "perguntas", idPergunta);
  const docSnap = await getDoc(docRef);

  formulario.value = docSnap.data();
  arquivoImagem.value.url_imagem = docSnap.data().url_imagem;
}

const adicionarNovaPergunta = async () => {
  if(Object.keys(arquivoImagem.value).length > 0){
    await enviarImagem();
  }

  formulario.value.data_criacao = Date.now()

  await addDoc(perguntasRef, formulario.value);
  router.push("/dashboard");
}

const editarPergunta = async () => {
  if("type" in arquivoImagem.value){
    await apagarImagemAntiga();
    await enviarImagem();
  }  

  const docRef = doc(db, "perguntas", idPergunta);
  await updateDoc(docRef, formulario.value);
  router.push("/dashboard");
}

/**
 * FUNÇOES QUE MANIPULAM A IMAGEM
 */
const enviarImagem = async () => {
  const extensaoImagem = arquivoImagem.value.type.split('/')[1];
  const nomeDaImagem = Date.now() + extensaoImagem;
  const mountainsRef = refStorage(storage, nomeDaImagem);

  await uploadBytes(mountainsRef, arquivoImagem.value).then( async () => {
    formulario.value.url_imagem = await getDownloadURL(mountainsRef);
    formulario.value.nome_imagem_firestore = nomeDaImagem;
  });
}

const apagarImagemAntiga = async () => {
  const imagemParaApagarRef = refStorage(storage, formulario.value.nome_imagem_firestore);
  await deleteObject(imagemParaApagarRef)
}

const imagemSelecionada = (event) => {
  const imagem = event.target.files[0]
  arquivoImagem.value = imagem
  arquivoImagem.value.url_imagem = URL.createObjectURL(imagem)
}
</script>

<style>
.container {
  padding: 10px;
}

.button, .button:active, .button:visited, .button:focus {
  background-color: #008f4f;
  color: #FDFDFF
}

.button:hover {
  background-color: #008f4f;
  color: #ffcc29;
  border-color: #FDFDFF;
}
</style>