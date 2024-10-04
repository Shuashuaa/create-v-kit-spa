<template>
    <v-app>
        <v-app-bar
            density="compact"
            color="black"
            prominent
            >
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title> <b>Vue 3 - Laravel 8 SPA</b> </v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            temporary
            >

            <v-list density="compact" class="pt-0" >
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :value="item"
                    color="primary"
                    @click="$router.push(item.to)"
                >
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
        const drawer = ref(false);

        const items = ref([
            {
                text: 'Home',
                to: '/',
                icon: 'mdi-home'
            },
            {
                text: 'About',
                to: '/about',
                icon:'mdi-information-outline'
            },
        ]);
    
        return {
            drawer,
            items
        };
  },
};
</script>

<!-- <script>
export default {
    data: () => ({
        drawer: false,
        items: [
            {
                title: 'Home',
                to: '/',
                icon: 'mdi-home'
            },
            {
                title: 'About',
                to: 'about',
                icon:'mdi-information-outline'
            },
        ],

    }),
}   
</script> -->