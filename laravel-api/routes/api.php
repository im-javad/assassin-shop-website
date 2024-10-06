<?php

use App\Http\Controllers\Auth\AuthController;
use Illuminate\Support\Facades\Route;

//? Auth Routes 
Route::post('register' , [AuthController::class , 'register'])->name('auth.register');
Route::post('login' , [AuthController::class , 'login'])->name('auth.login');
Route::middleware(['auth:api'])->group( function() {
    Route::get('me' , [AuthController::class , 'me'])->name('auth.me');
    Route::post('logout' , [AuthController::class , 'logout'])->name('auth.logout');
    Route::post('refresh' , [AuthController::class , 'refresh'])->name('auth.refresh');
});
