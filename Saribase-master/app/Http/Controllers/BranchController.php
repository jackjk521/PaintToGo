<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Brand;
use App\Models\Supplier;
use App\Models\Branch;
use DB;
use Session;
class BranchController extends Controller
{
    public function branchView()
    {
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
                                        'activeTable' => "t_branches"
                                      ]);
    }

    public function branchActions(Request $request)
    {
        if($request->button == "Edit"){
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
        $editBranch = DB::table('branch')->where('branchID', $request->id)->first();
        

        $suppliers = DB::table('supplier')->get();
        $brands = DB::table('brand')->get();
        return view('contents.admin', [
                                        'branches'=>$branch, 
                                        'employees'=>$employees,
                                        'suppliers'=>$suppliers,
                                        'brands'=>$brands,
                                        'items'=>$items,
                                        'tags'=>$tags,
                                        'editBranch' => $editBranch,
                                        'activeModal' => "editBranch",
                                        'activeTable' => "t_branches",
                                      ]);
            
        }else if ($request->button == "Delete"){
            return $this->destroyBranch($request->id);
        }
    }

    public function destroyBranch($id){
        Branch::destroy($id);
        return $this->branchView();
    }

    public function newBranch(Request $request)
    {
        $branch = new branch;
        $branch->branchName = $request->branchName;
        $branch->branchAddress = $request->branchAddress;
        $branch->branchType = "Sub";
        $branch->branchContact = $request->branchContact;
        $branch->branchManagerID = $request->managerID;
        $branch->save();
        
        return $this->branchView();
    }

    public function editBranch (Request $request){
        $branch = Branch::find($request->id);
        $branch->branchName = $request->branchName;
        $branch->branchAddress = $request->branchAddress;
        $branch->branchType = "Sub";
        $branch->branchContact = $request->branchContact;
        $branch->branchManagerID = $request->managerID;
        $branch->save();

        return $this->branchView();
    }
}   
