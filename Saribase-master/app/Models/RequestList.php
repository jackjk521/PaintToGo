<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class RequestList
 * 
 * @property int $requestListID
 * @property int $requestID
 * @property int $itemID
 * @property int $quantityRequested
 * 
 * @property Request $request
 * @property Item $item
 *
 * @package App\Models
 */
class RequestList extends Model
{
	protected $table = 'request_list';
	protected $primaryKey = 'requestListID';
	public $timestamps = false;

	protected $casts = [
		'requestID' => 'int',
		'itemID' => 'int',
		'quantityRequested' => 'int'
	];

	protected $fillable = [
		'requestID',
		'itemID',
		'quantityRequested'
	];

	public function request()
	{
		return $this->belongsTo(Request::class, 'requestID');
	}

	public function item()
	{
		return $this->belongsTo(Item::class, 'itemID');
	}
}
