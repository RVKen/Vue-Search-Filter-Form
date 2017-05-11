<template>
  <div>
    <LogoComponent></LogoComponent>
    <TagLineComponent></TagLineComponent>
  </div>
</template>

<script>
  import LogoComponent from './LogoComponent';
  import TagLineComponent from './TagLineComponent';

  export default {
    components: {
      LogoComponent,
      TagLineComponent,
    },
    data() {
      return {};
    },
  };

</script>

<style scoped>
  div {
    display: block;
    position: relative;
  }
</style>
