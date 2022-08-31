<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tree extends Model
{
    use HasFactory;
    protected $fillable = [
        'parent','children'
    ];
    public function parents()
    {
        return $this->belongsTo(Tree::class,'parent','children')->with('parents');
    }
}
