<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RequestListController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\BranchController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\OrderListController;
use App\Http\Controllers\ConsultationsController;
use App\Http\Controllers\RequestItemController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\TransactionListController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\InventoryController;
use App\Http\Controllers\UtilityController;

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

Route::get('/viewRList', [TransactionListController::class, 'viewRList']);  
Route::get('/viewOList', [TransactionListController::class, 'viewOList']);  


Route::get('/approveRBtn', [TransactionListController::class, 'approveRBtn']);  
Route::get('/approveOBtn', [TransactionListController::class, 'approveOBtn']);  
Route::get('/approveCBtn', [TransactionListController::class, 'approveCBtn']);  

Route::post('/profile', [LoginController::class, 'profile']);
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/getProducts', [ProductController::class, 'getProducts']);
Route::get('/getBranches', [BranchController::class, 'getBranches']);
Route::get('/getOrders', [OrdersController::class, 'getOrders']);
Route::get('/getOrderLists', [OrderListController::class, 'getOrderLists']);
Route::get('/getInventory', [InventoryController::class, 'getInventory']);

Route::post('/addRequestItem', [RequestItemController::class, 'store']);
Route::post('/addRequestList', [RequestListController::class, 'store']);
Route::post('/addOrders', [OrdersController::class, 'store']);
Route::post('/addOrderList', [OrderListController::class, 'store']);
Route::post('/addConsultations', [ConsultationsController::class, 'store']);

Route::get('/getUser', [UserController::class, 'getUser']);
Route::get('/getHistory', [UserController::class, 'getHistory']);

//Admin CRUD and Branch Inventory Routes
Route::get('/viewProducts', [ProductController::class, 'viewProducts']);
Route::get('/viewUsers', [UserController::class, 'viewUsers']);
Route::get('/viewBrands', [BrandController::class, 'viewBrands']);
Route::get('/viewBranches', [BranchController::class, 'viewBranches']);
Route::get('/viewUtility', [UtilityController::class, 'viewUtility']);
Route::get('/viewEmployees', [UserController::class, 'viewEmployees']);

Route::post('/editProduct', [ProductController::class, 'editProduct']);
Route::post('/newProduct', [ProductController::class, 'newProduct']);
Route::post('/deleteProduct', [ProductController::class, 'deleteProduct']);

Route::post('/newUser', [UserController::class, 'newUser']);
Route::post('/editUser', [UserController::class, 'editUser']);
Route::post('/deleteUser', [UserController::class, 'deleteUser']);

Route::post('/newBranch', [BranchController::class, 'newBranch']);
Route::post('/editBranch', [BranchController::class, 'editBranch']);
Route::post('/deleteBranch', [BranchController::class, 'deleteBranch']);

Route::post('/newBrand', [BrandController::class, 'newBrand']);
Route::post('/editBrand', [BrandController::class, 'editBrand']);
Route::post('/deleteBrand', [BrandController::class, 'deleteBrand']);

Route::get('/viewBranchInventory', [BranchController::class, 'viewBranchInventory']);
