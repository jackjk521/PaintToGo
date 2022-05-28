<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Brand
 * 
 * @property int $brand_id
 * @property string $brand_name
 * @property Carbon $created_at
 * @property Carbon $updated_at
 * 
 * @property Collection|Product[] $products
 *
 * @package App\Models
 */
class Brand extends Model
{
	protected $table = 'brand';
	protected $primaryKey = 'brand_id';

	protected $fillable = [
		'brand_name'
	];

	public function products()
	{
		return $this->hasMany(Product::class);
	}
}
