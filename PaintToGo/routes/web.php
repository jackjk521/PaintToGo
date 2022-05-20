<?php

use App\Http\Controllers\Session;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsPage;
use App\Http\Controllers\ViewController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\DisplayController;
use App\Http\Controllers\RequestController;
use App\Http\Controllers\RequestListController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\EmployeeController;

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