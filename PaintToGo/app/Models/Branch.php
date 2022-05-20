<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    use HasFactory;

    public $timestamps = ["created_at"];
    const UPDATED_AT = null;

    protected $table = 'branch';

    protected $fillable = [
        'user_id',
        'branch_name',
        'branch_add',
        'branch_contact',
        'branch_type',
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];
}
