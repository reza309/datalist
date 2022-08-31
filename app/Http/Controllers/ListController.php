<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class ListController extends Controller
{
    public function get_list(Request $req)
    {
        return view('components.dynamic-list');
    }
    public function put_list(Request $request)
    {
        $create = User::create($request->all());
        if ($create) {
            return Response::json(true);
        }
        return Response::json(false);
    }
    public function put_list_ls(Request $request)
    {
        $list = User::select();
        $total_record = $list->limit(10)->count('id');
        // $total_record = $list->skip($request->current)->take($request->limit)->count('id');
        $list = $list->skip($request->current)->take($request->limit)->get();
        $data = array();
        foreach ($list as $key => $value) {
            array_push($data,$value->name);
        }
        return Response::json([
            'list' => $data,
            'totalRecord' =>$total_record
        ]);
    }
}
