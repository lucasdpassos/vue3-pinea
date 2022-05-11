<script setup lang="ts">
import { defineProps, reactive } from "vue";
import { useCounterStore } from "../stores/useCounter";
import { storeToRefs } from "pinia";
import LittlePin from '../components/LittlePin.vue'


const main = useCounterStore()

const { counter, cartCounter, name, age, job } = storeToRefs(main);

const props = defineProps({
  title: String,
});

const state = reactive({
  title: {},
});

</script>

<template>
<div class="flex flex-col align-middle justify-center p-3">
      <h4 class="text-center mx-auto bg-lime-300" title="">{{title}}</h4>
      <div class="bg-purple-50 h-[300px] w-[300px] max-h-[300px] mx-auto flex flex-row flex-wrap scroll-smooth overflow-y-scroll">        
      <li class="flex" v-for="item in main.counter">      
        <LittlePin class="flex flex-row" />      
      </li>
    </div>
</div>
</template>

<style scoped>

</style>