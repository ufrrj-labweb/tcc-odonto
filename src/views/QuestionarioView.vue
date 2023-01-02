<template>
  <div class="container">
    
    <h1 class="title has-text-centered is-1 mt-4">Odonto App</h1>
    
    <div class="box mb-6">
      <h2 class="title has-text-centered">{{ pergunta.titulo }}</h2>

      <p class="is-size-3 mb-5 has-text-justified">
        {{ pergunta.pergunta }}
      </p>

      <div class="image-container">
        <img class="image has-image-centered" :src="pergunta.imagem_url" alt="">
      </div>

      <div class="opcoes-container buttons are-medium mt-6 is-justify-content-center">
        <button class="button">Opção A</button>
        <button class="button">Opção B</button>
        <button class="button">Opção C</button>
        <button class="button">Opção D</button>
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
  addDoc, collection, onSnapshot, 
  deleteDoc, doc, updateDoc, getDocs,
  query, orderBy, limit, where, getDoc
} from 'firebase/firestore'

const perguntasRef = collection(db, "perguntas");
const opcoesRef = collection(db, "opcoes");
const grupoOpcoesRef = collection(db, "grupo_opcoes");
const perguntasGrupoRef = collection(db, "perguntas_grupo");

/*
  PERGUNTAS
*/

const pergunta = ref('');

/*
  get Primeira Pergunta
*/

onMounted( async () => {
  const primeiraPerguntaQuery = query(perguntasRef, where("is_inicio", "==", true), limit(1));
  const primeiraPerguntaQuerySnapshot = await getDocs(primeiraPerguntaQuery);

  primeiraPerguntaQuerySnapshot.forEach(async (primeiraPergunta) => {
    
    const perguntasGrupo = await getPerguntasGrupo(primeiraPergunta.id);
    const opcoesIds = await getOpcoesGrupo(perguntasGrupo.id_grupo);
    // const opcoes = await getOpcoes(opcoesIds);

    

    // const pergutasGrupoQuery = perguntasGrupoRef.where('id_pergunta', "==", primeiraPergunta.id).get();
    // const pergutasGrupoQuery = ;

    // console.log(primeiraPergunta.id)
    // console.log(pergutasGrupoQuery)
    // console.log(perguntasGrupo)

    pergunta.value = primeiraPergunta.data();
  });  
});

/*
  get perguntas grupos
*/

const getPerguntasGrupo = async (perguntaId) => {
  // Faz a query
  const pergutasGrupoQuery = query(perguntasGrupoRef, where('id_pergunta', "==", perguntaId), limit(1));

  // Busca o resultado
  const pergutasGrupoQuerySnapshot = await getDocs(pergutasGrupoQuery);

  // retorna o resultado
  return pergutasGrupoQuerySnapshot.docs[0].data()
}

const getOpcoesGrupo = async (grupoId) => {
  const opcoesIds = [];

  const OpcoesGrupoQuery = query(grupoOpcoesRef, where('id_grupo', "==", parseInt(grupoId)));

  // Busca o resultado
  const OpcoesGrupoQuerySnapshot = await getDocs(OpcoesGrupoQuery);

  // retorna o resultado
  OpcoesGrupoQuerySnapshot.forEach((opcoesGrupos) => {
    opcoesIds.push({
      "id_opcao": opcoesGrupos.data().id_opcao, 
      "proxima_pergunta": opcoesGrupos.data().proxima_pergunta
    })
  })

  return opcoesIds
}

// const getOpcoes = async (opcoesIds) => {
//   const opcoesIds = [];

//   const OpcoesQuery = query(opcoesRef, where('id_grupo', "==", parseInt(grupoId)));
// }

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


