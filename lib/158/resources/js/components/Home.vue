<template>
    <v-card>
        <v-card-title class="container-header-home">Home</v-card-title>
        <v-card-text class="pa-5">
            <p> add yours here `table`, `button`, `etc`....</p>
            <p>{{ homeMessage }}</p>
        </v-card-text>
    </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState(['homeMessage'])
    }
};
</script>

<style>
    /* Let's make use of ( postcss-custom-properties ) so that we don't waste it. :) */
    /* you can also set this up in the css/app.css for globalisation */
    :root {
        --home-header-color: #b2cadf;
    }

    .container-header-home{
        background-color: var(--home-header-color);
    }
</style>