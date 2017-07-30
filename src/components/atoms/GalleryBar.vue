<template>
    <v-layout row wrap>
        <v-flex
        v-for="(item, key) in checkList"
        :key="key"
        >
            <v-card tile height="100" class="card--style">
                <v-card-media :src="`http://via.placeholder.com/140x100`" height="100" style="max-width: 140px;">
                    <v-layout text-xs-center>
                        <v-flex>
                            <v-checkbox v-model="item.checked" color="white" class="pic-check"></v-checkbox>
                            <div full-width class="title-container px-3 py-1">
                                <span class="white--text" >{{item.title}}</span>
                            </div>
                            
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
          title: 'Periodicals',
          checked: true,
        },
        {
          id: 2,
          title: 'e-Books',
          checked: false,
        },
        {
          id: 3,
          title: 'World News Conections',
          checked: true,
        },
      ],
    };
  },
};
</script>
<style>
.card--style {
    margin: 0 auto;
    max-width: 140px;
}
.pic-check {
    position: absolute;
    left: 1%;
    top: 0;
    color: white;
}
.title-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    line-height: 16px;
}
</style>
