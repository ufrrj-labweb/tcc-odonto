<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2 class="title has-text-centered is-size-3">Equipe: </h2>
          <div class="equipe">
            <figure class="image is-128x128 has-image-centered">
              <a href="https://www.linkedin.com/in/maxsantos97/" target="_blank">
                <img
                  title="Max Santos | Desenvolvedor"
                  src="@/assets/images/equipe/max_santos.jpeg"
                >
              </a>
            </figure>
            <figure class="image is-128x128 has-image-centered">
              <a href="https://www.linkedin.com/in/tiago-fran%C3%A7a-03835810/" target="_blank">
                <img
                  title="Tiago França | Orientador"
                  src="@/assets/images/equipe/tiago_franca.jpeg"
                >
              </a>
            </figure>
            <figure class="image is-128x128 has-image-centered">
              <a href="https://google.com" target="_blank">
                <img
                  title="Mariana Sancas | Doutoranda"
                  src="@/assets/images/equipe/mariana_sancas.png"
                >
              </a>
            </figure>
            <figure class="image is-128x128 has-image-centered">
              <a href="https://google.com" target="_blank">
                <img
                  title="Maysa Duarte | Pós-doutoranda"
                  src="@/assets/images/equipe/maysa_duarte.png"
                >
              </a>
            </figure>
            <figure class="image is-128x128 has-image-centered">
              <a href="https://google.com" target="_blank">
                <img
                  title="Laura Primo | Professora Associada"
                  src="@/assets/images/equipe/laura_primo.png"
                >
              </a>
            </figure>
          </div>
        </div>
        <div class="column">
          <h2 class="title has-text-centered is-size-3">Realização: </h2>
          <div class="faculdades">
            <figure class="image is-128x128">
              <a href="https://portal.ufrrj.br/" target="_blank">
              <img 
                title="UFRRJ | Universidade Federal Rural do Rio de Janeiro"
                src="@/assets/images/logos/rural_logo_branco.png"
              >
              </a>
            </figure>
            <figure class="image is-128x128">
              <a href="https://ufrj.br/" target="_blank">
                <img 
                  title="UFRJ | Universidade Federal do Rio de Janeiro"
                  src="@/assets/images/logos/ufrj_logo_branco.png"
                >
              </a>
            </figure>
          </div>
        </div>
      </div>
      <div>
        <p class="has-text-centered">
          <strong>Odonto App</strong> desenvolvido por <a href="https://www.linkedin.com/in/maxsantos97">Max Santos</a>
        </p>
      </div>  
    </div>    
  </footer>
</template>

<script setup>
</script>

<style scoped>
footer {
  background-color: #0f3b8c;
}

h2, p, p>* {
  color: #fff;
}

a:hover {
  color: #ffcc29
}

.faculdades, .equipe {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.equipe {
  justify-content: space-between;
  gap: 10px;
}
</style>