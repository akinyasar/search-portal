<template>
  <main class="main-container">
    <div class="grid grid-cols-6">
      <img class="col-start-2 col-span-4" width="300" src="/main-logo.png" alt="main-logo">
      <span class="title-text col-start-5 col-span-2 d-flex justify-center pt-1">Search app</span>
    </div>
    <div class="mt-5 width-50 xs-width-75 sm-width-75 md-width-75">
      <div class="search-title mb-2">Find in records</div>
      <search-bar></search-bar>
    </div>
    <div class="top-news-container">
      <top-news></top-news>
    </div>
  </main>
</template>

<script setup>
import SearchBar from "@/components/search/SearchBar.vue"
import TopNews from "@/components/main/TopNews.vue"
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
    padding: 0rem 8rem;
    margin-top: 10rem;
    margin-bottom: 5rem;
  }
}
</style>
<style lang="scss">
@import "@/assets/styles/global.scss";

@media only screen and (max-width: $xs) {
  .top-news-container {
    padding: 0rem 1rem !important;
  }
}

@media only screen and (min-width: $xs) and (max-width: $sm) {
  .top-news-container {
    padding: 0rem 2rem !important;
  }
}

@media only screen and (min-width: $sm) and (max-width: $md) {
  .top-news-container {
    padding: 0rem 3rem !important;
  }
}

@media only screen and (min-width: $md) and (max-width: $lg) {
  .top-news-container {
    padding: 0rem 4rem !important;
  }
}
</style>
