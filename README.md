<br>

<p align="center">
<img src="https://github.com/Shuashuaa/v-kit/blob/main/@shuashuaa-v-kit.png" width="300" />
</p>

<h1 align="center">create-v-kit-spa</h1>

<p align="center">
A simple way to start your vue-laravel-spa projects.
<!-- A collection of vue-laravel-spa boilerplates Powered by vue, laravel, <br>
vite/webpack, vuetify and pinia. up-to-date, ready for local-deployment and fully customizable. -->
<!-- Looking for a boilerplate for your next project? Kickstart it with v-kit-spa now! -->
</p>

<p align="center">
<!-- https://shields.io/badges/npm-package-minimized-gzipped-size-scoped -->
<!-- 	https://simpleicons.org/ -->
<!-- <a href="https://www.npmjs.com/package/create-v-kit-spa"><img src="https://img.shields.io/npm/v/create-v-kit-spa?color=c95f8b&amp;label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/create-v-kit-spa"><img src="https://img.shields.io/npm/dw/create-v-kit-spa?style=flat-square" alt="NPM downloads"></a>
<a href="https://github.com/shuashuaa/v-kit/blob/main/LICENSE"><img src="https://img.shields.io/npm/v/create-v-kit-spa?style=flat-square" alt="License"></a> -->
<a href="https://github.com/shuashuaa/v-kit/blob/main/LICENSE"><img src="https://img.shields.io/npm/v/create-v-kit-spa?style=flat-square&logo=npm&color=ffe963" alt="VERSION"></a>
<a href="https://www.npmjs.com/package/create-v-kit-spa"><img src="https://img.shields.io/npm/dw/create-v-kit-spa?style=flat-square&logo=npm&color=ffe963" alt="NPM DOWNLOADS"></a>
<a href="https://github.com/shuashuaa/v-kit/blob/main/LICENSE"><img src="https://img.shields.io/bundlejs/size/create-v-kit-spa?style=flat-square&logo=npm&color=ffe963" alt="MINIFIED SIZE"></a>
<!-- 007EC6 -->
</p>
<!-- [![npm](https://img.shields.io/npm/v/@shuashuaa/vkit?color=c95f8b&amp;label=)](https://www.npmjs.com/package/vkit)
[![npm](https://img.shields.io/npm/dw/@shuashuaa/vkit?style=flat-square)](https://www.npmjs.com/package/vkit)
[![GitHub](https://img.shields.io/github/license/shuashuaa/v-kit?style=flat-square)](https://github.com/shuashuaa/v-kit/blob/main/LICENSE) -->
<br>

## Create your project

```sh
npm create v-kit-spa@latest
```
<br>

## Prerequisite

- `Apache/Nginx`
- `Mysql`
- `Php`
- `Node`

<!-- > Php to Laravel Version Table

| Php Version     | Laravel Version    |
| :-------------- | :------------------|
| `7.4`           | `^8.0x`            |
| `8.0`           | `^9.0x`            |
| `8.1`           | `^10.0x`           |
| `8.2`           | `^11.0x`           | -->

<!-- Download PHP Versions
https://windows.php.net/downloads/releases/archives/php-8.0.9-Win32-vs16-x64.zip -->

<br>

# Reference Table (❗ PHP Version is Important ❗)

### Mono Repo
> frontend and backend are united via configuration made it an sfa, easier to deploy but migrating or upgrading either frontend or backend is tricky-hard.

| Version & Type            | Structure    |             Features                                                  | Prerequisite      |
| :------------------------ | :------------| :---------------------------------------------------------------------| :-----------------|
| `vue 2 - laravel 8`       | `Monorepo`     | runs in `webpack` w/ the following: `pinia/vuex`, `vuetify 2`, `vue-router` | php `v7.4` && node `^18x` |
| `vue 3 - laravel 8`       | `Monorepo`     | runs in `webpack` w/ the following: `pinia`, `vuetify 3`, `vue-router`                     |php `v7.4` && node `^18x` |
| `vue 3 - laravel 9`       | `Monorepo`     | runs in `vite` w/ the following: `pinia`, `vuetify 3`, `vue-router`, `developer friendly` |php `v8.0` && node `^18x` |
| `vue 3 - laravel 10`       | `Monorepo`     | runs in `vite` w/ the following: `pinia`, `vuetify 3`, `vue-router`, `developer friendly` | php `v8.1` && node `v18^` |
| `vue 3 - laravel 11`       | `Monorepo`     | runs in `vite` w/ the following: `pinia`, `vuetify 3`, `vue-router`, `developer friendly` | php `v8.2^` && node `v18^` |

```
/
└── Project folder/
    ├── *Laravel and Vue files are combined here*
    └── README.md
```

<!-- ### Decoupled Repo
> frontend and backend are separated, much easier to update/upgrade either if needed.

| Version & Type            | Structure    |             Features                                                  | Prerequisite      |
| :------------------------ | :------------| :---------------------------------------------------------------------| :-----------------|
| `vue 3 - laravel 8`       | `Decoupled`  | runs in `vite` w/ the following: `pinia`, `vuetify 3`, `vue-router`, `developer friendly` |php `v7.4` && node `^18x` |

```
/
├── FrontEnd/
│   └── Vuejs files
└── Backend/
    └── Laravel files
``` -->
<br>

# Installation

<!-- [![cli-frames](http://i.imgur.com/RjY2kCn.gif)](#) -->

## Vue 2 - Laravel 8

> bundled and optimized in `webpack` 🕸️
  
| Commands                    | Action                                       |
| :-------------------------- | :--------------------------------------------|
| `yarn install`              | Installs node dependencies                   |
| `composer install`          | Installs composer dependencies               |
| `copy .env.example .env`    | Generates a .env file from an example        |
| `php artisan key:generate`  | Generates a key for .env file                |
| `npm run artisan-watch`     | Run both `php artisan serve` and `yarn watch`|
| `http://127.0.0.1:8000/`    | Visit your app, Enjoy! 🎉🎉                 |
<br>

## Vue 3 - Laravel 8

> bundled and optimized in `webpack` 🕸️

| Commands                  | Action                                       |
| :------------------------ | :--------------------------------------------|
| `yarn install`            | Installs node dependencies                   |
| `composer install`        | Installs composer dependencies               |
| `copy .env.example .env`  | Generates a .env file from an example        |
| `php artisan key:generate`| Generates a key for .env file                |
| `npm run artisan-watch`   | Run both `php artisan serve` and `yarn watch`|
| `http://127.0.0.1:8081/`  | Visit your app, Enjoy! 🎉🎉                 |
<br>

## Vue 3 - Laravel 9

> bundled and optimized in `vite` ⚡

| Commands                  | Action                                       |
| :------------------------ | :--------------------------------------------|
| `yarn install`            | Installs node dependencies                   |
| `composer install`        | Installs composer dependencies               |
| `copy .env.example .env`  | Generates a .env file from an example        |
| `php artisan key:generate`| Generates a key for .env file                |
| `npm run artisan-dev`     | Run both `php artisan serve` and `yarn dev`  |
| `http://127.0.0.1:8000/`  | Visit your app, Enjoy! 🎉🎉                 |
<br>

## Vue 3 - Laravel 10

> bundled and optimized in `vite` ⚡

| Commands                  | Action                                       |
| :------------------------ | :--------------------------------------------|
| `yarn install`            | Installs node dependencies                   |
| `composer install`        | Installs composer dependencies               |
| `copy .env.example .env`  | Generates a .env file from an example        |
| `php artisan key:generate`| Generates a key for .env file                |
| `npm run artisan-dev`     | Run both `php artisan serve` and `yarn dev`  |
| `http://127.0.0.1:8000/`  | Visit your app, Enjoy! 🎉🎉                 |
<br>

## Vue 3 - Laravel 11

> bundled and optimized in `vite` ⚡

| Commands                  | Action                                       |
| :------------------------ | :--------------------------------------------|
| `yarn install`            | Installs node dependencies                   |
| `composer install`        | Installs composer dependencies               |
| `copy .env.example .env`  | Generates a .env file from an example        |
| `php artisan key:generate`| Generates a key for .env file                |
| `php artisan migrate`     | Create a Sessions table                      |
| `npm run artisan-dev`     | Run both `php artisan serve` and `yarn dev`  |
| `http://127.0.0.1:8000/`  | Visit your app, Enjoy! 🎉🎉                 |
<br>

## Docs
Read full docs [here](https://github.com/Shuashuaa/v-kit-spa#readme).

## How to contribute
Have an idea? Found a bug? See [how to contribute](https://github.com/Shuashuaa/v-kit-spa/wiki/Contributing).

## Contributors
Thanks to:
- [RGie](https://github.com/vrlara)
<!-- <br>

## Changelog
To learn about the specific changes in each release, check the [Changelog](./Changelog).
<br> -->

## License
Free and Open Source Under [MIT](./LICENSE) License &copy; 2024-PRESENT [Shuashuaa](https://github.com/Shuashuaa)
