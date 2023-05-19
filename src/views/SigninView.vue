<template>
  <div class="container">
    <br>
    <h4 class="title">Entrar</h4>
    <div class="registerForm">
      <form class="box mt-5" @submit.prevent="fazerLogin">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" v-model="formulario.email" placeholder="e.g. alex@example.com">
          </div>
        </div>
        <div class="field">
          <label class="label">Senha</label>
          <div class="control">
            <input class="input" type="password" v-model="formulario.password" placeholder="********">
          </div>
        </div>

        <div style="display: flex;">
          <button class="button is-primary login" type="submit">Entrar</button>
          <p style="padding:2%;">Não possui cadastro? <a href="register">Registrar-se</a></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import 'firebase/compat/auth';
import { reactive } from 'vue';
import { db, storage } from '@/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { 
  collection, getDocs, addDoc, 
  doc, getDoc, updateDoc, where, query 
} from "firebase/firestore";
import createPersistedState from 'vuex-persistedstate';

const auth = getAuth();
const router = useRouter();
const store = useStore();

let formulario = reactive({
  name: '',
  email: '',
  password: '',
});

const fazerLogin = async () => {
  const userRef = collection(db, "users");
  try {
    const userCredential = await signInWithEmailAndPassword(auth, formulario.email, formulario.password);
    const user = JSON.parse(JSON.stringify(userCredential.user));
    console.log(user.uid);
    let getUser = query(userRef, where("uid", "==", user.uid));
    let querySnapshot = await getDocs(getUser);
    const loggedUser = querySnapshot.docs[0].data();
    console.log('Usuário logado:', loggedUser);
    
    store.dispatch('setUser', loggedUser);
    router.push("/threads");

    
  } catch (error) {
    console.log(error);
  }
};

createPersistedState()(store);

</script>

<style>
.registerForm {
  width: 400px;
}
.login {
  margin-right: 2%;
}
</style>