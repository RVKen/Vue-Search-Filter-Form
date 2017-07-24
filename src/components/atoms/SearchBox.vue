<template>
    <div id="sb-search" class="sb-search text-xs-center">
        <form width="100%">
            <input class="sb-search-input" placeholder="where is?" type="search" value="" name="search" id="search">
            <v-btn width="64px" icon class="pa-0 ma-0 search-btn">
                <v-icon>search</v-icon>
            </v-btn>
        </form>
    </div>
</template>
<<script>
export default {
  name: 'search-box',
  data() {
    return {};
  },
};
</script>

<style>
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
.sb-search-input:focus {
    border-color: #e2202c;
}
.sb-search-input:hover {
    border-color: #e2202c;
}
.search-btn{
    width: 64px;
    height: 64px;
    border: 1px #e2202c solid;
    background-color: #e2202c;
    left: -4px;
    border-radius: 0px;
}
</style>
