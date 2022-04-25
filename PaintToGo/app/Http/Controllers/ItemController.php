<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;
use App\Models\Brand;
use App\Models\Supplier;
use DB;
use Session;
class ItemController extends Controller
{
    public function itemView()
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
                                        'activeTable' => "t_items"
                                      ]);
    }

    public function itemActions(Request $request)
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
        $editItem = DB::table('item')->where('itemID', $request->id)->first();
        

        $suppliers = DB::table('supplier')->get();
        $brands = DB::table('brand')->get();
        
        return view('contents.admin', [
                                        'branches'=>$branch, 
                                        'employees'=>$employees,
                                        'suppliers'=>$suppliers,
                                        'brands'=>$brands,
                                        'items'=>$items,
                                        'tags'=>$tags,
                                        'editItem' => $editItem,
                                        'activeModal' => "editItem",
                                        'activeTable' => "t_items",
                                        
                                      ]);
            
        }else if ($request->button == "Delete"){
            return $this->destroyItem($request->id);
        }
    }

    public function searchItem(Request $request){
        if($request->ajax()){
            $output = '';
            $items = DB::table('item')->where('itemName', 'LIKE', '%'.$request->search. '%')->get();
            
            if($items){
                foreach($items as $key => $item){
                    $output .='<td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">'.$item->itemID.'</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">'.$item->itemName.'</div>
            
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">'.$item->price.'</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">'.$item->sellingPrice.'</div>

            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">'.$item->supplierName.'</div>
        
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">'.$item->unitCount.'</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">'.$item->dateAdded.'</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900"> ';
                }
                
                return Response($output);
            }
        }
    }

    //-------=======Item Actions======-------
    public function newItem(Request $request)
    {
        $item = new Item;
        $item->itemName = $request->name;
        $item->price = $request->price;
        $item->sellingPrice = $request->sellPrice;
        $item->unitCount = $request->unitCount;
        $item->brandID = $request->brandID;
        $item->supplierID = $request->itemSupplier;
        $item->dateAdded = date('Y-m-d');
        $item->save();
        
        return $this->itemView();
    }

    public function editItemActions(Request $request)
    {
        if($request->button == "Update"){
            return $this->editItem($request);
        }else if($request->button == "Edit Tags"){
            Session::put('item', $request->id);
            $tags = DB::table('tag_List')->where('itemID','=',Session::get('item'))->pluck('tagID');
            $activeTags = DB::table('tag')->join('tag_List', 'tag.tagID', '=', 'tag_List.tagID')->where('tag_List.itemID','=',Session::get('item'))->get();
            $materialTags =  DB::table('tag')->where('tagType','=','Material')->whereNotIn('tagID', $tags)->get();
            $toolTags = DB::table('tag')->where('tagType','=','Tool')->whereNotIn('tagID', $tags)->get();
            $colorTags = DB::table('tag')->where('tagType','=','Color')->whereNotIn('tagID', $tags)->get();
            return view('Item.Tag.tags')
            ->with('activeTags', $activeTags)
            ->with('materialTags', $materialTags)
            ->with('toolTags', $toolTags)
            ->with('colorTags', $colorTags);
        }
    }

    public function destroyItem($id)
    {
        Item::destroy($id);
        return $this->itemView();
    }

    public function editItem(Request $request)
    {
        $item = Item::find($request->id);
        $item->itemName = $request->name;
        $item->price = $request->price;
        $item->sellingPrice = $request->sellPrice;
        $item->unitCount = $request->unitCount;
        $item->supplierID = $request->itemSupplier;
        $item->brandID = $request->brandID;
        $item->dateAdded = date('Y-m-d');
        $item->save();
        return $this->itemView();
    }
    //-------=======Item Actions End======-------

    //-------=======Brand Actions======-------
    public function newBrand(Request $request)
    {
        $brand = new Brand;
        $brand->brandName = $request->brandName;
        $brand->brandDescription = "Brand Description";
        $brand->save();
        
        return $this->itemView();
    }
    //-------=======Brand Actions End======-------

    //-------=======Supplier Actions======-------
    public function newSupplier(Request $request)
    {
        $supplier = new Supplier;
        $supplier->supplierName = $request->supplierName;
        $supplier->supplierAddress = $request->supplierAddress;
        $supplier->supplierContact = $request->supplierContact;
        $supplier->save();
        
        return $this->itemView();
    }
    //-------=======Supplier Actions End======-------
}
