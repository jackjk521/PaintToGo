@extends('layout.layout')

@section('products')
    bg-gray-500
@endsection

@section('content')


<div class="flex justify-center">
    <div class="w-9/12 flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                
                  <div class="mb-6 flex justify-between">
                    <div class="flex items-center  mr-4">
                        <h1 class="text-2xl font-semibold uppercase">Products Inventory</h1>
                    </div>
                    
                    <input type="text" id="search" name ="search" placeholder = "Search" class="w-2/6 m-0 rounded-md " value = "">
                  </div>
                

                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
                <div class="px-6 py-4 whitespace-nowrap bg-white text-gray-900 text-md font-semibold flex items-center"> 
                        @if (Session::get('requestID') == null)   
                        <button onclick="window.location='{{ route('requestsform') }}'"  class="mr-6 bg-blue-500 text-white px-4 py-3 w-40 rounded-sm text-sm hover:bg-blue-300 ">Request Form</button>
                        @else
                        <button onclick="window.location='{{ route('sendRequest') }}'"  class="mr-6 bg-blue-500 text-white px-4 py-3 w-40 rounded-sm text-sm hover:bg-blue-300 ">Make a new Request</button>
                        @endif 
                        <button onclick="toggleModal('requestList')" class="bg-blue-500 text-white px-4 py-3 w-40 rounded-sm text-sm hover:bg-blue-300 ">View Request List</button>
                </div>

                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                          <tr>
                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Item ID
                             </th>
                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Item Name
                             </th>
                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Supplier
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tags
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Stock
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                            </th>
                          </tr>   
                    </thead> 
                    <tbody class="bg-white divide-y divide-gray-200"> 
                 
                    @foreach($items as $key => $item)
                        
                        <tr>
                        <td class="px-6 py-4 whitespace-nowrap">{{$item->itemID}}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{$item->itemName}}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{$item->supplierName}}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        @foreach($tags as $tag)
                            @if($tag->itemID == $item->itemID)
                                <span class='badge badge-secondary'>{{$tag->tagName}}</span>
                            @endif
                        @endforeach
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">{{$item->itemQuantity}}</td>
                        @if (Session::get('requestID') != null)   
                        <td class="px-6 py-4 whitespace-nowrap"> 
                            <form action="/addItem" method = "GET">
                                <input type="hidden" name = "itemID" value= {{$item->itemID}}>
                                Quantity <input type = "number" name = "quantity" class="number" min= 0 max= 50>
                                <button class="p-0"> Add </button>
                            </form></td>
                        </tr>
                        @else
                        <td class="px-6 py-4 whitespace-nowrap"></td>
                        @endif
                        
                    @endforeach
                    @foreach($unstockedItems as $unstocked)
                        <tr id='unstocked'>
                        <td class="px-6 py-4 whitespace-nowrap">{{$unstocked->itemID}}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{$unstocked->itemName}}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{$unstocked->supplierName}}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        @foreach($tags as $tag)
                            @if($tag->itemID == $unstocked->itemID)
                                <span class='badge badge-secondary'>{{$tag->tagName}}</span>
                            @endif
                        @endforeach
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">UNSTOCKED</td>
                        @if (Session::get('requestID') != null)  
                        <td class="px-6 py-4 whitespace-nowrap"> 
                            <form action="/addItem" method = "GET">
                                <input type="hidden" name = "itemID" value= {{$unstocked->itemID}}>
                                Quantity <input type = "number" name = "quantity" class="number" min= 0 max= 50>
                                <button class="p-0"> Add To Branch</button>
                            </form></td>
                        @else
                        <td class="px-6 py-4 whitespace-nowrap"></td>
                        @endif
                        </tr>
                    @endforeach

                    </tbody>
                 </table>
                
            </div>
            </div>  
        </div>
    </div>
</div>
            <!--Request List Modal-->

            <div class=" hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="requestList">
                <div class="w-3/12 relative w-auto my-6 mx-auto max-w-3xl">
                    <!--content-->
                    <div class=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <!--header-->
                        <div class="flex items-start justify-between p-5 border-b border-solid border-gray-500 rounded-t">
                        <h3 class="text-3xl font-semibold">
                            Request List
                        </h3>
                        <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none" onclick="toggleModal('requestList')">
                            ×
                        </button>
                        </div>
                        <!--body-->
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
                                
                                <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                        <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Item ID
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Item Name
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Quantity
                                        </th>
                                    
                                        </tr>   
                                </thead> 
                                <tbody class="bg-white divide-y divide-gray-200"> 
                                @foreach($reqList as $key => $item)
                                    
                                    <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">{{$item->itemID}}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{$item->itemName}}</td>
                                    <td class="px-6 py-4 whitespace-nowrap">{{$item->quantityRequested}}</td>
                                    </tr>
                                 @endforeach
                      
                                </tbody>
                            </table>
                        </div>
                    </div>
                        <!--footer-->
                        
                    </div>
                </div>
            </div>
</div> 
<!--Live search ajax  -->
<script type="text/javascript">

    $('#search').on('keyup',function(){
        $value=$(this).val();
            $.ajax({
            type : 'get',
            url : '{{URL::to('searchProduct')}}',
            data:{'search':$value},
            success:function(data){
            $('tbody').html(data);
            }
        });
    })

    $.ajaxSetup({ headers: { 'csrftoken' : '{{ csrf_token() }}' } });

    function toggleModal(modalID){
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById("backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById("backdrop").classList.toggle("flex");
    
  }
</script>

@endsection

