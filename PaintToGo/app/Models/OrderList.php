<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderList extends Model
{
    use HasFactory;

    public $timestamps = ["created_at"];
    const UPDATED_AT = null;

    protected $table = 'orderlist';

    protected $fillable = [
        'order_id ',
        'product_id ',
        'order_quantity',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];
}
