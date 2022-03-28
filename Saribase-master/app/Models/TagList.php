<?php

/**
 * Created by Reliese Model.
 */

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class TagList
 * 
 * @property int $tagListID
 * @property int $itemID
 * @property int $tagID
 * 
 * @property Tag $tag
 * @property Item $item
 *
 * @package App\Models
 */
class TagList extends Model
{
	protected $table = 'tag_list';
	protected $primaryKey = 'tagListID';
	public $timestamps = false;

	protected $casts = [
		'itemID' => 'int',
		'tagID' => 'int'
	];

	protected $fillable = [
		'itemID',
		'tagID'
	];

	public function tag()
	{
		return $this->belongsTo(Tag::class, 'tagID');
	}

	public function item()
	{
		return $this->belongsTo(Item::class, 'itemID');
	}
}
