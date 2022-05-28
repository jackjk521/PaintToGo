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

    public function editProduct(Request $request){
        $product = Product::find($request->input('id'));
        $product->product_name = $request->input('productName');
        $product->brand_id = $request-> input('brand');
        $product->utility_id = $request-> input('utility');
        $product->unit_sold_at = $request-> input('unitCount');
        $product->price = $request->input('price');
        $product->retail_price = $request->input('retailPrice');
        $product->save();

        if( $product ){
            return response()->json([
                'response' => 1
            ]);
        }  
        else{
            return("dasd");
        }
    }

    public function newProduct(Request $request){
        $product = new Product;
        $product->product_name = $request->input('productName');
        $product->brand_id = $request-> input('brand');
        $product->utility_id = $request-> input('utility');
        $product->unit_sold_at = $request-> input('unitCount');
        $product->price = $request->input('price');
        $product->retail_price = $request->input('retailPrice');
        $product->save();

        if( $product ){
            return response()->json([
                'response' => 1
            ]);
        }  
        else{
            return("Query Error");
        }

        // return  Product::all();
    }

    public function deleteProduct(Request $request){
        $product = Product::find($request->input('product_id'));
        
        if( $product ){
            $product->delete();
            return response()->json([
                'response' => 1
            ]);
        }  
        else{
            return("dasd");
        }
    }
}
