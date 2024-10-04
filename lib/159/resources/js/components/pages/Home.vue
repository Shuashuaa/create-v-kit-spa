<template>
    <h1>HOME</h1>
    <h1>{{ sampleStore.greet }}</h1>
    <h1>Original : {{ sampleStore.count }}</h1>
    <h1>Getter : {{ sampleStore.doubleCount }}</h1>
    <v-btn @click="sampleStore.increment">Add</v-btn>
  </template>
  
  <script>
  import { useSampleStore } from '../../mainStore.js';
  
  export default {
    setup() {
        const sampleStore = useSampleStore();
    
        return {
            sampleStore,
        };
    },
  };
  </script>