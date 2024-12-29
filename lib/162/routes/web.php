<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}', function () {
    return view('layouts.app');
})->where('any','.*');