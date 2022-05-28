<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UtilityController extends Controller
{
    public function viewUtility() {
        $utility =  DB::table('utility')->get();

        if( $utility ){
            return response()->json([
                'utility' => $utility
            ]);
        }  
        else{
            return("SQL Error");
        }
    }
}
