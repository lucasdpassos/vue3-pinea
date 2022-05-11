<script setup lang="ts">
import { defineProps, reactive } from "vue";

const props = defineProps({
  btnTitle: String,
});

const state = reactive({
  btnTitle: {},
});

</script>

<template>
<button class="bg-emerald-400 text-neutral-800 flex text-center justify-center align-middle w-[100px] p-[10px]">
    {{btnTitle}}
</button>
</template>

<style scoped>

</style>