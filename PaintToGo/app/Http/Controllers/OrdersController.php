<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;

class OrdersController extends Controller
{
    public function getOrders() {
        $orders = Orders::all();

        return $orders;
    }

    public function store(Request $req) {
        $orders = new Orders;
        $orders->branch_id = $req->input('branch_id');
        $orders->user_id = $req->input('user_id');
        $orders->status = $req->input('status');
        $orders->save();

        return response()->json([
            'status' => 200,
            'message' => 'Request added successfully',
            'id' => $orders->id,
        ]);
    }
}
