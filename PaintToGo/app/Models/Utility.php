<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Utility
 * 
 * @property int $utility_id
 * @property string $utility_name
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * 
 * @property Collection|Product[] $products
 *
 * @package App\Models
 */
class Utility extends Model
{
	protected $table = 'utility';
	protected $primaryKey = 'utility_id';

	protected $fillable = [
		'utility_name'
	];

	public function products()
	{
		return $this->hasMany(Product::class);
	}
}
