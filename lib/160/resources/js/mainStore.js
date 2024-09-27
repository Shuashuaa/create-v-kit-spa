import { defineStore } from 'pinia'

export const useSampleStore = defineStore('counter', {
    state: () => {
        return {
            count: 0,
            greet: 'Ohayooooo!',
        }
    },

    getters: {
        doubleCount: (state) => state.count * 2,
    },
    
    actions: {
        increment() {
            this.count++
        },
    },
})