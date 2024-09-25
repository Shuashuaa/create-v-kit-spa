<template>
    <v-card>
        <v-card-title class="container-header-about">About</v-card-title>
        <v-card-text class="pa-5">
            <p> add yours here `table`, `button`, `etc`....</p>
            <p>{{ aboutMessage }}</p>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['aboutMessage'])
    }
};
</script>

<style>
    /* Let's make use of ( postcss-custom-properties ) so that we don't waste it. :) */
    /* you can also set this up in the css/app.css for globalisation */
    :root {
        --about-header-color: #59b78b;
        --about-container-padding: 100px;
    }
    
    .container-header-about{
        background-color: var(--about-header-color);
    }
    .container-subheader{
        padding: var(--about-container-padding);
    }
    
</style>