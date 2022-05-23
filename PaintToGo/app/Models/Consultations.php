<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Consultations extends Model
{
    use HasFactory;

    public $timestamps = ["created_at"];
    const UPDATED_AT = null;

    protected $table = 'consultations';

    protected $fillable = [
        'user_id',
        'consult_description',
        'status',

    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];
}
