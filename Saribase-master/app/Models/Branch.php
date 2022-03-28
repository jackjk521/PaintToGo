<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Branch
 * 
 * @property int $branchID
 * @property string $branchName
 * @property string $branchAddress
 * @property int|null $branchManagerID
 * @property string $branchType
 * @property string $branchContact
 * 
 * @property Employee|null $employee
 * @property Collection|BranchInventory[] $branch_inventories
 * @property Collection|Employee[] $employees
 * @property Collection|Request[] $requests
 * @property Collection|WeeklyReport[] $weekly_reports
 *
 * @package App\Models
 */
class Branch extends Model
{
	protected $table = 'branch';
	protected $primaryKey = 'branchID';
	public $timestamps = false;

	protected $casts = [
		'branchManagerID' => 'int'
	];

	protected $fillable = [
		'branchName',
		'branchAddress',
		'branchManagerID',
		'branchType',
		'branchContact'
	];

	public function employee()
	{
		return $this->belongsTo(Employee::class, 'branchManagerID');
	}

	public function branch_inventories()
	{
		return $this->hasMany(BranchInventory::class, 'branchID');
	}

	public function employees()
	{
		return $this->hasMany(Employee::class, 'branchID');
	}

	public function requests()
	{
		return $this->hasMany(Request::class, 'branchID');
	}

	public function weekly_reports()
	{
		return $this->hasMany(WeeklyReport::class, 'branchID');
	}
}
