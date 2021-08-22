<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request){

            $validator = Validator::make($request->all(), [

                'email' => 'required|email',
                'password' => 'required|min:6|max:32'
            ]);
            if ($validator->fails()) {

                return response()->json(['errors' => $validator->errors()]);
            }

            if(Auth::attempt($request->only('email', 'password'))){

                if(Auth::user()->email_verified_at === null){

                    Auth::logout();
                    return response()->json(['warning' => 'Your Email Is Not Verified !']);

                }

                return response()->json(['success' => 'Login Successfull !']);

            }else{

                $validator->errors()->add('email', 'The provided credentials are wrong !!');
                return response()->json(['errors' => $validator->errors()]);
            }
        }



}
