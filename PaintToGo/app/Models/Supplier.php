<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Supplier
 * 
 * @property int $supplierID
 * @property string $supplierName
 * @property string $supplierAddress
 * @property string $supplierContact
 * 
 * @property Collection|Item[] $items
 *
 * @package App\Models
 */
class Supplier extends Model
{
	protected $table = 'supplier';
	protected $primaryKey = 'supplierID';
	public $timestamps = false;

	protected $fillable = [
		'supplierName',
		'supplierAddress',
		'supplierContact'
	];

	public function items()
	{
		return $this->hasMany(Item::class, 'supplierID');
	}
}
