<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
use DB;
use Symfony\Component\Console\Input\Input;

class ProductsPage extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return view('contents.products');
    }

    public function action(Request $request){

        if($request->ajax()){
            $output = '';

            // if($request->input('search') != ""){
                    $items = DB::table('item')
                    ->join('branch_inventory', 'item.itemID','branch_inventory.itemID')
                    ->join('tag_list', 'item.tagListID','tag_list.tagListID')
                    ->join('tag', 'tag_list.tagID', 'tag.tagID')
                    ->where('itemName', 'LIKE', '%'.$request->search. '%')
                    ->where('branchID',Session::get('branchID'))
                    ->orderBy('itemQuantity', 'asc')->get();
            
                    if($items){
                    
                        foreach($items as $key => $item){
                        
                            $output .='<tr>
                            <td class="px-6 py-4 whitespace-nowrap">'.$item->itemID.'</td>'.
                            '<td class="px-6 py-4 whitespace-nowrap">'.$item->itemName.'</td>'.
                            '<td class="px-6 py-4 whitespace-nowrap">'.$item->tagListID.'</td>'.
                            '<td class="px-6 py-4 whitespace-nowrap">'.$item->tagID.'</td>'.
                            '<td class="px-6 py-4 whitespace-nowrap">'.$item->tagName.'</td>'.
                            '<td class="px-6 py-4 whitespace-nowrap">'.$item->itemQuantity.'</td>'.
                            '<td class="px-6 py-4 whitespace-nowrap"> 
                                <form action="/addItem" method = "GET">
                                    <input type="checkbox" name = "itemID" value= '.$item->itemID.'>
                                    Quantity <input type = "number" name = "quantity" class="number" min= 0 max= 50>
                                    <button class="p-0"> Add </button>
                                </form></td>'.
                            '</tr>';
                        }
                        return Response($output);
                    }
                }
        }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $insert =DB::table('request_list')->insert([
            [
                'requestID'      => $request->session()->get('requestID'),
                'itemID'   => $request->input('itemID'),
                'quantityRequested' => $request->input('quantity')
                
            ]
        ]);
            if($insert){
                echo $request->input('itemID');
                return redirect('products');

            }
    
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request) //didnt use this
    {
        //
        // $id = $request->session()->get('requestID');
        // $getList = DB::table('request_list')->join('item', 'request_list.itemID', '=', 'item.itemID')->select('request_list.*', 'item.itemName')->where('request_list.requestID', $id)->get();

        //     return view('contents.requests')->with('reqList', $getList);
        

}
    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //
        $id = $request->session()->get('requestID');
        $itemID = $request->input('itemID');

        $del = DB::table('request_list')->join('item', 'request_list.itemID', '=', 'item.itemID')->where('request_list.requestID', $id)->where('request_list.itemID', $itemID)->delete();

        if($del){
            return redirect('products');
        }
        else{
            return redirect('products');
            echo ' no result';
        }        

}
}
