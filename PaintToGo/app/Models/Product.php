<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'product';
    protected $primaryKey = 'product_id';

    protected $fillable = [
        'product_id',
        'brand_id',
        'utility_id',
        'product_name',
        'price',
        'retail_price',
        'unit_sold_at',
    ];
}
