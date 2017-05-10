<template>
  <div>
    <slot name="header"></slot>
    <slot/>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import "../assets/styles/global-styles.less";

</style>
