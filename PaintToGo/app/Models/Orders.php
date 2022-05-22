<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;

    public $timestamps = ["created_at"];
    const UPDATED_AT = null;

    protected $table = 'orders';

    protected $fillable = [
        'branch_id ',
        'user_id ',
        'status',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];
}
