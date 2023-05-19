<template>
  <div class="container">
    <h1 class="title has-text-centered is-1 mt-4">Trabalhos</h1>

    <RouterLink to="/nova-pergunta" style="margin-left:10%;" class="button has-text-centered mt-6 mb-6">Adicionar novo trabalho</RouterLink>
    <RouterLink to="/logout" style="margin-left:50%; background-color: rgb(153, 4, 4);" class="button has-text-centered mt-6 mb-6">Sair</RouterLink>

    <div class="columns is-multiline is-centered">
      <div 
        v-for="pergunta in perguntas"
        :key="pergunta.id"
        class="card column is-one-fifth">
        <header class="card-header">
            <p class="card-header-title">
              {{ pergunta.data().nome }}
            </p>
        </header>
        <div class="card-content">
            <div class="content">
              <h1>{{ pergunta.data().titulo }}</h1>
              <p>
                {{ pergunta.data().texto }}
              </p>
              <div class="image-container">
                <img class="image has-image-centered" :src="pergunta.data().url_imagem" alt="">
              </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink to="/dashboard" class="card-footer-item">Editar</RouterLink>
            <RouterLink to="#" @click="apagarPergunta(pergunta.id)" class="card-footer-item delete-link">Apagar</RouterLink>
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router'
import { db } from '@/firebase'
import { 
  collection, getDocs, query,
  deleteDoc, doc, orderBy
} from 'firebase/firestore'

/**
 * Referências do dashboard
 */
const perguntas = ref([]);

/**
 * Referências do firebase
 */
const perguntasRef = collection(db, "perguntas");

onMounted( () => {
  getTodasPerguntas()
});

const getTodasPerguntas = async () => {
  const queryPerguntas = query(perguntasRef, orderBy("data_criacao", "desc"));
  const querySnapshot = await getDocs(queryPerguntas);
  querySnapshot.forEach((doc) => {
    perguntas.value.push(doc);
  });
}

const apagarPergunta = async (perguntaId) => {
  await deleteDoc(doc(perguntasRef, perguntaId));

  perguntas.value = perguntas.value.filter( (pergunta) => pergunta.id !== perguntaId);
}
</script>

<style scoped>
.card {
  margin: 10px 10px;
}

.delete-link {
  color: red;
}
</style>