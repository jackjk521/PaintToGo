<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Branch
 * 
 * @property int $branch_id
 * @property int $user_id
 * @property string $branch_name
 * @property string $branch_add
 * @property string $branch_contact
 * @property string $branch_type
 * @property Carbon $created_at
 * 
 * @property User $user
 * @property Collection|Inventory[] $inventories
 * @property Collection|Order[] $orders
 * @property Collection|Request[] $requests
 *
 * @package App\Models
 */
class Branch extends Model
{
	protected $table = 'branch';
	protected $primaryKey = 'branch_id';
	public $timestamps = false;

	protected $casts = [
		'user_id' => 'int'
	];

	protected $fillable = [
		'user_id',
		'branch_name',
		'branch_add',
		'branch_contact',
		'branch_type'
	];

	public function user()
	{
		return $this->belongsTo(User::class);
	}

	public function inventories()
	{
		return $this->hasMany(Inventory::class);
	}

	public function orders()
	{
		return $this->hasMany(Order::class);
	}

	public function requests()
	{
		return $this->hasMany(Request::class);
	}
}
