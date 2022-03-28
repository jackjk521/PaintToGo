@extends('layout.layout')

@section('requests')
    bg-gray-500
@endsection

@section('content')


<div class="p-4 flex justify-center">
    <div class="w-1/2 flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                  <div class="mb-4 flex justify-between">
                    <div class="flex items-center  mr-4">
                        <h1 class="text-2xl font-semibold uppercase">Request List</h1>
                    </div>
                    <div class="p-2">
                        <button onclick="window.location='{{ route('requests') }}'"  class="text-indigo-600 hover:text-indigo-900 underline">Return to Requests</button>
                    </div>
                  </div>
                

                <div class="shadow bg-gray-50 overflow-hidden border-b border-gray-200 sm:rounded-md">
                    
                    
                  
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
                 <form action="requestActions" method = "post">
                 @csrf
                 </form>
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
        $value = $(this).val();
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

