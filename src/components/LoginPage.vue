<template>
 <main-template>
   <div slot="header">It's a Header</div>
   <section>
      <h1>Main content goes here.</h1>
      <p>bang bang!</p>
    </section>
    <footer slot="footer">It's a Footer</footer>
 </main-template>
</template>

<script>
import MainTemplate from './MainTemplate';

export default {
  components: {
    MainTemplate,
  },
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>
</style>
