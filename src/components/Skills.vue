<script setup>
import { skillGroups } from '../data'
</script>

<template>
<section id="habilidades" class="section skills-section">
  <div class="container">
    <div class="section-intro">
      <span class="section-index">02</span>
      <div>
        <p class="kicker">Conhecimentos</p>
        <h2>Ferramentas que<br /><em>fazem parte da minha stack.</em></h2>
      </div>
    </div>
    <div class="skills-grid">
      <article v-for="(group, index) in skillGroups" :key="group.title" class="skill-card">
        <div class="skill-number">0{{ index + 1 }}</div>
        <h3>{{ group.title }}</h3>
        <div class="skill-list">
          <span v-for="item in group.items" :key="item">{{ item }}</span>
        </div>
      </article>
    </div>
  </div>
</section>
</template>
