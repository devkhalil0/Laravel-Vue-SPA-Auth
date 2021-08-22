<p align="center"><a href="https://khalilvaai.com" target="_blank"><img src="https://khalilvaai.com/storage/Screenshort/1706252012643981.PNG" width="100%"></a></p>


## About This Repo

This Is Laravel with Vue Multi Auth like Admin and User System Application ! There I Used TailwindCss | 

Easyly You Can Install this on your system . just follow this step

- Copy This Repo Link      https://github.com/khalilvaai/Laravel-Vue-SPA-Auth.git 
- install composer
- cp .env.example .env 
- php artisan key:generate
- npm install 
- npm run dev 
- php artisan serve 

Enable Admin And Mail Verification System Goto resources ->js ->Store ->Index.

        EmailVerifyStatus: false,
        AdminStatus: false,

Also Enable Mail Send Code From app/Http/Controllers/Auth/RegisterController

// Mail::to($user->email)->queue(new MailVerifiaction($user));

Also Enable Chack Mail Verified System From app/Http/Controllers/Auth/LoginController

// if(Auth::user()->email_verified_at === null){

//     Auth::logout();
//     return response()->json(['warning' => 'Your Email Is Not Verified !']);

// }


For Mail Send System i Used Queue,

Queue_Connection = database  in  .env

For Queue Work 
Run this Commmand,

- php artisan queue:work 
