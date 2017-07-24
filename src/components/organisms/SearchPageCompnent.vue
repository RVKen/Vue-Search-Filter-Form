<template>
    <v-container>
      <v-layout class="pa-4">
          <v-flex xs12>
              <SearchBox></SearchBox>
          </v-flex>
      </v-layout>
      <GalleryBar></GalleryBar>
    </v-container>
</template>

<script>
import SearchBox from '../atoms/SearchBox';
import GalleryBar from '../atoms/GalleryBar';

export default {
  components: {
    SearchBox,
    GalleryBar,
  },
  data() {
    return {
      checkList: [
        {
          id: 1,
          checked: true,
        },
        {
          id: 2,
          checked: false,
        },
        {
          id: 3,
          checked: true,
        },
        {
          id: 4,
          checked: false,
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style scoped>

</style>
