<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class ReceiptList
 * 
 * @property int $receiptID
 * @property int $delivererID
 * @property int $releaserID
 * @property int $recieverID
 *
 * @package App\Models
 */
class ReceiptList extends Model
{
	protected $table = 'receipt_list';
	protected $primaryKey = 'receiptID';
	public $timestamps = false;

	protected $casts = [
		'delivererID' => 'int',
		'releaserID' => 'int',
		'recieverID' => 'int'
	];

	protected $fillable = [
		'delivererID',
		'releaserID',
		'recieverID'
	];
}
