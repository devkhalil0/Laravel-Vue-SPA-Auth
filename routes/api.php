<?php

use App\Http\Controllers\Auth\ConfirmPasswordController;
use App\Http\Controllers\Auth\ForgotPasswordController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Auth\VerificationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

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


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:sanctum')->get('/authenticated', function () {
    if(Auth::user()){
        return true;
    }else{
        return false;
    }
});

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [LoginController::class, 'login']);
Route::post('logout', [LogoutController::class, 'logout']);
Route::get('email/verify/{token}', [VerificationController::class, 'verifyemail']);
Route::post('email/verify/resendlink', [VerificationController::class, 'resendlink']);
// password 
Route::post('password/reset',[ForgotPasswordController::class, 'forgotpassword']);
Route::get('password/confirmation/{token}',[ConfirmPasswordController::class, 'confirmpassword']);
Route::post('password/change',[ConfirmPasswordController::class, 'changepassword']);

Route::middleware('auth:sanctum')->get('/authenticated/admin', function () {

    if (Auth::check() && Auth::user()->role == 'admin') {
        return true;
    } else{
        return false;
    }
});

// For User
Route::group(['middleware' => ['auth:sanctum']], function (){

});
// For Admin
Route::group(['middleware' => ['auth:sanctum', 'admin']], function (){

});
