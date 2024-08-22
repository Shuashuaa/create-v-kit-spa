<br>

<p align="center">
<img src="./@shuashuaa-v-kit.png" width="300" />
</p>

<h1 align="center">@shuashuaa/v-kit</h1>

<p align="center">
An all in one login scaffolding tool setup for a Vue.js-Vuetify login <br> template component with localStorage using Pinia and routing with Vue Router.
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@shuashuaa/v-kit"><img src="https://img.shields.io/npm/v/@shuashuaa/v-kit?color=c95f8b&amp;label=" alt="NPM version"></a></p>

<br>

## Installation

```sh
npm install @shuashuaa/v-kit --force
```

## Importation

### main.js
```
import { createApp } from 'vue'
import App from './App.vue'

import { vuetify } from "@shuashuaa/v-kit";
import "@shuashuaa/v-kit/style.css";
import 'vuetify/styles'

createApp(App)
.use(vuetify)
.mount('#app')
```

## Usage
### yourComponent.vue
```
<script setup>
import { LoginKit } from "@shuashuaa/v-kit";
</script>

<template>
    <div>
        <LoginKit
        titleName="Automated Server Fetching System"
        subtitleName="Make your fetching smoother like no other"
        version="1.0.0"
        bgColor="white"
        />
    </div>
</template>

```
<br>

> [!IMPORTANT]  
> Remove the `assets` folder from `src` as well as the `import path` in `main.js` file

# Props

| Command                   | Action                                               | Syntax                                            |
| :------------------------ | :--------------------------------------------------- | :------------------------------------------------ |
| `titleName`               | Changes the default title                            | String                                            |
| `subtitleName`            | Changes the default subtitle                         | String                                            |
| `version`                 | Changes the default version                          | String                                            |
| `teamName`                | Changes the current @shuashuaa/v-kit teamName        | String                                            |
| `icon`                    | Changes the default icon ( mdi-your-icon-of-choice ) | <a href="https://github.com/Shuashuaa](https://pictogrammers.com/library/mdi/">mdi icon library</a> |
| `bgColor`                 | Changes the background color                         | HEX (#ffffff) or just words 'blue, red, etc.'     |

## On-Going Props

- [ ] FontFamily - Changes the entire font-family
- [ ] Popup notifications on login
- [ ] and more..

## License

[MIT](./LICENSE) License &copy; 2024-PRESENT [Shuashuaa](https://github.com/Shuashuaa)

