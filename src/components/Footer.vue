<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2 class="title has-text-centered is-size-3">Equipe: </h2>
          <div class="equipe">
            <ul>
              <li><a href="https://www.linkedin.com/in/maxsantos97/" target="_blank">Max Santos - Desenvolvedor</a></li>
              <li><a href="http://lattes.cnpq.br/9941773528712076" target="_blank">Tiago França - Orientador</a></li>
              <li><a href="http://lattes.cnpq.br/8813744643679880" target="_blank">Adilis França - Doutora</a></li>
              <li><a href="http://lattes.cnpq.br/8258110098411280" target="_blank">Laura Primo - Doutora</a></li>
              <li><a href="http://lattes.cnpq.br/8945163050246047" target="_blank">Mariana Sancas - Doutoranda</a></li>
              <li><a href="http://lattes.cnpq.br/5436324394362565" target="_blank">Maysa Duarte - Doutora</a></li>
            </ul>
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
              <a href="https://www.uerj.br/" target="_blank">
                <img 
                  title="UERJ | Universidade do Estado do Rio de Janeiro"
                  src="@/assets/images/logos/uerj_logo_branco.png"
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
  background-color: #008f4f;
  padding-bottom: 1.5rem;
}

h2, p, p>* {
  color: #fff;
}

.faculdades, .equipe {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: last baseline;
}

.equipe a {
  color: #fff;
}

.equipe a:hover {
  color: #ffcc29
}
</style>