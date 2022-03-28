<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class EmployeeLevel
 * 
 * @property int $employeeLevelID
 * @property string $levelName
 * @property string $levelDescription
 * 
 * @property Collection|Employee[] $employees
 *
 * @package App\Models
 */
class EmployeeLevel extends Model
{
	protected $table = 'employee_level';
	protected $primaryKey = 'employeeLevelID';
	public $timestamps = false;

	protected $fillable = [
		'levelName',
		'levelDescription'
	];

	public function employees()
	{
		return $this->hasMany(Employee::class, 'employeeLevelID');
	}
}
