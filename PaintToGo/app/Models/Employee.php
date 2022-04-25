<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Employee
 * 
 * @property int $employeeID
 * @property int|null $employeeLevelID
 * @property string $firstName
 * @property string $lastName
 * @property string $contactNumber
 * @property string $password
 * @property int|null $branchID
 * 
 * @property Branch|null $branch
 * @property EmployeeLevel|null $employee_level
 * @property Collection|Branch[] $branches
 * @property Collection|Request[] $requests
 *
 * @package App\Models
 */
class Employee extends Model
{
	protected $table = 'employee';
	protected $primaryKey = 'employeeID';
	public $timestamps = false;

	protected $casts = [
		'employeeLevelID' => 'int',
		'branchID' => 'int'
	];

	protected $hidden = [
		'password'
	];

	protected $fillable = [
		'employeeLevelID',
		'firstName',
		'lastName',
		'contactNumber',
		'password',
		'branchID'
	];

	public function branch()
	{
		return $this->belongsTo(Branch::class, 'branchID');
	}

	public function employee_level()
	{
		return $this->belongsTo(EmployeeLevel::class, 'employeeLevelID');
	}

	public function branches()
	{
		return $this->hasMany(Branch::class, 'branchManagerID');
	}

	public function requests()
	{
		return $this->hasMany(Request::class, 'requesterID');
	}
}
