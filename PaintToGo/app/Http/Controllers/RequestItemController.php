<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RequestItem;

class RequestItemController extends Controller
{
    public function store(Request $req) {
        $request = new RequestItem;
        $request->user_id = $req->input('user_id');
        $request->branch_id = $req->input('branch_id');
        $request->status = $req->input('status');
        $request->save();

        return response()->json([
            'status' => 200,
            'message' => 'Request added successfully',
            'id' => $request->id,
        ]);
    }
}
