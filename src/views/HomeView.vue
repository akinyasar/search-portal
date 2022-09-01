<template>
  <main class="main-container">
    <div class="grid grid-cols-6">
      <img class="col-start-2 col-span-4" width="300" src="/main-logo.png" alt="main-logo">
      <span class="title-text col-start-5 col-span-2 d-flex justify-center pt-1">Search app</span>
    </div>
    <div class="mt-5 width-50">
      <div class="search-title mb-2">Find in records</div>
      <search-bar></search-bar>
    </div>
    <div class="top-news-container">
      <news></news>
    </div>
  </main>
</template>

<script setup>
import SearchBar from "@/components/search/SearchBar.vue"
import News from "@/components/main/News.vue"
</script>
<style scoped lang="scss">
.main-container {
  padding-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  .title-text {
    color: var(--color-light-secondary);
    font-size: 0.9rem;
    font-weight: 500;
  }

  .search-title {
    font-size: 2rem;
    font-weight: bold;
  }

  .top-news-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
    padding: 0rem 10rem;
    margin-top: 10rem;
    margin-bottom: 5rem;
  }
}
</style>
