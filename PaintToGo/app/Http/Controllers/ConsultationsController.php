<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Consultations;

class ConsultationsController extends Controller
{
    public function store(Request $req) {
        $consultations = new Consultations;
        $consultations->user_id = $req->input('user_id');
        $consultations->consult_description = $req->input('consult_description');
        $consultations->status = $req->input('status');
        $consultations->save();

        return response()->json([
            'status' => 200,
            'message' => 'Consultation booked successfully',
        ]);
    }
}
