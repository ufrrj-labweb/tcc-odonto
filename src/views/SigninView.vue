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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
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
  try {
    const userCredential = await signInWithEmailAndPassword(auth, formulario.email, formulario.password);
    const user = userCredential.user;
    console.log('Usuário logado:', user);
    store.dispatch('setUser', user);
    router.push("/dashboard");
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