<template>
    <v-container>
            <v-layout class="pa-4">
                <v-flex xs12>
                    <div id="sb-search" class="sb-search text-xs-center">
                        <form width="100%">
                            <input class="sb-search-input" placeholder="where is?" type="search" value="" name="search" id="search">
                            <v-btn width="64px" icon class="pa-0 ma-0 search-btn">
                                <v-icon>search</v-icon>
                            </v-btn>
                        </form>
                    </div>
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex
                lg3 md3 sm4 xs12
                v-for="n in 4"
                :key="n"
                >
                <v-card flat tile>
                    <v-card-media
                    :src="`https://unsplash.it/300/150?image=${Math.floor(Math.random() * 100) + 1}`"
                    height="150px"
                    >
                    <v-layout fill-height text-xs-center>
                        <v-flex xs12 align-end flexbox>
                            <div full-width class="title-container">
                            </div>
                            <span class="title-text title" >Lorem Text</span>
                        </v-flex>
                    </v-layout>
                    </v-card-media>
                </v-card>
                </v-flex>
            </v-layout>
    </v-container>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  methods: {
  },
};
</script>

<style scoped>
.sb-search {
	width: 100%;
	min-width: 60px;
	height: 60px;
	overflow: hidden;
}

.sb-search-input {
	border: 1px #eaeaea solid;
	outline: none;
	background: #fff;
	height: 60px;
	margin: 0;
	z-index: 10;
	padding: 20px 65px 20px 20px;
	font-family: inherit;
	font-size: 20px;
	color: #2c3e50;
    width: calc(100% - 68px)
}
.search-btn{
    width: 64px;
    height: 64px;
    border: 1px #e2202c solid;
    background-color: #e2202c;
    left: -3px;
    border-radius: 0px;
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
