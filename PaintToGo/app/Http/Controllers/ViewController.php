<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Session;
use Illuminate\Http\Request;

class ViewController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function dashboard()
    {
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
    public function loginform()
    {
        return view('contents.login');
    }
    public function requests()
    {
        $requests = DB::table('request')
        ->join('employee', 'request.requesterID', 'employee.employeeID')
        ->join('branch', 'employee.branchID', 'branch.branchID')->get();
      
        return view('contents.requests')->with('requests', $requests);
    }
    public function products()
    {
        $items = DB::table('item')
            ->join('branch_inventory', 'item.itemID','branch_inventory.itemID')
            ->join('tag_list', 'item.itemID','tag_list.itemID')
            ->join('tag', 'tag_list.tagID', 'tag.tagID')
            ->join('supplier', 'item.supplierID', 'supplier.supplierID')
            ->where('branchID',Session::get('branchID'))
            ->orderBy('itemQuantity', 'desc')->get();
            
        $table = DB::table('branch_inventory')
        ->where('branchID',Session::get('branchID'))
        ->pluck('itemID');

        $unstockedItems= DB::table('item')
        ->join('tag_list', 'item.itemID','tag_list.itemID')
        ->join('tag', 'tag_list.tagID', 'tag.tagID')
        ->join('supplier', 'item.supplierID', 'supplier.supplierID')
        ->whereNotIn('item.itemID', $table)
        ->get();
        
        $getList = DB::table('request_list')
            ->join('item', 'request_list.itemID', '=', 'item.itemID')
            ->select('request_list.*', 'item.itemName')
            ->where('request_list.requestID', Session::get('requestID'))->get();
        $tags = DB::table('tag')->join('tag_List', 'tag.tagID', '=', 'tag_List.tagID')->get();
        return view('contents.products')->with('items', $items)->with('reqList', $getList)->with('tags', $tags)->with('unstockedItems', $unstockedItems);
    }
    
    public function branches()
    {
        $branches = DB::table('branch')->get();
       
        return view('contents.branches',[
            'branches'=>$branches,
        ]);
    }
    public function admin(){
        $branch = DB::table('branch')
                    ->leftjoin('employee','branch.branchManagerID','employee.employeeID')
                    ->select('branch.branchID','branchName','branchAddress','firstName','lastName','branchType','branchContact')
                    ->orderBy('branchID', 'asc')
                    ->get();
        
        $employees = DB::table('employee')
                    ->join('employee_level','employee.employeeLevelID','=','employee_level.employeeLevelID')
                    ->join('branch','employee.branchID','=','branch.branchID')
                    ->select('employeeID','firstName','lastName','contactNumber','levelName','branchName')
                    ->orderBy('employeeID', 'asc')
                    ->get();

        $items = DB::table('item')->join('supplier', 'item.supplierID', '=', 'supplier.supplierID')->paginate(15);
        $tags = DB::table('tag')->join('tag_List', 'tag.tagID', '=', 'tag_List.tagID')->get();

        $suppliers = DB::table('supplier')->get();
        $brands = DB::table('brand')->get();
        return view('contents.admin', [
                                        'branches'=>$branch, 
                                        'employees'=>$employees,
                                        'suppliers'=>$suppliers,
                                        'brands'=>$brands,
                                        'items'=>$items,
                                        'tags'=>$tags,
                                        'activeTable'=> 't_items'
                                      ]);
    }
    public function requestForm()
    {
        return view('contents.requestForm');
    }
}
