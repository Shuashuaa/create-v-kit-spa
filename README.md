<br>

<p align="center">
<img src="https://github.com/Shuashuaa/v-kit/blob/main/@shuashuaa-v-kit.png" width="300" />
</p>

<h1 align="center">@shuashuaa/v-kit</h1>

<p align="center">
An all in one login scaffolding tool setup for a Vue.js-Vuetify login <br> template component with localStorage using Pinia and routing with Vue Router.
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@shuashuaa/vkit"><img src="https://img.shields.io/npm/v/@shuashuaa/vkit?color=c95f8b&amp;label=" alt="NPM version"></a></p>

<br>

## Installation

```sh
npm install @shuashuaa/v-kit
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

| Command                   | Action                                               | Syntax & Resources                                                                                  |
| :------------------------ | :--------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
**GENERAL**
| `bgColor`                 | Changes the default background color white           | String, HEX (#ffffff)                                                                               |
**LCARD**
| `lCardColor`              | Changes the left card background color               | HEX (#ffffff) or just words 'blue, red, etc.'                                                       |
| `icon`                    | Changes the default icon ( mdi-your-icon-of-choice ) | <a href="https://pictogrammers.com/library/mdi/">mdi icon library</a> |
| `titleName`               | Changes the default title                            | String                                                                                              |
| `subtitleName`            | Changes the default subtitle                         | String                                                                                              |
| `version`                 | Changes the default version                          | String                                                                                              |
| `creditTitle`             | Changes the current Powered By                       | String                                                                                              |
| `creditName`              | Changes the current @shuashuaa/v-kit teamName        | String                                                                                              |
**RCARD**
| `rCardColor`              | Changes the right card background color              | HEX (#ffffff) or just words 'blue, red, etc.'                                                       |
| `loginColor`              | Changes the login button's color                     | HEX (#ffffff) or just words 'blue, red, etc.'                                                       |
| `loginName`               | Changes the login button's name                      | String                                                                                              |
| `loginIcon`               | Changes the login button's icon                      | <a href="https://pictogrammers.com/library/mdi/">mdi icon library</a>                               |
| `toRoute`                 | Route path where to redirect if credentials is accepted | link, path (ex. "/home")                                                                         |

# Built-in v-models and Functions

| Command                   | Action                                               | Syntax & Resources     |
| :------------------------ | :--------------------------------------------------- | :--------------------- |
| `username`                | Handles the username input                           | v-model                |                                                                      
| `password`                | Handles the password input                           | v-model                |
| `login()`                 | assigned function for login button                   | function               |

## On-Going Props & Functions

- [ ] Popup notifications on login
    - [ ] alert methods ( success, warning, error, info )
    - [ ] alert title
- [ ] FontFamily - Changes the entire font-family
- [ ] Generate pinia store files
- [ ] Generate vue-router files
- [ ] Creation of Registration Component
- [ ] template-type - classic, minimalist, verbose, etc.
- [ ] htmx features for customization
- [ ] and more..

## License

[SIC](./LICENSE) License &copy; 2024-PRESENT [Shuashuaa](https://github.com/Shuashuaa)

