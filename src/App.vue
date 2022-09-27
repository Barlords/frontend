<script setup lang="ts">
import { RouterView } from "vue-router";
import MenuBar from "@/components/MenuBar.vue";
</script>

<template>
  <Toast />
  <header>
    <nav>
      <MenuBar />
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
@import "primevue/resources/themes/saga-blue/theme.css";
@import "primevue/resources/primevue.min.css";
@import "primeicons/primeicons.css";

* {
  padding: 0;
  margin: 0;
}

/* Desktop */
@media all and (min-width: 1024px) {
  main {
    padding: 25px 30vw;
  }
}

/* Tabled Landscape */
@media all and (min-width: 768px) and (max-width: 1024px) {
  main {
    padding: 25px 25vw;
  }
}

/* Tablet */
@media all and (min-width: 480px) and (max-width: 768px) {
  main {
    padding: 25px 10vw;
  }
}

/* Phone */
@media all and (max-width: 480px) {
  main {
    padding: 25px;
  }
}
</style>
