<script setup lang="ts">
import { useCounterStore } from "./stores/useCounter";
import { storeToRefs } from "pinia";
import MyMarket from './components/MyMarket.vue'
import MyCart from './components/MyCart.vue'


const main = useCounterStore();

const { counter, cartCounter, name, age, job } = storeToRefs(main);

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
  <h1 class="">Superstore</h1>

  <div class="flex flex-row justify-center align-middle w-[800px] mx-auto">
    <MyMarket title="Pinia Market" />
    <MyCart title="Your Cart" />
  </div>

  <p>The number of fruits available in the market: {{ counter }}</p>
  <p>The number of fruits inside your cart: {{ cartCounter }}</p>

  <button @click="main.addOne()">Buy one</button>

  <button @click="checkout()">Checkout</button>
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
