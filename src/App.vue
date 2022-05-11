<script setup lang="ts">
import { useCounterStore } from './stores/useCounter';
import { storeToRefs } from 'pinia';
import axios from 'axios'
const main = useCounterStore()

const {counter, cartCounter, name, age, job} = storeToRefs(main)

const orderResume = ""

function checkout() {
  const order = { 
    userName: main.name,
    orderedFruits: main.cartCounter,
    fruitsLeft: main.counter
   };
  console.log(order)
  main.reset()
}

</script>

<template>
  <h1>Superstore</h1>
  
  <div class="cart"></div>

  <p>The number of fruits available in the market: {{counter}}</p>  
  <p>The number of fruits inside your cart: {{cartCounter}}</p>

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
.cart {
  display: flex;
  margin: 0 auto;
  width: 300px;
  height: 300px;
  background-color: burlywood;
}
</style>
