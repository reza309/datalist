<?php

namespace App\Services;

use App\Models\Tree;

class TreeService
{
    private $tree = [];
    public function __call($name, $arguments)
    {
        if ($name === 'get_node_level') {
            return $this->get_level($arguments[0]);
        }
    }
    public static function __callStatic($name, $arguments)
    {
        if ($name === 'get_node_level') {
            return (new self)->get_level($arguments[0]);
        }
    }

    // get tree node level
    private function get_level($parent_id = null)
    {
        if ($parent_id == null) {
            $parent_id = auth()->user()->id;
        }

        $parents = Tree::where('children', $parent_id)->first();
        if (isset($parents->parent)) {
            $this->tree[] = [
                'parents' => $parents->parent,
                'level' => 1
            ];
            if ($parents->parents != "") {
                $this->get_parent_nodes($parents->parents, 1);
            }
        }
        if (!empty($this->tree)) { 
            $level = $this->tree[0]['level']+$this->tree[count($this->tree)-1]['level'];
        }else {
            $level = 1;
        }
        
        return $level;
    }
    // recursive call for find root node
    private function get_parent_nodes($data, $level)
    {
        $level++;
        $this->tree[] = [
            'parents' => $data->parent,
            'level' => $level
        ];
        if ($data->parents != "") {
            $this->get_parent_nodes($data->parents, $level);
        }
        return $this->tree;
    }
}
