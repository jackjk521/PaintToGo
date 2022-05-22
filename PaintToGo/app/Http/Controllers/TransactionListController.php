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
            return response()->json([
 
                'approvedOrders' => $approvedList

            ]);
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
            return response()->json([
 
                'approvedConsultations' => $approvedList

            ]);
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
            return response()->json([
 
                'nullRequests' => $nullList

            ]);
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
            return response()->json([
 
                'nullOrders' => $nullList

            ]);
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
            return response()->json([
 
                'nullConsultations' => $nullList

            ]);
            return $nullList;
        }  
        else{
            return "No null transactions";
        }
    }



    // view contents of a request, order or consultations

    public function viewRList(Request $req)
    {
        $key = $req->input('row_key');

        // $query = DB::table('requestList')
        //         ->where('requestlist.request_id', $key)
        //         ->join('request','request.request_id', '=', 'requestlist.request_id')
        //         ->join('product','product.product_id', '=', 'requestlist.product_id')
        //         ->get();
        return response()->json([
                'key' -> $key,
        ]);


        // if($query){
        //     return response()->json([
 
        //         'viewRequest' => $query,
        //         'key' => $key

        //     ]);
        //     return $query;
        // }  
        // else{
        //     return "Can't retrieve data";
        // }

    }
   
}
