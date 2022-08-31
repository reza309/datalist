<?php

namespace App\Http\Controllers;

use App\Models\Tree;
use App\Services\TreeService;
use Illuminate\Http\Request;

class TreeController extends Controller
{
    private $parents = [];
    public function trees(Request $request)
    {
        
        
        $tree = TreeService::get_node_level(11);
        return $tree;
        // return view('components.trees',['roots'=>$roots]);
    }
    private function get_parent_nodes($data, $level)
    {
        // return $data;
        $level++;
        if ($data->parents != "") {
            $this->get_parent_nodes($data->parents,$level);
        }
        array_push($this->parents,[
            'parent'=>$data->parent,
            'level' => $level
        ]);
        
        return $this->parents;;
    }
}
