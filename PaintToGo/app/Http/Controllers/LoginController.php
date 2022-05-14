<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Redirect, Response, File;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;


class LoginController extends Controller
{
    
    public function register(Request $req)
    {

        $user = new User;

        $user->firstName = $req->input('firstname');
        $user->lastName = $req->input('lastname');
        $user->email_add = $req->input('email');
        $user->password = $req->input('password');
        $user->user_contact = $req->input('user_contact');


        $emailV = User::where('email_add', '=', $user->email_add)->first();

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

        $user->email_add = $req->input('email');
        $user->password = $req->input('password');

        $userV = User::where('email_add', '=', $user->email_add)->first();
        $passV = User::where('password', '=', $user->password)->first();
        $branchV = DB::table('branch')->where('branch.user_id', '=', $userV->user_id)->first();

        if($userV && ($user->password === $userV->password)){ 
            if ($userV->level_name === "Admin" || $userV->level_name === "Manager") {
                return response()->json([
                    'user found' => $userV,
                    'user_id' => $userV->user_id,
                    'branch_id' => $branchV->branch_id,
                    'user_level' => $userV->level_name,
                    'status' => 200,
                    'message' => 'User Login Successfully',
                ]);
            } else {
                return response()->json([
                    'user found' => $userV,
                    'user_id' => $userV->user_id,
                    'user_level' => $userV->level_name,
                    'status' => 200,
                    'message' => 'User Login Successfully',
                ]);
            }
        } else {
            return response()->json([
               'status' => 400,
               'message' => 'Not found: Either email or password is invalid',
           ]);
       }
        
    }
}