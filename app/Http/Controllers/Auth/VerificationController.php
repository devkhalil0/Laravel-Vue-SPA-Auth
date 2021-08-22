<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\MailVerifiaction;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\VerifiesEmails;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

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
    public function resendlink(Request $request){

        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()]);
        }

        $user = User::where('email', $request->email)->first();
        if($user != null){
            if($user->email_verified_at != null){
                return response()->json(['warning' => 'Your Email Is Already Verified !']);
            }
            $user->remember_token = Str::random(32);
            $user->save();
            Mail::to($user->email)->queue(new MailVerifiaction($user));

            return response()->json(['success' => 'Email Verificatoin Link Resend Successfull !']);
        }else{

            return response()->json(['warning' => 'No Account Registered In This Email !']);
        }

    }
}
