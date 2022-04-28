<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/signUp', [LoginController::class, 'register']); // route for registration form
Route::post('/login', [LoginController::class, 'login']); // route for login form

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
