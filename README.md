<br>

<p align="center">
<img src="./@shuashuaa-vuetify-kit.png" width="300" />
</p>

<h1 align="center">@shuashuaa/vuetify-kit</h1>

<p align="center">
A Login Page Library that provides pre-defined props made for vue and vuetify projects
<!-- A Library that provides pre-defined user interfaces made with vue and vuetify -->
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@viktor-luna/vue-kit-3"><img src="https://img.shields.io/npm/v/@viktor-luna/vue-kit-3?color=c95f8b&amp;label=" alt="NPM version"></a></p>

<br>

## Installation

```sh
npm install @shuashuaa/vuetify-kit --force
```

## Importation

### main.js
```
import { createApp } from 'vue'
import App from './App.vue'

import { vuetify } from "@shuashuaa/vuetify-kit";
import "@shuashuaa/vuetify-kit/style.css";
import 'vuetify/styles'

createApp(App)
.use(vuetify)
.mount('#app')
```

## Usage
### yourComponent.vue
```
<script setup>
import { MyButton } from "@shuashuaa/vuetify-kit";
</script>

<template>
    <div>
        <MyButton label="It's Working!"/>
    </div>
</template>

```

# Login Props

### BACKGROUND
- BgColor
- BgImg

## CARD
- isLoading

## CARD LEFT
- cardColorL
### Title icon (System Icon defaukt)
- titleIcon
- titleIconColor
### Title (System name default)
- Title
- TitleColor
### Version (0.0.1 default)
- version
- versionColor
### Subtitle (make something interesting default)
- subtitleName
- subtitleColor
### Particles JS
- boolean if clickable or not
### Card Powered by Note
- PoweredByTitle (Integrated HRD Systems default)
- PoweredByColor (Black default)

## CARD RIGHT
- cardColorR
### welcome note
- WelcomeNoteColor
### login note
- subNoteNoteColor
### Input
- UserNameInput
- PasswordInput
### Button
- ButtonColor
- ButtonTitle
- ButtonIcon

### GENERAL
- FontFamily

### CREATE .npmrc

npm login
npm config ls -l
get the .npmrc file where the commands throw it
paste it to your app

## License

[MIT](./LICENSE) License &copy; 2024-PRESENT [Shuashuaa](https://github.com/Shuashuaa)

catch, must support HTML references. ex. "I'm <b>Ironman</b>"
