<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data'

const activeFilter = ref('Todos')
const currentImages = ref({})

const filters = ['Todos', 'Dados', 'Machine Learning', 'IA']

const filteredProjects = computed(() =>
  activeFilter.value === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeFilter.value)
)

function getProjectImages(project) {
  return project.images || []
}

function getCurrentIndex(project) {
  const images = getProjectImages(project)
  if (!images.length) return 0

  const index = currentImages.value[project.title] ?? 0
  return Math.min(index, images.length - 1)
}

function getCurrentImage(project) {
  const images = getProjectImages(project)
  if (!images.length) return ''
  return images[getCurrentIndex(project)]
}

function nextImage(project) {
  const images = getProjectImages(project)
  if (images.length < 2) return

  const current = getCurrentIndex(project)
  currentImages.value[project.title] = (current + 1) % images.length
}

function previousImage(project) {
  const images = getProjectImages(project)
  if (images.length < 2) return

  const current = getCurrentIndex(project)
  currentImages.value[project.title] = (current - 1 + images.length) % images.length
}

function setImage(project, index) {
  currentImages.value[project.title] = index
}
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

          <div class="project-image">
            <template v-if="getProjectImages(project).length">
              <img
                :src="getCurrentImage(project)"
                :alt="`Imagem do projeto ${project.title}`"
                loading="lazy"
              />

              <template v-if="getProjectImages(project).length > 1">
                <button
                  class="carousel-arrow carousel-prev"
                  type="button"
                  aria-label="Imagem anterior"
                  @click="previousImage(project)"
                >
                  ‹
                </button>

                <button
                  class="carousel-arrow carousel-next"
                  type="button"
                  aria-label="Próxima imagem"
                  @click="nextImage(project)"
                >
                  ›
                </button>

                <div class="carousel-dots" aria-label="Selecionar imagem">
                  <button
                    v-for="(_, index) in getProjectImages(project)"
                    :key="index"
                    type="button"
                    :class="{ active: getCurrentIndex(project) === index }"
                    :aria-label="`Ir para imagem ${index + 1}`"
                    @click="setImage(project, index)"
                  />
                </div>
              </template>
            </template>

            <div v-else class="project-image-placeholder">
              <span>{{ project.number }}</span>
              <strong>Imagem do projeto</strong>
            </div>
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
