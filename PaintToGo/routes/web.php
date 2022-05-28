<?php

use App\Http\Controllers\Session;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//View for pages
Route::get('/', function () {
    return view('welcome');
});

Route::get('/order', function () {
    return view('welcome');
});

Route::get('/consult', function () {
    return view('welcome');
});

Route::get('/request', function () {
    return view('welcome');
});


Route::get('/adminNullTables', function () {
    return view('welcome');
});

Route::get('/managerNullTable', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('welcome');
});

Route::get('/profile', function () {
    return view('welcome');
});
Route::get('/administration', function () {
    return view('welcome');
});

Route::get('/inventory', function () {
    return view('welcome');
});

