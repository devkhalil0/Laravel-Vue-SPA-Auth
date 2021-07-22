<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\VerifiesEmails;
use App\Models\User;
use Carbon\Carbon;

class VerificationController extends Controller
{
    public function verifyemail($token = null){
        if($token == null){

            return response()->json(['warning' => 'Invalid Token !']);
        }

        $user = User::where('remember_token', $token)->first();

        if($user == null){
            return response()->json(['warning' => 'Invalid Token !']);
        }else{
            $user->email_verified_at = Carbon::now();
            $user->remember_token = null;
            $user->save();
            return response()->json(['success' => 'Now Your Email Verified !']);
        }

        if($user->email_verified_at != null){

            return response()->json(['warning' => 'Your Email Is Already Verified !']);
        }


    }
}
