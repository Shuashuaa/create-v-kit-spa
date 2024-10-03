<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;

Route::get('/{any?}', [MainController::class, 'index'])->where('any', '.*');