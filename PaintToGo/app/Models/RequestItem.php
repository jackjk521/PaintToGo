<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RequestItem extends Model
{
    use HasFactory;

    public $timestamps = ["created_at"];
    const UPDATED_AT = null;

    protected $table = 'request';

    protected $fillable = [
        'user_id',
        'branch_id',
        'status',
    ];
    
    protected $casts = [
        'created_at' => 'datetime',
    ];

    
}
