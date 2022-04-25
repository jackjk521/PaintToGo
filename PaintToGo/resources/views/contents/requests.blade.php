@extends('layout.layout')

@section('requests')
    bg-gray-500
@endsection

@section('content')


@if ($requests->count())
<div class="flex justify-center">
    <div class="w-9/12 flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                
                  <div class="mb-6 flex justify-between">
                    <div class="flex items-center  mr-4">
                        <h1 class="text-2xl font-semibold uppercase">Requests</h1>
                    </div>
                    
                    
                  </div>
                

                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
                    
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                          <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Request ID
                             </th>
                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Employee Name
                             </th>
                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Branch Name
                             </th>
                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date Requested
                             </th>
                             <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                   Payment Type
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                   Status
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                            </th>
                          </tr>   
                    </thead> 
                    <tbody class="bg-white divide-y divide-gray-200">    
                        @foreach($requests as $b)    
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-900">{{$b->requestID}}</div>
               
                                           </td>
                                           <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-900">{{$b->firstName}}</div>
               
                                           </td>
                                           <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-900">{{$b->branchName}}</div>
               
                                           </td>
                                           <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-900">{{$b->dateRequested}}</div>
                                           
                                           </td>
                                           <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-900">{{$b->paymentType}}</div>
                                           </td>
                                           <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-900">{{$b->requestStatus}}</div>
                                           </td>
                                           <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">

                                            <div class="text-sm text-gray-900 ">
                                                <form action="/showReqList " method= "GET" class="mb-2">
                                                    @csrf
                                                    <input type="hidden" name ="requestID" value = {{$b->requestID}}>
                                                    <button id = "showbtn" class="text-indigo-600 hover:text-indigo-900"> Show Request List </button>
                                                </form>
                                                <form action="cancelRequest" method= "POST">
                                                    @csrf
                                                    @method('delete')
                                                    <input type="hidden" name="reqID" value = {{$b->requestID}}>
                                                    <button class="text-red-500 hover:text-red-900">Cancel</button>
                                                    
                                                </form>
                                            </div>
                                           



                                           
                                           </td>
                                        
                                        </tr>                   
                        @endforeach
                    </tbody>
                 </table>
                 
                

                </div>
              </div>  
            </div>
    </div>
</div>

<script type="text/javascript">
  function toggleModal(modalID){
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById("backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById("backdrop").classList.toggle("flex");

  }

</script>

@else 
<div class="flex justify-center">
    <div>
        <h1>No Requests</h1>
    </div>
@endif


@endsection

