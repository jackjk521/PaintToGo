<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Branch;

class BranchController extends Controller
{
    public function getBranches() {
        $branches = Branch::all();

        return $branches;
    }

    public function viewBranches() {
        $branches =  DB::table('branch')
        ->join('users', 'branch.user_id', '=', 'users.user_id')
        ->get();


        if( $branches ){
            return response()->json([
                'branches' => $branches
            ]);
        }  
        else{
            return("SQL Error");
        }
    }

    public function newBranch(Request $request) {
        $branch =  new Branch;
        $branch->user_id = $request->input('user_id');
        $branch->branch_name = $request->input('branch_name');
        $branch->branch_contact = $request->input('branch_contact');
        $branch->branch_add = $request->input('branch_add');
        $branch->branch_type = $request->input('branch_type');
        $branch->created_at = date('Y-m-d H:i:s');
        $branch->save();

        if( $branch ){
            return response()->json([
                'response' => 1
            ]);
        }  
        else{
            return("SQL Error");
        }
    }

    public function editBranch(Request $request) {
        $branch =Branch::find($request->input('branch_id'));
        $branch->user_id = $request->input('user_id');
        $branch->branch_name = $request->input('branch_name');
        $branch->branch_contact = $request->input('branch_contact');
        $branch->branch_add = $request->input('branch_add');
        $branch->branch_type = $request->input('branch_type');
        $branch->save();

        if( $branch ){
            return response()->json([
                'response' => 1
            ]);
        }  
        else{
            return("SQL Error");
        }
    }

    public function deleteBranch(Request $request){
        $branch = Branch::find($request->input('branch_id'));

        if( $branch ){
            $branch->delete();
            return response()->json([
                'response' => 1
            ]);
        }  
    }

    public function viewBranchInventory(Request $request){
        // sessionStorage.getItem('branch_id');
        $inventory = DB::table('inventory')
            ->where('branch_id', $request->input('branch'))
            ->join('product', 'inventory.product_id','=','product.product_id')
            ->get();

        if( $inventory ){
            return response()->json([
                'inventory' => $inventory,
                'response' => $request
            ]);
        }  
        else{
            return("SQL Error");
        }    
    }

    public function viewBranchInventoryOverview(){
        $branches = DB::table('branches')
            ->select('branch_id')
            ->get();

        $inventory = DB::table('inventory')
            ->get();

        if( $inventory ){
            return response()->json([
                'branches' => $branches,
                'inventory' => $inventory,
                'response' => $request
            ]);
        }  
        else{
            return("SQL Error");
        }    
    }
}
