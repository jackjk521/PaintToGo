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
Route::get('/', [ViewController:: class, 'loginform']);

Route::get('/dashboard', [ViewController:: class, 'dashboard'])->name('dashboard');
Route::get('/products', [ViewController:: class, 'products'])->name('products');
Route::get('/products/form', [ViewController:: class, 'requestform'])->name('requestsform');
Route::get('/requests', [ViewController:: class, 'requests'])->name('requests');
Route::get('/requestlist', [ViewController:: class, 'requestlist'])->name('requestlist');
Route::get('/branches', [ViewController:: class, 'branches'])->name('branches');
Route::get('/admin', [ViewController:: class, 'admin'])->name('admin');
Route::get('/itemActions', [ItemController:: class, 'itemView'])->name('itemView');
Route::get('/weeklyReports', [ViewController:: class, 'admin'])->name('weeklyReports');

//Dashboard Bulk
Route::POST('bulkOrder', [RequestController::class,'bulkOrder']);

//Login
Route::get('/login',  [ViewController:: class, 'loginform'])->name('login');
Route::post('/login', [LoginController:: class, 'valid']);
//Logout
Route::get('/logout', [LoginController:: class, 'logout'])->name('logout');

//Request Form
Route::post('newRequest', [RequestController:: class, 'store'])->name('newRequest');
Route::get('/sendRequest', [RequestController:: class, 'destroy'])->name('sendRequest');

Route::get('/showReqList', [RequestController:: class, 'show'])->name('showReqList');
Route::delete('cancelRequest', [RequestController:: class, 'destroy'])->name('deleteRequest');
//Request List
Route::get('/addToList', [RequestListController:: class, 'store']);


//Live search in RequestListController
Route::get('/live_search', [RequestListController:: class, 'action'])->name('request_list.action');

Route::get('/addItem', [ProductsPage:: class, 'store']);

//Live search in Products Page
Route::get('/searchProduct', [ProductsPage:: class, 'action'])->name('products_page.action');
Route::get('/addItem', [ProductsPage:: class, 'store']);

Route::delete('cancelItem', [ProductsPage:: class, 'destroy']);

//Register Employee
Route::post('addEmployee',[LoginController:: class, 'store']);

//Admin Actions
Route::get('searchItem', [ItemController::class,'itemActions'])->name('item_page.action');

Route::POST('itemActions', [ItemController::class,'itemActions']);  
Route::POST('newItem', [ItemController::class,'newItem']);
Route::POST('editItem', [ItemController::class,'editItemActions']);

Route::POST('employeeActions', [EmployeeController::class,'employeeActions']);  
Route::POST('editEmployee', [EmployeeController::class,'editEmployee']);
Route::POST('deleteEmployee', [EmployeeController::class,'destroyEmployee']);

Route::POST('newTag', [TagController::class,'newTag']);
Route::POST('tagActions', [TagController::class,'tagActions']); 
Route::POST('editTag', [TagController::class,'editTag']);

Route::POST('branchActions', [BranchController::class,'branchActions']);  
Route::POST('newBranch', [BranchController::class,'newBranch']);
Route::POST('editBranch', [BranchController::class,'editBranch']);

Route::POST('supplierActions', [SupplierController::class,'supplierActions']);  
Route::POST('newSupplier', [SupplierController::class,'newSupplier']);
Route::POST('editSupplier', [SupplierController::class,'editSupplier']);