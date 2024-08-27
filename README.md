<br>

<p align="center">
<img src="https://github.com/Shuashuaa/v-kit/blob/main/@shuashuaa-v-kit.png" width="300" />
</p>

<h1 align="center">@shuashuaa/v-kit</h1>

<p align="center">
An all in one login scaffolding page setup for a Vue.js-Vuetify <br> with localStorage using Pinia and routing with Vue Router.
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
import "@shuashuaa/v-kit/style.css";
import { LoginKit } from "@shuashuaa/v-kit";
import 'vuetify/styles'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetifyMain = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

createApp(App)
.use(LoginKit)
.use(vuetifyMain)
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
| `titleName`               | Changes the default title                            | String                                                                                              |
| `subtitleName`            | Changes the default subtitle                         | String                                                                                              |
| `version`                 | Changes the default version                          | String                                                                                              |
| `teamName`                | Changes the current @shuashuaa/v-kit teamName        | String                                                                                              |
| `icon`                    | Changes the default icon ( mdi-your-icon-of-choice ) | <a href="https://github.com/Shuashuaa](https://pictogrammers.com/library/mdi/">mdi icon library</a> |
| `lCardColor`              | Changes the left card background color               | HEX (#ffffff) or just words 'blue, red, etc.'                                                       |
| `rCardColor`              | Changes the right card background color              | HEX (#ffffff) or just words 'blue, red, etc.'                                                       |
| `btnColor`                | Changes the login button's color                     | HEX (#ffffff) or just words 'blue, red, etc.'                                                       |
| `btnName`                 | Changes the login button's name                      | String                                                                                              |
| `btnIcon`                 | Changes the login button's icon                      | <a href="https://github.com/Shuashuaa](https://pictogrammers.com/library/mdi/">mdi icon library</a> |

## On-Going Props

- [ ] toRoute - What page route to land if login is successful
- [ ] pop - Popup notifications on login
    - [ ] alert methods ( success, warning, error, info )
    - [ ] alert title
- [ ] template-type - classic, minimalist, verbose, etc.
- [ ] ${htmx? / v-html} features for customization
- [ ] fontFamily - Changes the font-family of a specific content
- [ ] fontStyle - Changes the font-style of a specific content
- [ ] and more..

## License

[MIT](./LICENSE) License &copy; 2024-PRESENT [Shuashuaa](https://github.com/Shuashuaa)
