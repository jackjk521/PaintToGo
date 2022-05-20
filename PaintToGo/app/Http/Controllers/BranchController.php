<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Branch;

class BranchController extends Controller
{
    public function getBranches() {
        $branches = Branch::all();

        return $branches;
    }
}
