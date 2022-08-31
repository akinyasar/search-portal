<template>
  <header class="header-container" :class="{ 'is-fixed': isFixed }" ref="element">
    <button class="primary-button">Add new record</button>
  </header>
</template>

<script setup>
import { watch, onMounted, ref } from "vue";

</script>

<style scoped lang="scss">
.header-container {
  display: flex;
  justify-content: flex-end;
  position: sticky;
  padding: 5rem 5rem;
}
</style>

