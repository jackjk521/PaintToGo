<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class ReportList
 * 
 * @property int $reportListID
 * @property int $reportID
 * @property int $itemID
 * @property int $quantity
 * 
 * @property WeeklyReport $weekly_report
 * @property Item $item
 *
 * @package App\Models
 */
class ReportList extends Model
{
	protected $table = 'report_list';
	protected $primaryKey = 'reportListID';
	public $timestamps = false;

	protected $casts = [
		'reportID' => 'int',
		'itemID' => 'int',
		'quantity' => 'int'
	];

	protected $fillable = [
		'reportID',
		'itemID',
		'quantity'
	];

	public function weekly_report()
	{
		return $this->belongsTo(WeeklyReport::class, 'reportID');
	}

	public function item()
	{
		return $this->belongsTo(Item::class, 'itemID');
	}
}
