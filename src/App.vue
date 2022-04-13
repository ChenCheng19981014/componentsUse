<template>
  <HelloWorld />
  <RouterView></RouterView>
</template>
<script setup lang="ts">
import HelloWorld from "./components/HelloWorld";
import { RouterView } from "vue-router";
</script>
<style>
#id {
  width: 100vw;
  height: 100vh;
}
body {
  top: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
}
</style>
