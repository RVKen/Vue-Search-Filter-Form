<template>
    <v-container>
        <v-flex v-if="!collapse" >
          <v-btn flat class="select-range pl-2 pr-0 py-0" v-on:click="collapse=true">{{filterOption}}<v-icon right x-large class="pl-5">expand_more</v-icon></v-btn>
          <v-menu
            v-if="showDatePicker"
            lazy
            :close-on-content-click="true"
            v-model="menu"
            transition="scale-transition"
            :nudge-left="0"
            :nudge-bottom="30"
            min-width="290px"
            style="vertical-align: baseline;"
            class="px-3" >
            <v-date-picker v-model="e3" scrollable></v-date-picker>
            <v-text-field
              slot="activator"
              v-model="e3"
              placeholder="YYYY-MM-DD"
              append-icon="event"
              readonly
            ></v-text-field>
           
          </v-menu>
        </v-flex>
        <v-card class="px-4 expand" v-if="collapse">
            <v-flex flat class="select-range" block>All years<v-btn icon v-on:click="collapse=false" class="close-btn"><v-icon x-large>close</v-icon></v-btn></v-flex>
            <v-divider class="px-4 divider"></v-divider>
            <v-layout row wrap class="select-range content my-1" block>
                <v-flex xs4 @click="setOption('Last 24 hours')">Last 24 hours</v-flex>
                <v-flex xs4 @click="setOption('Exact date')">Exact date</v-flex>
                <v-flex xs4 @click="setOption('Date Range')">Date Range</v-flex>
            </v-layout>
            <v-divider class="px-4 divider"></v-divider>
            <v-layout row wrap class="select-range content my-1" block>
                <v-flex xs4 @click="setOption('Last week')">Last week</v-flex>
                <v-flex xs4 @click="setOption('Exact 2 week')">Exact 2 week</v-flex>
            </v-layout>
            <v-divider class="px-4 divider"></v-divider>
            <v-layout row wrap class="select-range content my-1" block>
                <v-flex xs4 @click="setOption('Last month')">Last month</v-flex>
                <v-flex xs4 @click="setOption('Last 2 months')">Last 2 months</v-flex>
                <v-flex xs4 @click="setOption('Last 3 months')">Last 3 months</v-flex>
                <v-flex xs4 @click="setOption('Last 6 months')">Last 6 months</v-flex>
            </v-layout>
            <v-divider class="px-4 divider"></v-divider>
            <v-layout row wrap class="select-range content my-1" block>
                <v-flex xs4 @click="setOption('Last year')">Last year</v-flex>
                <v-flex xs4 @click="setOption('Last 2 years')">Last 2 years</v-flex>
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
      e3: null,
      menu: false,
      showDatePicker: false,
    };
  },
  methods: {
    setOption(optionValue) {
      if (optionValue === 'Exact date') {
        this.showDatePicker = true;
      } else {
        this.showDatePicker = false;
      }
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
  line-height: 2.8rem;
  font-size: 1.6em;
  height: auto;
}
 .close-btn {
  color: #5e5e5e;
  float: right;
} 
.expand {
  background-color: #e9e2f2 !important;
}
.content {
  font-weight: lighter;
}
.divider {
  background-color: white;
}
</style>

