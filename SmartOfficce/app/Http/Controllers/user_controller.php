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
        $user->src = "/pictures/default-avatar.jpg" ;
        $user->password =Hash::make( $request->input('password'));
        $user->save();
        return $user;
    }

    function validationRoute(){
        return "good";
    }
    function UserLogin(Request $request){
        $user = User::where('name', $request->username)->first();
        if(!$user || !Hash::check($request->password, $user->password)){
            return ["error" => "Username or Password did not matched!"];
        }

        $token = $user->createToken('my-app-token')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);

        //return $user;
    }
    function GetUserProfilePic(Request $request){
        $user = User::where('name', $request->username)->first();

        return $user->src;
    }
    function ChangePassword(Request $request){
        $user = User::where('name', $request->username)->first();
        if(!$user || !Hash::check($request->password, $user->password)){
            return ["error" => "Username or Password did not matched!"];
        }
    }
}
