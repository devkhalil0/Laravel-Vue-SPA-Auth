<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\ConfirmsPasswords;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class ConfirmPasswordController extends Controller
{
    public function confirmpassword($token = null){
        if($token == null){

            return response()->json(['warning' => 'Invalid Token !']);
        }

        $user = User::where('remember_token', $token)->first();

        if($user == null){
            return response()->json(['warning' => 'Invalid Token !']);
        }else{
            
            return response()->json(['user' => $user]);
        }
        
    }
    public function changepassword(Request $request){

        $validator = Validator::make($request->all(), [

            'password' => 'required|confirmed|min:6|max:32'
        ]);
        if ($validator->fails()) {
            
            return response()->json(['errors' => $validator->errors()]);
        }
        $user = User::where('email', $request->email)->first();
        $user->password = Hash::make($request->password);
        $user->remember_token = null;
        $user->save();

        return response()->json(['success' => 'Password Reset Successfull !']);

    }
}
