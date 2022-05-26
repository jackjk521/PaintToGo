<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function getProducts() {
        $products = Product::all();

        return $products;
    }

    public function viewProducts(){
        // $products =  DB::table('product')
        // ->join('brand', 'products.brand_id', '=', 'brand.brand_id')
        // ->join('utility', 'products.utility_id', '=', 'utility.utility_id')
        // ->get();

        // if( $products ){
        //     return response()->json([
        //         'products' => $products
        //     ]);
        //     return $products;
        // }  
        // else{
        //     return "No products";
        // }

        return  Product::all();
    }
}
