<template>
  <div class="container">
    <br>
    <h4 class="title">Registre-se</h4>
    <div class="registerForm">
      <form class="box mt-5" @submit.prevent="criarUsuario">
        <div class="field">
          <label class="label">Nome</label>
          <div class="control">
            <input class="input" type="text" v-model="formulario.name" placeholder="">
          </div>
        </div>
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
          <button class="button is-primary login" type="submit">Registrar</button>
          <p style="padding:2%;">Já possui um cadastro? <a href="signin">Entrar</a></p>
        </div>
      </form>
    </div>

  </div>
</template>

<script setup>
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { reactive } from 'vue';
import { getAuth , signInWithEmailAndPassword, 
  createUserWithEmailAndPassword  } from "firebase/auth";
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';


/*const users = collection(db, "users");
const auth = firebase.auth();*/

let formulario = reactive({
  name: '',
  email: '',
  password: '',
})

  const auth = getAuth();
  const store = useStore();
  const router = useRouter();

  const criarUsuario = async () => {
    try {
    const userCredential = await createUserWithEmailAndPassword(
      auth, formulario.email, formulario.password);
    const user = userCredential.user;
    console.log('Usuário criado:', user);
    fazerLogin(formulario.email, formulario.password)
  } catch (error) {
    console.log(error);//
  }
}

const fazerLogin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Usuário logado:', user);
    store.dispatch('setUser', user);
    router.push("/dashboard");
  } catch (error) {
    console.log(error);
  }
};



</script>

<style>
.registerForm{
  width:400px;
}
.login{
  margin-right: 2%;
}
</style>