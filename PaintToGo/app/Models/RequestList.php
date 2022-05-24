<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestList extends Model
{
    use HasFactory;

    public $timestamps = ["created_at"];
    const UPDATED_AT = null;

    protected $table = 'requestlist';

    protected $fillable = [
        'request_id',
        'product_id',
        'req_quantity'
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];

    
}
