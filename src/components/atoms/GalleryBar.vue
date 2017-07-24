<template>
    <v-layout row wrap>
        <v-flex
        lg3 md3 sm4 xs12
        v-for="(x, key) in checkList"
        :key="key"
        >
            <v-card flat tile>
                <v-card-media
                    :src="`https://unsplash.it/300/150?image=${Math.floor(Math.random() * 100) + 1}`"
                    height="150px" >
                    <v-layout fill-height text-xs-center>
                    <v-flex xs12 align-end flexbox>
                        <v-checkbox v-model="x.checked" color="white" class="pic-check"></v-checkbox>
                        <div full-width class="title-container">
                        </div>
                        <span class="title-text title" >Lorem Text</span>
                    </v-flex>
                    </v-layout>
                </v-card-media>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>
export default {
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
};
</script>
<style>
.pic-check {
    position: absolute;
    left: 5%;
    top: 5%;
    color: white;
}
.title-container {
    width: 100%;
    background-color: #000;
    opacity: .4;
    height: 4rem
}
.title-text {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;    
}
</style>
