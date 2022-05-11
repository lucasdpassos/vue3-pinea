import { defineStore } from "pinia";

export const useCounterStore = defineStore("main", {
    state: () => ({
        counter: 24,
        cartCounter: 0,
        name: "Lucas",
        age: 0,
        job: ""
    }),
    getters: {      
        availableItems: (state) => {
            return state.counter - state.cartCounter
        }
    },
    actions: {
        reset() {
            this.cartCounter = 0,
            this.counter = 24
        },
        addOne() {            
            this.cartCounter++
            this.counter = this.counter - 1
        }
    }
})