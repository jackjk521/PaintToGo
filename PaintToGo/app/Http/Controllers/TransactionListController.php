<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades \DB;
use Redirect, Response, File;
use Illuminate\Support\Facades \Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    
    public function displayTL(Request $req)
    {

        $status = "Approved";

        $TL = DB::table('requestlist')
            ->where('requestlist.status', ' = ', $status)
            ->join('orderlist', 'orderlist.status', '=', $status)
            ->join('consultations', 'consultations.status', '=', $status)
            ->select('requestlist.*', 'orderlist.*', 'consultations.*')
            ->orderBy('created_at', 'desc')
            ->get();


            if ($TL) {
                return $this->$TL; //sorted by date in display in front end
            } else {
                return "Error no tables are found";
            }

    }
        
}
