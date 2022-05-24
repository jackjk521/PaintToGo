<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RequestList;

class RequestListController extends Controller
{
    public function store(Request $request) {
        $requestList = new RequestList;
        $requestList->request_id = $request->input('request_id');
        $requestList->product_id = $request->input('product_id');
        $requestList->req_quantity = $request->input('req_quantity');
        $requestList->save();

        return response()->json([
            'status' => 200,
            'message' => 'Added to request list successfully',
        ]);
    }
}
