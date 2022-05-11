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
      <div class="bg-[#171717] w-[300px] max-h-[300px] mx-auto flex flex-row flex-wrap scroll-smooth overflow-y-scroll">
        <h4 title="nice title">{{title}}</h4>
      <li class="flex" v-for="item in main.cartCounter">      
        <LittlePin class="flex flex-row" />      
      </li>
    </div>
</template>

<style scoped>

</style>