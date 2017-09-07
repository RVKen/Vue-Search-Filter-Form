<template>
    <v-container class="filter">
        <v-flex v-if="!collapse" class="px-0">
          <v-btn class="pl-2 py-2 mx-0 btn btn--selector" sm6 v-on:click="collapse=true">{{currentFilter.optionName}}<v-icon right x-large class="pl-5">expand_more</v-icon></v-btn>
          <v-menu
            v-if="currentFilter.datePickerVisible"
            lazy
            :close-on-content-click="true"
            transition="scale-transition"
            :nudge-left="0"
            :nudge-bottom="30"
            min-width="290px"
            style="vertical-align: baseline;"
            class="px-3"
            sm6 >
            <v-date-picker v-model="selectedDate" scrollable></v-date-picker>
            <v-text-field
              slot="activator"
              v-model="selectedDate"
              placeholder="YYYY-MM-DD"
              append-icon="event"
              readonly
            ></v-text-field>
           
          </v-menu>
        </v-flex>
        <v-card class="pl-3 pr-4 filter--list" v-if="collapse">
            <v-layout row wrap class="py-2 filter--option" block>
              <span class="filter--option-title">All years</span>
              <v-btn icon v-on:click="collapse=false" class="close-btn">
                <v-icon>close</v-icon>
              </v-btn>
            </v-layout>
            <v-divider dark></v-divider>
            <v-layout row wrap class="filter--option" block>
                <v-flex xs4 class="py-2" @click="setOption('Last 24 hours')">Last 24 hours</v-flex>
                <v-flex xs4 class="py-2" @click="setOption('Exact date')">Exact date</v-flex>
                <v-flex xs4 class="py-2" @click="setOption('Date Range')">Date Range</v-flex>
            </v-layout>
            <v-divider dark></v-divider>
            <v-layout row wrap class="filter--option" block>
                <v-flex xs4 class="py-2" @click="setOption('Last week')">Last week</v-flex>
                <v-flex xs4 class="py-2" @click="setOption('Exact 2 week')">Exact 2 week</v-flex>
            </v-layout>
            <v-divider dark></v-divider>
            <v-layout row wrap class="filter--option" block>
                <v-flex xs4 class="py-2" @click="setOption('Last month')">Last month</v-flex>
                <v-flex xs4 class="py-2" @click="setOption('Last 2 months')">Last 2 months</v-flex>
                <v-flex xs4 class="py-2" @click="setOption('Last 3 months')">Last 3 months</v-flex>
                <v-flex xs4 class="py-2" @click="setOption('Last 6 months')">Last 6 months</v-flex>
            </v-layout>
            <v-divider dark></v-divider>
            <v-layout row wrap class="filter--option" block>
                <v-flex xs4 class="py-2" @click="setOption('Last year')">Last year</v-flex>
                <v-flex xs4 class="py-2" @click="setOption('Last 2 years')">Last 2 years</v-flex>
            </v-layout>
        </v-card>
    </v-container>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      collapse: false,
      selectedDate: null,
    };
  },
  methods: {
    setOption(optionValue) {
      if (optionValue === 'Exact date') {
        this.$store.dispatch('setFilter', { optionName: optionValue, datePickerVisible: true, selectedDate: this.selectedDate });
      } else {
        this.$store.dispatch('setFilter', { optionName: optionValue, datePickerVisible: false });
      }
      this.collapse = false;
    },
  },
  watch: {
    selectedDate(newValue) {
      this.$store.dispatch('setDate', newValue);
    },
  },
  computed: {
    ...mapGetters({
      currentFilter: 'currentState',
    }),
  },
};
</script>
<style scoped lang="less">
@import '../../assets/styles/theme.less';
.filter {
  .btn.btn--selector{
    background-color: @background-grey;
    color: @selector-color;
    font-weight: 600;
    height: auto;
  }
}

.filter--option{
  background-color: @background-grey;
  color: @selector-color;
  font-weight: lighter;
  .filter--option-title {
    font-weight: bold;
  }
  .close-btn {
    color: @selector-color;
    position: absolute;
    top: 8px;
    right: 0;
    margin: 0;
    height: 24px;
    width: 24px;

  } 
}
.filter--list {
  background-color: @background-grey;
}
</style>
