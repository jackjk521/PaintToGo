<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Brand
 * 
 * @property int $brandID
 * @property string $brandName
 * @property string $brandDescription
 * 
 * @property Collection|Item[] $items
 *
 * @package App\Models
 */
class Brand extends Model
{
	protected $table = 'brand';
	protected $primaryKey = 'brandID';
	public $timestamps = false;

	protected $fillable = [
		'brandName',
		'brandDescription'
	];

	public function items()
	{
		return $this->hasMany(Item::class, 'brandID');
	}
}
