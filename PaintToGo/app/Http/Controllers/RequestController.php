<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
use DB;

class RequestController extends Controller
{
    
    public function store(Request $request)
    {
        //
        DB::table('request')->insert([
            [
                'branchID'      => $request->session()->get('branchID'),
                'requesterID'   => $request->session()->get('empID'),
                'paymentType' => $request->input('paymentType'),
                'requestStatus'      => 'Pending',
                
            ]
        ]);
        
        $lastID = DB::table('request')->orderBy('requestID', 'DESC')->first();
        Session::put('requestID', $lastID->requestID);
        return redirect('products');
    }

    public function show(Request $request)
    {
        $id = $request->input('requestID');

        if($id){
        
        $requestList = DB::table('request_list')
        ->join('item', 'request_list.itemID','item.itemID')
        ->where('request_list.requestID', $id)->get();

      
        return view('contents.requestlist')->with('reqList', $requestList);  
        }  

    }
    public function destroy(Request $request)
    {
        $id = $request->input('reqID');

        $del = DB::table('request')->where('requestID', $id)->delete();

        if($del){
            return redirect('requests');
        }
    }

    public function bulkOrder(Request $request){
        DB::table('request')->insert([
            [
                'branchID'      => $request->session()->get('branchID'),
                'requesterID'   => $request->session()->get('empID'),
                'paymentType' => 'Cash',
                'requestStatus'      => 'Pending',
                
            ]
        ]);
        $lastID = DB::table('request')->orderBy('requestID', 'DESC')->pluck('requestID')->first();
        $orderedItems = DB::table('branch_inventory')
            ->where('branch_inventory.branchID', $request->id)
            ->where('branch_inventory.itemQuantity', '<', '25')
            ->pluck('itemID')->toArray(); 
            $orderedItems =  (array) $orderedItems;
            var_dump($lastID);
            var_dump($orderedItems);
            
            foreach($orderedItems as $item){
            DB::table('request_list')->insert([
                [
                    'requestID'      => $lastID,
                    'itemID'   => $item,
                    'quantityRequested' => $request->bulk
                ]
            ]);
        
            $branches = DB::table('branch')->get();
            $branches1 = DB::table('branch')->join('employee', 'branch.branchManagerID', 'employee.employeeID')->get();
            $items = DB::table('branch_inventory')
                ->join('item', 'item.itemID','branch_inventory.itemID')
                ->where('branch_inventory.itemQuantity', '<', '25')->get();
    
            return view('contents.dashboard',[
                'branches1'=>$branches1,
                'branches'=>$branches,
                'items'=>$items
            ]);

        }
    }
}
