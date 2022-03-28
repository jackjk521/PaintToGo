<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Tag
 * 
 * @property int $tagID
 * @property string $tagName
 * @property string $tagType
 * 
 * @property Collection|TagList[] $tag_lists
 *
 * @package App\Models
 */
class Tag extends Model
{
	protected $table = 'tag';
	protected $primaryKey = 'tagID';
	public $timestamps = false;

	protected $fillable = [
		'tagName',
		'tagType'
	];

	public function tag_lists()
	{
		return $this->hasMany(TagList::class, 'tagID');
	}
}
