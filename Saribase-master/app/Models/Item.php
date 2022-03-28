<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Item
 * 
 * @property int $itemID
 * @property int $brandID
 * @property string $itemName
 * @property float $price
 * @property float $sellingPrice
 * @property string $unitCount
 * @property string $employeeNote
 * @property Carbon $dateAdded
 * @property int $supplierID
 * @property string $itemDescription
 * 
 * @property Brand $brand
 * @property Supplier $supplier
 * @property Collection|BranchInventory[] $branch_inventories
 * @property Collection|ReportList[] $report_lists
 * @property Collection|RequestList[] $request_lists
 * @property Collection|TagList[] $tag_lists
 *
 * @package App\Models
 */
class Item extends Model
{
	protected $table = 'item';
	protected $primaryKey = 'itemID';
	public $timestamps = false;

	protected $casts = [
		'brandID' => 'int',
		'price' => 'float',
		'sellingPrice' => 'float',
		'supplierID' => 'int'
	];

	protected $dates = [
		'dateAdded'
	];

	protected $fillable = [
		'brandID',
		'itemName',
		'price',
		'sellingPrice',
		'unitCount',
		'dateAdded',
		'supplierID'

	];

	public function brand()
	{
		return $this->belongsTo(Brand::class, 'brandID');
	}

	public function supplier()
	{
		return $this->belongsTo(Supplier::class, 'supplierID');
	}

	public function branch_inventories()
	{
		return $this->hasMany(BranchInventory::class, 'itemID');
	}

	public function report_lists()
	{
		return $this->hasMany(ReportList::class, 'itemID');
	}

	public function request_lists()
	{
		return $this->hasMany(RequestList::class, 'itemID');
	}

	public function tag_lists()
	{
		return $this->hasMany(TagList::class, 'itemID');
	}
}
