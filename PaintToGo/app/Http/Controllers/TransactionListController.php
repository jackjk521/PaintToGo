<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades \DB;
use Redirect, Response, File;
use Illuminate\Support\Facades \Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;


class TransactionListController extends Controller
{

    // Status Approved for Request, Orders and Consultations

    public function approvedR(Request $req)
    {
        $status = "Approved";
        $approvedList =  DB::table('request')
                    ->where('request.status', $status)
                    ->join('users', 'users.user_id', '=', 'request.user_id')
                    ->join('branch', 'branch.branch_id', '=', 'request.branch_id')
                    ->get();

        if( $approvedList ){
            return response()->json([
 
                'approvedRequests' => $approvedList

            ]);

            return $approvedList;
        }  
        else{
            return "No approved transactions";
        }
    }

    public function approvedO(Request $req)
    {
        $status = "Approved";
        $approvedList =  DB::table('orders')
                    ->where('orders.status', $status)
                    ->join('users', 'users.user_id', '=', 'orders.user_id')
                    ->join('branch', 'branch.branch_id', '=', 'orders.branch_id')
                    ->get();

        if( $approvedList ){
            return $approvedList;
        }  
        else{
            return "No approved transactions";
        }
    }

    public function approvedC(Request $req)
    {
        $status = "Approved";
        $approvedList =  DB::table('consultations')
                    ->where('consultations.status', $status)
                    ->join('users', 'users.user_id', '=', 'consultations.user_id')
                    ->get();

        if( $approvedList ){
            return $approvedList;
        }  
        else{
            return "No approved transactions";
        }
    }


    // returns all Null status request, consultation and orders
    public function nullR(Request $req)
    {
        $status = "null";
        $nullList =  DB::table('request')
                    ->where('request.status', $status)
                    ->join('users', 'users.user_id', '=', 'request.user_id')
                    ->join('branch', 'branch.branch_id', '=', 'request.branch_id')
                    ->get();

        if( $nullList ){
            return $nullList;
        }  
        else{
            return "No null transactions";
        }
    }
    public function nullO(Request $req)
    {
        $status = "null";
        $nullList =  DB::table('orders')
                    ->where('orders.status', $status)
                    ->join('users', 'users.user_id', '=', 'orders.user_id')
                    ->join('branch', 'branch.branch_id', '=', 'orders.branch_id')
                    ->get();

        if( $nullList ){
            return $nullList;
        }  
        else{
            return "No null transactions";
        }
    }

    public function nullC(Request $req)
    {
        $status = "null";
        $nullList =  DB::table('consultations')
                    ->where('consultations.status', $status)
                    ->join('users', 'users.user_id', '=', 'consultations.user_id')
                    ->get();

        if( $nullList ){
            return $nullList;
        }  
        else{
            return "No null transactions";
        }
    }
   
}
