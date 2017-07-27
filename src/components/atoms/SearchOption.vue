<template>
    <v-container>
        <v-btn flat class="select-range pl-2 pr-0 py-0" style="height: 3.5rem;" v-show="!collapse" v-on:click="collapse=true">{{filterOption}}<v-icon right x-large class="pl-5">expand_more</v-icon></v-btn>
        <v-card class="px-4 expand" v-show="collapse">
            <v-flex flat class="select-range" block>All years<v-btn icon v-on:click="collapse=false" class="close-btn"><v-icon x-large>close</v-icon></v-btn></v-flex>
            <v-divider class="px-4" style="background-color: white;"></v-divider>
            <v-layout row wrap class="select-range content my-1" block>
                <v-flex xs4 class="text-xs-center" @click="setOption('Last 24 hours')">Last 24 hours</v-flex>
                <v-flex xs4 class="text-xs-center" @click="setOption('Exact date')">Exact date</v-flex>
                <v-flex xs4 class="text-xs-center" @click="setOption('Date Range')">Date Range</v-flex>
            </v-layout>
            <v-divider class="px-4" style="background-color: white;"></v-divider>
            <v-layout row wrap class="select-range content my-1" block>
                <v-flex xs4 class="text-xs-center" @click="setOption('Last week')">Last week</v-flex>
                <v-flex xs4 class="text-xs-center" @click="setOption('Exact 2 week')">Exact 2 week</v-flex>
            </v-layout>
            <v-divider class="px-4" style="background-color: white;"></v-divider>
            <v-layout row wrap class="select-range content my-1" block>
                <v-flex xs4 class="text-xs-center" @click="setOption('Last month')">Last month</v-flex>
                <v-flex xs4 class="text-xs-center" @click="setOption('Last 2 months')">Last 2 months</v-flex>
                <v-flex xs4 class="text-xs-center" @click="setOption('Last 3 months')">Last 3 months</v-flex>
                <v-flex xs4 class="text-xs-center" @click="setOption('Last 6 months')">Last 6 months</v-flex>
            </v-layout>
            <v-divider class="px-4" style="background-color: white;"></v-divider>
            <v-layout row wrap class="select-range content my-1" block>
                <v-flex xs4 class="text-xs-center" @click="setOption('Last year')">Last year</v-flex>
                <v-flex xs4 class="text-xs-center" @click="setOption('Last 2 years')">Last 2 years</v-flex>
            </v-layout>
        </v-card>
    </v-container>
</template>
<script>
export default {
  data() {
    return {
      collapse: false,
      filterOption: 'All years',
    };
  },
  methods: {
    setOption(optionValue) {
      this.collapse = false;
      this.filterOption = optionValue;
    },
  },
};
</script>
<style>
.select-range{
  background-color: #e9e2f2 !important;
  color: #5e5e5e;
  font-weight: 600;
  text-transform: none;
  line-height: 3.5rem;
  font-size: 1.6em;
}
 .close-btn {
  color: #5e5e5e;
  float: right;
} 
.expand {
  background-color: #e9e2f2;
}
.content {
  font-weight: lighter;
}
</style>

