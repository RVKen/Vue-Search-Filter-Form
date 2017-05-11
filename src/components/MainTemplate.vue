<template>
  <div>
    <header-component></header-component>
    <slot name="header"></slot>

    <v-content>
      <v-container fluid>
        <v-row>
          <v-col md12>
            <slot/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer></v-footer>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent';

export default {
  components: {
    HeaderComponent,
  },
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
