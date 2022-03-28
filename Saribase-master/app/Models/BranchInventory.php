<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

/**
 * Class BranchInventory
 * 
 * @property int $inventoryID
 * @property int $branchID
 * @property int $itemID
 * @property int $itemQuantity
 * @property string $itemStatus
 * @property Carbon $dateUpdated
 * 
 * @property Item $item
 * @property Branch $branch
 *
 * @package App\Models
 */
class BranchInventory extends Model
{
	protected $table = 'branch_inventory';
	protected $primaryKey = 'inventoryID';
	public $timestamps = false;

	protected $casts = [
		'branchID' => 'int',
		'itemID' => 'int',
		'itemQuantity' => 'int'
	];

	protected $dates = [
		'dateUpdated'
	];

	protected $fillable = [
		'branchID',
		'itemID',
		'itemQuantity',
		'itemStatus',
		'dateUpdated'
	];

	public function item()
	{
		return $this->belongsTo(Item::class, 'itemID');
	}

	public function branch()
	{
		return $this->belongsTo(Branch::class, 'branchID');
	}
}
