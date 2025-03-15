<script setup>
    import { piniaStore } from '../store.js';
    const store = piniaStore();
</script>

<template>
    <h1>HOME</h1>
    <h1>{{ store.greet }}</h1>
    <h1>Original : {{ store.count }}</h1>
    <h1>Getter : {{ store.doubleCount }}</h1>
    <v-btn @click="store.increment">Add</v-btn>
</template>