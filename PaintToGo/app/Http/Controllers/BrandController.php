<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Brand;

class BrandController extends Controller
{
    public function viewBrands() {
        $brands =  DB::table('brand')->get();

        if( $brands ){
            return response()->json([
                'brands' => $brands
            ]);
        }  
        else{
            return("SQL Error");
        }
    }

    public function newBrand(Request $request) {
        $brand =  new Brand;
        $brand->brand_name = $request->input('brand_name');
        $brand->save();

        if( $brand ){
            return response()->json([
                'response' => 1
            ]);
        }  
        else{
            return("SQL Error");
        }
    }

    public function editBrand(Request $request) {
        $brand =Brand::find($request->input('brand_id'));
        $brand->brand_name = $request->input('brand_name');
        $brand->save();

        if( $brand ){
            return response()->json([
                'response' => 1
            ]);
        }  
        else{
            return("SQL Error");
        }
    }

    public function deleteBrand(Request $request){
        $brand = Brand::find($request->input('brand_id'));

        if( $brand ){
            $brand->delete();
            return response()->json([
                'response' => 1
            ]);
        }  
    }
}
