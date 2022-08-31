<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="root-container">
    <div id="main-header">
      <router-view name="header"></router-view>
    </div>
    <div id="main">
      <router-view></router-view>
    </div>
    <div id="main-footer">
      <router-view name="footer"></router-view>
    </div>
  </div>
</template>

<style>
#root-container {
  width: 100%;
}

#main-footer {
  width: 100% !important;
}
</style>
