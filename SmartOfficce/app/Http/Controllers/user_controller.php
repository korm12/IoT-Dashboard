<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;


class user_controller extends Controller
{
    function UserRegister(Request $request){
        $user= new User;
        $user->name = $request->input('username');
        $user->email = $request->input('email');
        $user->password =Hash::make( $request->input('password'));
        $user->save();
        return $user;
    }
    function UserLogin(Request $request){
        $user = User::where('name', $request->username)->first();
        if(!$user || !Hash::check($request->password, $user->password)){
            return ["error" => "Username or Password did not matched!"];
        }

        return $user;
    }
}
