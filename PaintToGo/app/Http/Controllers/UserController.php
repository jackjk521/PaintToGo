<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades \DB;
use Redirect, Response, File;
use Illuminate\Support\Facades \Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
   public function getUser(Request $req){
        $uid = $req->input('toProfile');
        $user =  DB::table('users')
                    ->where('users.user_id', $uid)
                    ->first();

        if( $user ){
            return response()->json([
                'user' => $user
            ]);

            return $user;
        }  
        else{
            return "No user found";
        }
   }

   public function getHistory(Request $req){

       $uid = $req->input('toHistory');

       $orderList =  DB::table('orders')
                    ->where('orders.user_id', $uid)
                    ->join('branch', 'branch.branch_id', '=', 'orders.branch_id')
                    ->get();

        if( $orderList ){
            return response()->json([
 
                'orderList' => $orderList,
                'user_id'=> $uid

            ]);
            return $orderList;
        }  
        else{
            return "No transactions";
            return $orderList;
        }
   }
}
