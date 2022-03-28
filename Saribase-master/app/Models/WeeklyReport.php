<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class WeeklyReport
 * 
 * @property int $reportID
 * @property int $branchID
 * @property int $reportListID
 * @property Carbon $dateCreated
 * 
 * @property Branch $branch
 * @property Collection|ReportList[] $report_lists
 *
 * @package App\Models
 */
class WeeklyReport extends Model
{
	protected $table = 'weekly_report';
	protected $primaryKey = 'reportID';
	public $timestamps = false;

	protected $casts = [
		'branchID' => 'int',
		'reportListID' => 'int'
	];

	protected $dates = [
		'dateCreated'
	];

	protected $fillable = [
		'branchID',
		'reportListID',
		'dateCreated'
	];

	public function branch()
	{
		return $this->belongsTo(Branch::class, 'branchID');
	}

	public function report_lists()
	{
		return $this->hasMany(ReportList::class, 'reportID');
	}
}
