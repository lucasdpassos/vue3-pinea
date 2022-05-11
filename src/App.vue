<script setup lang="ts">
import { useCounterStore } from "./stores/useCounter";
import { storeToRefs } from "pinia";
import MyMarket from './components/MyMarket.vue'
import MyCart from './components/MyCart.vue'
import Button from './components/Button.vue'


const main = useCounterStore();

const { counter, cartCounter, name, age, job } = storeToRefs(main);

const open = false

const orderResume = "";

function checkout() {
  const order = {
    userName: main.name,
    orderedFruits: main.cartCounter,
    fruitsLeft: main.counter,
  };
  console.log(order);
  main.reset();
}
</script>

<template>
  <h1 class="">Super Pinia Store</h1>

  <div class="flex flex-row justify-center align-middle w-[800px] mx-auto">
    <MyMarket title="Pinia Market" />
    <MyCart title="Your Cart" />
  </div>

  <p>The number of Pinias available in the market: {{ counter }}</p>
  <p>The number of Pinias inside your cart: {{ cartCounter }}</p>

  <div class="flex flex-row mx-auto justify-center align-middle">
  <Button class="p-2" @click="main.addOne" btnTitle="Buy One" />
  <Button class="p-2" @click="checkout()" btnTitle="Checkout" />
  <Button class="p-2" @click="open = true" btnTitle="Checkout" />
  </div>

  <div class="w-[300px] h-[300px] bg-black" v-if="open">
    <p>aaaaaaaaaaaaaaaaaai</p>
  </div>

 
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
