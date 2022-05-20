<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderList;

class OrderListController extends Controller
{
    public function getOrderLists() {
        $orderLists = OrderList::all();

        return $orderLists;
    }

    public function store(Request $req) {
        $request = new OrderList;
        $request->order_id = $req->input('order_id');
        $request->product_id = $req->input('product_id');
        $request->order_quantity = $req->input('order_quantity');
        $request->save();

        return response()->json([
            'status' => 200,
            'message' => 'Request added successfully',
            'id' => $request->id,
        ]);
    }
}
