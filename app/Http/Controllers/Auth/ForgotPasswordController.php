<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use App\Mail\MailVerifiaction;
use App\Mail\PasswordReset;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    // use SendsPasswordResetEmails;
    public function forgotpassword(Request $request){

        $user = User::where('email', $request->email)->first();
        if($user === null){
            return response()->json(['warning' => 'No User Found In This Email !']);
        }
        $user->remember_token = Str::random(32);
        $user->save();
        Mail::to($user->email)->send(new PasswordReset($user));
        // Mail::to($user->email)->queue(new PasswordReset($user));
        return response()->json(['success' => 'Password Reset Link Send Successfull !']);

    }

}
