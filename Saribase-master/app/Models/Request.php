<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Request
 * 
 * @property int $requestID
 * @property int $branchID
 * @property int|null $requesterID
 * @property Carbon $dateRequested
 * @property string $paymentType
 * @property string $requestStatus
 * 
 * @property Branch $branch
 * @property Employee|null $employee
 * @property Collection|RequestList[] $request_lists
 *
 * @package App\Models
 */
class Request extends Model
{
	protected $table = 'request';
	protected $primaryKey = 'requestID';
	public $timestamps = false;

	protected $casts = [
		'branchID' => 'int',
		'requesterID' => 'int'
	];

	protected $dates = [
		'dateRequested'
	];

	protected $fillable = [
		'branchID',
		'requesterID',
		'dateRequested',
		'paymentType',
		'requestStatus'
	];

	public function branch()
	{
		return $this->belongsTo(Branch::class, 'branchID');
	}

	public function employee()
	{
		return $this->belongsTo(Employee::class, 'requesterID');
	}

	public function request_lists()
	{
		return $this->hasMany(RequestList::class, 'requestID');
	}
}
