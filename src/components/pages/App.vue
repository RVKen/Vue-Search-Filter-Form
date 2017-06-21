<template>
  <main-template>
    <section>
      <div style="background: #f09090">
        <router-view></router-view>
      </div>
    </section>
    <div slot="footer">© 2017 East View Information Services</div>
  </main-template>
</template>

<script>
import MainTemplate from '../templates/MainTemplate';

export default {
  components: {
    MainTemplate,
  },
  data() {
    return {};
  },
};
</script>

<style lang="stylus">
  @import '../../assets/stylus/main'

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
  }
</style>
