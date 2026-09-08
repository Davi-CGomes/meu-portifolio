<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
<header class="navbar">
      <div class="container nav-inner">
        <a href="#inicio" class="brand" @click="closeMenu">
          DG<span>.</span>
        </a>

        <button class="menu-button" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Abrir menu">
          <i></i><i></i><i></i>
        </button>

        <nav :class="{ 'nav-open': menuOpen }">
          <a href="#sobre" @click="closeMenu">Sobre</a>
          <a href="#habilidades" @click="closeMenu">Habilidades</a>
          <a href="#projetos" @click="closeMenu">Projetos</a>
          <a href="#experiencia" @click="closeMenu">Experiência</a>
          <a href="#formacao" @click="closeMenu">Formação</a>
          <a href="#contato" class="nav-contact" @click="closeMenu">Contato</a>
        </nav>
      </div>
    </header>
</template>
