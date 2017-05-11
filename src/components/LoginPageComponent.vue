<template>
 <main-template>

   <section>
      <h1>Main content goes here.</h1>
      <p>bang bang!</p>
    </section>

 </main-template>
</template>

<script>
import MainTemplate from './MainTemplate';

export default {
  components: {
    MainTemplate,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>
</style>
