<template>
  <div class="container">
    
    <h1 class="title has-text-centered is-1 mt-4">Odonto App</h1>
    
    <div class="box mb-6">
      <h2 class="title has-text-centered">{{ pergunta.titulo }}</h2>

      <p class="is-size-3 mb-5 has-text-justified">
        {{ pergunta.texto }}
      </p>

      <div class="image-container">
        <img class="image has-image-centered" :src="pergunta.url_imagem" alt="">
      </div>

      <div class="opcoes-container buttons are-medium mt-6 is-justify-content-center">
        <button
          @click="getPrimeiraPergunta()"
          class="button">Início
        </button>
        <button 
          v-for="(opcao, index) in pergunta.opcoes"
          :key="index" 
          @click="getProximaPergunta(opcao.proxima_pergunta)"
          class="button">{{ opcao.opcao_texto }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
/*
  IMPORTS
*/
import { ref, onMounted } from 'vue';
import { db } from '@/firebase'
import { 
  collection, getDocs, query, 
  limit, where, getDoc, doc
} from 'firebase/firestore'

const perguntasRef = collection(db, "perguntas");
const pergunta = ref('');

onMounted( () => {
  getPrimeiraPergunta()
});

const getPrimeiraPergunta = async () => {
  const primeiraPerguntaQuery = query(perguntasRef, where("is_inicio", "==", true), limit(1));
  const primeiraPerguntaQuerySnapshot = await getDocs(primeiraPerguntaQuery);

  primeiraPerguntaQuerySnapshot.forEach(async (primeiraPergunta) => {
    pergunta.value = primeiraPergunta.data();
  }); 
}

const getProximaPergunta = async (idProximaPergunta) => {
  const docRef = doc(db, "perguntas", idProximaPergunta);
  const docSnap = await getDoc(docRef);

  pergunta.value = docSnap.data();
}
</script>

<style>
.box {
  background-color: #FDFDFF;
  padding: 20px 80px;
}

.button {
  background-color: #E26D5A;
  color: #FDFDFF
}

.button:hover {
  background-color: #FDFDFF;
  color: #E26D5A;
  border-color: #E26D5A;
}
</style>


