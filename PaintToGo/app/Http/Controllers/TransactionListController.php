<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Redirect, Response, File;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

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

        $query = DB::table('requestList')
                ->where('requestlist.request_id', $key)
                ->join('request','request.request_id', '=', 'requestlist.request_id')
                ->join('product','product.product_id', '=', 'requestlist.product_id')
                ->get();

        if($query){
            return response()->json([
 
                'viewRequest' => $query,
                'key' => $key

            ]);
            return $query;
        }  
        else{
            return "Can't retrieve data";
        }

    }

    public function viewOList(Request $req)
    {
        $key = $req->input('row_key');

        $query = DB::table('orderlist')
                ->where('orderlist.order_id', $key)
                ->join('orders','orders.order_id', '=', 'orderlist.order_id')
                ->join('product','product.product_id', '=', 'orderlist.product_id')
                ->get();

        if($query){
            return response()->json([
 
                'viewOrders' => $query,
                'key' => $key

            ]);
            return $query;
        }  
        else{
            return "Can't retrieve data";
        }

    }

    // approve button for request, order and consultation

    public function approveRBtn(Request $req){

        $id = $req->input('rowKey'); // to get request id

        $upStatus = DB :: table("request")
                    ->where('request_id',$id)
                    ->update(['status' => 'Approved']);

        $reqList = DB :: table("requestlist")
                    ->where('request_id', $id)
                    ->get();

        $branchId = DB :: table("request")
                    ->where('request_id', $id)
                    ->join('branch', 'branch.branch_id', '=', 'request.branch_id')
                    ->first();
    
            foreach($reqList as $row){
                    //works until here

                    $getBranch =  DB :: table ("inventory")
                                    ->where('branch_id',$branchId->branch_id )
                                    ->where('product_id', $row->product_id)
                                    ->first();
                    
                    if(!$getBranch){
                        $newRow = DB::table('inventory')->insert(
                            array('branch_id' => $branchId->branch_id, 'product_id' => $row->product_id, 'quantity' => $row->req_quantity, 'created_at' => Carbon::now(), 'updated_at' =>Carbon ::now())
                        );
                    }
                    else{
    
                        $updateBranch = DB :: table ("inventory")
                                ->where('branch_id',$branchId->branch_id)
                                ->where('product_id',$row->product_id)
                                ->update(['quantity' => $getBranch->quantity + $row->req_quantity]);
                    }


                    // updating quantity in main
                    $getMain =  DB :: table ("inventory")
                            ->where('branch_id', 1)
                            ->where('product_id', $row->product_id)
                            ->first();

                    $updateMain = DB :: table ("inventory")
                            ->where('branch_id', 1)
                            ->where('product_id',$row->product_id)
                            ->update(['quantity' => $getMain->quantity - $row->req_quantity]);

            }
           

        if($upStatus){
            return response()->json([
                'message' => "Sucessfully Approved Request",
                'r_id' => $id,
                'b_id' => $branchId->branch_id,
                'requestList' => $reqList,
            ]);
            return $reqList;    
        }
        else{
            return response()->json([
                'message' => "Unsuccessful update",
            ]);
        }
    }
   
    public function approveOBtn(Request $req){

        $id = $req->input('rowKey'); // to get request id

        $upStatus = DB :: table("orders")
                    ->where('order_id',$id)
                    ->update(['status' => 'Approved']);

        $orderList = DB :: table("orderlist")
                    ->where('order_id', $id)
                    ->get();

        $branchId = DB :: table("orders")
                    ->where('order_id', $id)
                    ->join('branch', 'branch.branch_id', '=', 'orders.branch_id')
                    ->first();
                    
        
            foreach($orderList as $row){
    
                $getBranch =  DB :: table ("inventory")
                                ->where('branch_id',$branchId->branch_id )
                                ->where('product_id', $row->product_id)
                                ->first();
                
                if(!$getBranch){
                    $newRow = DB::table('inventory')->insert(
                        array('branch_id' => $branchId->branch_id, 'product_id' => $row->product_id, 'quantity' => $row->order_quantity, 'created_at' => Carbon::now(), 'updated_at' =>Carbon ::now())
                    );
                }
                else{

                    $updateBranch = DB :: table ("inventory")
                            ->where('branch_id',$branchId->branch_id)
                            ->where('product_id',$row->product_id)
                            ->update(['quantity' => $getBranch->quantity - $row->order_quantity]);
                }
            }
                    

        if($upStatus){
            return response()->json([
                'message' => "Sucessfully Approved Request",
                'o_id' => $id,
            ]);

        }
        else{
            return response()->json([
                'message' => "Unsuccessful update",
            ]);
        }
    }
    public function approveCBtn(Request $req){

        $id = $req->input('rowKey'); // to get request id

        $upStatus = DB :: table("consultations")
                    ->where('consultation_id',$id)
                    ->update(['status' => 'Approved']);

            
        if($upStatus){
            return response()->json([
                'message' => "Sucessfully Approved Request",
                'c_id' => $id,
            ]);    
        }
        else{
            return response()->json([
                'message' => "Unsuccessful update",
            ]);
        }
    }
   
}