<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function getProducts() {
        $products = Product::all();

        return $products;
    }

    public function viewProducts(){
        $products =  DB::table('product')
        ->join('brand', 'product.brand_id', '=', 'brand.brand_id')
        ->join('utility', 'product.utility_id', '=', 'utility.utility_id')
        ->get();


        if( $products ){
            return response()->json([
                'products' => $products
            ]);
        }  
        else{
            return("bruhhhhh");
        }

        // return  Product::all();
    }
}
