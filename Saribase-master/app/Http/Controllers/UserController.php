<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades \DB;
use Redirect, Response, File;
use Illuminate\Support\Facades \Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    
    public function register(Request $req)
    {

        $user = new User;

        $user->name = $req->input('username');
        $user->email = $req->input('email');
        $user->password = Hash::make($req->input('password'));

        $emailV = User::where('email', '=', $user->email)->first();

        if($emailV === null){
            $user->save();
            return response()->json([
                'validator' => $emailV,
                'status' => 200,
                'message' => 'User Saved Successfully',
            ]);

        }else{
            return response()->json([  // doesnt display tho
                'status' => 400,
                'message' => 'Error',
            ]);
        }

    }

    public function login(Request $req){

        $user = new User;

        $user->email = $req->input('email');
        $user->password = $req->input('password');

        $userV = User::where('email', '=', $user->email)->first();
        $passV = User::where('password', '=', $user->password)->first();
        
        if($userV && Hash::check($user->password, $userV->password)){ 
            
            return response()->json([
                'user found' => $userV,
                'id' => $userV->id,
                'status' => 200,
                'message' => 'User Login Successfully',
            ]);
        }
        else{
             return response()->json([
                'status' => 400,
                'message' => 'Not found: Either email or password is invalid',
            ]);
        }

        
    }
}
