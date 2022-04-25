<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Brand;
use App\Models\Supplier;
use App\Models\Branch;
use App\Models\Employee;
use DB;
use Session;
class EmployeeController extends Controller
{
    public function employeeView()
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
                                        'activeTable' => "t_employee"
                                      ]);
    }

    public function employeeActions(Request $request)
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
        $editEmployee = DB::table('employee')->where('employeeID', $request->id)->first();
        

        $suppliers = DB::table('supplier')->get();
        $brands = DB::table('brand')->get();
        return view('contents.admin', [
                                        'branches'=>$branch, 
                                        'employees'=>$employees,
                                        'suppliers'=>$suppliers,
                                        'brands'=>$brands,
                                        'items'=>$items,
                                        'tags'=>$tags,
                                        'editEmployee' => $editEmployee,
                                        'activeModal' => "editEmployee",
                                        'activeTable' => "t_employee",
                                      ]);
            
        }else if ($request->button == "Delete"){
            return $this->destroyBranch($request->id);
        }
    }

    public function destroyEmployee(Request $request){
        Employee::destroy($request->id );
        return $this->employeeView();
    }

    public function editEmployee (Request $request){
        $employee = Employee::find($request->id);
        $employee->firstName = $request->fname;
        $employee->lastName = $request->lname;
        $employee->contactNumber = $request->number;
        $employee->password = $request->password;
        $employee->branchID = $request->branch;
        $employee->save();

        return $this->employeeView();
    }
}
