<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'product';

    protected $fillable = [
        'brand_id',
        'utility_id',
        'product_name',
        'price',
        'retail_price',
        'unit_sold_at',
    ];
}
