<template>
  <UniversalModal><h1>Welcome to Frontend Meduzzen App</h1></UniversalModal>
  <router-view></router-view>
</template>

<script>
import UniversalModal from './components/UniversalModal.vue'

export default {
  name: 'App',
  components: {
    UniversalModal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
