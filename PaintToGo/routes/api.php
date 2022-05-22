<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RequestListController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\OrderListController;
use App\Http\Controllers\ConsultationsController;
use App\Http\Controllers\RequestItemController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\TransactionListController;
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


Route::get('/aRList', [TransactionListController::class, 'approvedR']);  
Route::get('/aOList', [TransactionListController::class, 'approvedO']);  
Route::get('/aCList', [TransactionListController::class, 'approvedC']);  

Route::get('/nRList', [TransactionListController::class, 'nullR']);  
Route::get('/nOList', [TransactionListController::class, 'nullO']);  
Route::get('/nCList', [TransactionListController::class, 'nullC']);  


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getProducts', [ProductController::class, 'getProducts']);
Route::get('/getBranches', [BranchController::class, 'getBranches']);
Route::get('/getOrders', [OrdersController::class, 'getOrders']);
Route::get('/getOrderLists', [OrderListController::class, 'getOrderLists']);

Route::post('/addRequestItem', [RequestItemController::class, 'store']);
Route::post('/addRequestList', [RequestListController::class, 'store']);
Route::post('/addOrders', [OrdersController::class, 'store']);
Route::post('/addOrderList', [OrderListController::class, 'store']);
Route::post('/addConsultations', [ConsultationsController::class, 'store']);