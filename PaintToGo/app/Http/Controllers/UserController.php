<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class UserController extends Controller
{
    public function viewUsers() {
        $users =  DB::table('users')->get();


        if( $users ){
            return response()->json([
                'users' => $users
            ]);
        }  
        else{
            return("bruhhhhh");
        }
    }
}
