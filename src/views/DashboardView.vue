<template>
  <div class="container">
    <h1 class="title has-text-centered is-1 mt-4">DASHBOARD</h1>

    <RouterLink to="/nova-pergunta" class="button">Adicionar</RouterLink>

    <div class="columns is-multiline is-centered">
      <div 
        v-for="pergunta in perguntas"
        :key="pergunta.id"
        class="card column is-one-fifth">
        <header class="card-header">
            <p class="card-header-title">
            {{ pergunta.data().nome }}
            </p>
            <button class="card-header-icon" aria-label="more options">
            <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </button>
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
            <RouterLink to="#" class="card-footer-item">Editar</RouterLink>
            <RouterLink to="#" class="card-footer-item">Clonar</RouterLink>
            <RouterLink to="#" @click="apagarPergunta(pergunta.id)" class="card-footer-item delete-link">Delete</RouterLink>
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
  deleteDoc, where, getDoc, doc
} from 'firebase/firestore'

const perguntas = ref([]);

const perguntasRef = collection(db, "perguntas");

onMounted( () => {
  getTodasPerguntas()
});

const getTodasPerguntas = async () => {
  const querySnapshot = await getDocs(perguntasRef);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());

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