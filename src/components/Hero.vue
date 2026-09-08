<script setup>
function closeMenu() {
  // Kept for compatibility with the CTA interaction.
}
</script>

<template>
<section id="inicio" class="hero">
        <div class="hero-grid container">
          <div class="hero-copy">
            <div class="status">
              <span></span>
              Disponível para oportunidades
            </div>

            <p class="kicker">Analista de Dados · Ciência da Computação</p>

            <h1>
              Transformo dados em
              <em>informação.</em>
            </h1>

            <p class="hero-description">
              Sou Davi Gomes, estudante de Ciência da Computação. Foco meus estudos e projetos em Análise de Dados, Machine Learning, Desenvolvimento Backend e construção de soluções com tecnologia.
            </p>

            <div class="hero-actions">
              <a href="#projetos" class="button button-primary" @click="closeMenu">Explorar projetos <span>↗</span></a>
              <a href="mailto:davi_cgomes@hotmail.com" class="button button-ghost">Falar comigo</a>
            </div>

            <div class="hero-meta">
              <span>Python</span>
              <span>SQL</span>
              <span>Machine Learning</span>
              <span>Cloud</span>
            </div>
          </div>

          <div class="hero-visual">
            <div class="visual-grid"></div>
            <div class="orbit orbit-one"></div>
            <div class="orbit orbit-two"></div>

            <div class="profile-card">
              <div class="profile-top">
                <span>DAV I · 01</span>
                <span>DATA / AI</span>
              </div>
              <img src="/images/profile.jpg" alt="Foto de Davi Gomes" />
              <div class="profile-bottom">
                <strong>Davi Gomes</strong>
                <span>Analista de Dados</span>
              </div>
            </div>

            <div class="float-card float-card-a">
              <span class="mini-label">FOCUS</span>
              <strong>DATA</strong>
            </div>

            <div class="float-card float-card-b">
              <span class="mini-label">STACK</span>
              <strong>PYTHON</strong>
            </div>

            <div class="axis-label">-08°59' · -40°31'</div>
          </div>
        </div>

        <div class="hero-scroll">
          <span>Scroll para explorar</span>
          <i></i>
        </div>
      </section>
</template>
