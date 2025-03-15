<br>


<div align="center">
<img src="https://gitlab.com/shuashuaa/v-kit-app/-/raw/main/@shuashuaa-v-kit.png?ref_type=heads" width="300" />
</div>

<div align="center">
<h1>create-v-kit-spa</h1>
</div>

<div align="center">
<p>
A simple way to start your vue-laravel-spa projects.
<!-- A collection of vue-laravel-spa boilerplates Powered by vue, laravel, <br>
vite/webpack, vuetify and pinia. up-to-date, ready for local-deployment and fully customizable. -->
<!-- Looking for a boilerplate for your next project? Kickstart it with v-kit-spa now! -->
</p>

</div>

<div align="center">
<p>
<!-- https://shields.io/badges/npm-package-minimized-gzipped-size-scoped -->
<!-- 	https://simpleicons.org/ -->
<!-- <a href="https://www.npmjs.com/package/create-v-kit-spa"><img src="https://img.shields.io/npm/v/create-v-kit-spa?color=c95f8b&amp;label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/create-v-kit-spa"><img src="https://img.shields.io/npm/dw/create-v-kit-spa?style=flat-square" alt="NPM downloads"></a>
<a href="https://github.com/shuashuaa/v-kit/blob/main/LICENSE"><img src="https://img.shields.io/npm/v/create-v-kit-spa?style=flat-square" alt="License"></a> -->

[![ci-test](https://github.com/Shuashuaa/create-v-kit-spa/actions/workflows/ci.yml/badge.svg)](https://github.com/Shuashuaa/create-v-kit-spa/actions/workflows/ci.yml)
<a href="https://github.com/shuashuaa/v-kit/blob/main/LICENSE"><img src="https://img.shields.io/npm/v/create-v-kit-spa?style=flat-square&logo=npm&color=ffe963" alt="VERSION"></a>
<a href="https://www.npmjs.com/package/create-v-kit-spa"><img src="https://img.shields.io/npm/dw/create-v-kit-spa?style=flat-square&logo=npm&color=ffe963" alt="NPM DOWNLOADS"></a>
<a href="https://github.com/shuashuaa/v-kit/blob/main/LICENSE"><img src="https://img.shields.io/bundlejs/size/create-v-kit-spa?style=flat-square&logo=npm&color=ffe963" alt="MINIFIED SIZE"></a>
<!-- 007EC6 -->
</p>

</div>
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

### Monolith Repo
> frontend and backend are in a single folder, united via configuration.

| Version & Type       |  Features                                                | Prerequisite                    |
| :--------------------|  :-------------------------------------------------------| :-------------------------------|
| `vue 2 - laravel 8`  |  runs in `webpack`, Development Ready                    | php `v7.4` && node `v18^`       |
| `vue 3 - laravel 8`  |  runs in `webpack`, Development Ready                    | php `v7.4` && node `v18^`       |
| `vue 3 - laravel 9`  |  runs in `vite`, Development Ready, Developer Friendly   | php `v8.0` && node `v18^`       |
| `vue 3 - laravel 10` |  runs in `vite`, Development Ready, Developer Friendly   | php `v8.1` && node `v18^`       |
| `vue 3 - laravel 11` |  runs in `vite`, Development Ready, Developer Friendly   | php `v8.2 - v8.3` && node `v18^`|

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
| `npm run build `          | Deploy! 🎉🎉                                |
<br>

## Docs
Read full docs [here](https://github.com/Shuashuaa/v-kit-spa#readme).

## How to contribute
Have an idea? Found a bug? See [how to contribute](https://github.com/Shuashuaa/v-kit-spa/wiki/Contributing).

## Contributors
Thanks to:
- [RGienz](https://github.com/RGienz) for contributing and maintaining [vuejs3 - laravel8](#vue-3---laravel-8) 👏
<!-- <br>

## Changelog
To learn about the specific changes in each release, check the [Changelog](./Changelog).
<br> -->

## License
Free and Open Source Under [MIT](./LICENSE) License &copy; 2024-PRESENT [Shuashuaa](https://github.com/Shuashuaa)