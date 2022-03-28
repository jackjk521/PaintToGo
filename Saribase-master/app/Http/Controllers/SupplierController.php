<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Brand;
use App\Models\Supplier;
use App\Models\Branch;
use DB;
use Session;
class SupplierController extends Controller
{
    public function supplierView()
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

        $items = DB::table('item')->join('supplier', 'item.supplierID', '=', 'supplier.supplierID')->get();
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
                                        'activeTable' => "t_suppliers"
                                      ]);
    }

    public function supplierActions(Request $request)
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
        

        $items = DB::table('item')->join('supplier', 'item.supplierID', '=', 'supplier.supplierID')->get();
        $tags = DB::table('tag')->join('tag_List', 'tag.tagID', '=', 'tag_List.tagID')->get();
        $editSupplier = DB::table('supplier')->where('supplierID', $request->id)->first();
        
        $suppliers = DB::table('supplier')->get();
        $brands = DB::table('brand')->get();
        
        return view('contents.admin', [
                                        'branches'=>$branch, 
                                        'employees'=>$employees,
                                        'suppliers'=>$suppliers,
                                        'brands'=>$brands,
                                        'items'=>$items,
                                        'tags'=>$tags,
                                        'editSupplier' => $editSupplier,
                                        'activeModal' => "editSupplier",
                                        'activeTable' => "t_suppliers"
                                      ]);
            
        }else if ($request->button == "Delete"){
            return $this->destroySupplier($request->id);
        }
    }

    public function destroySupplier($id){
        Supplier::destroy($id);
        return $this->supplierView();
    }

    public function newSupplier(Request $request)
    {
        $supplier = new Supplier;
        $supplier->supplierName = $request->supplierName;
        $supplier->supplierContact = $request->supplierContact;
        $supplier->supplierAddress = $request->supplierAddress;
        $supplier->save();

        return $this->supplierView();
    }

    public function editSupplier (Request $request){
        $supplier = Supplier::find($request->id);
        $supplier->supplierName = $request->supplierName;
        $supplier->supplierContact = $request->supplierContact;
        $supplier->supplierAddress = $request->supplierAddress;
        $supplier->save();

        return $this->supplierView();
    }
}
