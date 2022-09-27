<script lang="ts" setup></script>

<template>
  <Menubar>
    <template #start>
      <router-link to="/">
        <h2>Le site avec les produits ouais ouais</h2>
      </router-link>
    </template>
    <template #end>
      <InputText placeholder="Search" type="text" />
    </template>
  </Menubar>
</template>

<style>
.p-menubar {
  border-radius: 0;
}

a {
  text-decoration: none;
}

a:visited {
  color: var(--text-color);
  text-decoration: none;
}
</style>
