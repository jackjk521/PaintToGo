<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inventory;

class InventoryController extends Controller
{
    public function getInventory() {
        $inventory = Inventory::all();

        return $inventory;
    }
}
