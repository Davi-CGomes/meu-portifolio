<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data'

const activeFilter = ref('Todos')

const filters = ['Todos', 'Dados', 'Machine Learning', 'IA']

const filteredProjects = computed(() =>
  activeFilter.value === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeFilter.value)
)

</script>

<template>
  <section id="projetos" class="section projects-section">
    <div class="container">
      <div class="projects-head">
        <div class="section-intro compact">
          <span class="section-index">03</span>
          <div>
            <p class="kicker">Projetos</p>
            <h2>Projetos que mostram<br /><em>o que eu sei fazer.</em></h2>
          </div>
        </div>

        <p class="projects-note">
          Cada projeto
          representa uma aplicação prática do meu aprendizado.
        </p>
      </div>

      <div class="filters">
        <button
          v-for="filter in filters"
          :key="filter"
          :class="{ active: activeFilter === filter }"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <div class="projects-grid">
        <article v-for="project in filteredProjects" :key="project.title" class="project-card">
          <div class="project-top">
            <span class="project-number">{{ project.number }}</span>
            <span class="project-category">{{ project.category }}</span>
          </div>

          <div class="project-body">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <small>{{ project.details }}</small>
          </div>

          <div class="project-footer">
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
            <div class="project-links">
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener">GitHub ↗</a>
              <a v-if="project.linkedin" :href="project.linkedin" target="_blank" rel="noopener">LinkedIn ↗</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
