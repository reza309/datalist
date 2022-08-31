<?php

use App\Http\Controllers\ListController;
use App\Http\Controllers\TreeController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/list',[ListController::class,'get_list'])->name('get-list');
Route::post('/list',[listController::class,'put_list'])->name('put-list');
Route::get('/list/ls',[listController::class,'put_list_ls'])->name('ls.get-list');
Route::get('/tree',[TreeController::class,'trees'])->name('ls.get-list');