<template>
    <select v-model="$i18n.locale" @change="saveLanguage">
      <option value="en">English</option>
      <option value="ua">Ukrainian</option>
    </select>
  </template>
  
  <script>
  export default {
    methods: {
      saveLanguage() {
        localStorage.setItem('language', this.$i18n.locale);
      }
    }
  }
  </script>
  