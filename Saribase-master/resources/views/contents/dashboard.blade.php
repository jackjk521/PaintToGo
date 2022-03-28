@extends('layout.layout')

@section('dashboard')
    bg-gray-500
@endsection

@section('content')
<div class="flex h-3/5 m-2 ">
    <div class="bg-white mx-2 p-4 rounded-sm shadow-sm w-full">
        <div class="uppercase p-2 mb-4 text-xl">
            <h1>Inventory Stock Overview</h1>
        </div>
        <div class="flex justify-between">
            <!--TABLE 1-->
            @foreach ($branches as $branch)
            <div class=" w-1/2 mx-12 flex  items-center flex-col">
                <div class="-my-2 w-full overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="w-full py-2 align-middle inline-block sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
                        <div class="w-full flex items-center mr-4 p-2 bg-gray-50">
                            <h1 class="ml-2 text-md font-semibold uppercase">{{$branch->branchName}}</h1>
                            <div class="px-8 py-1 text-gray-900 font-semibold ml-10"> 
                                <button onclick="toggleModal('bulkRequest', this.id);" class="mr-6 bg-green-500 text-white px-2 py-2 w-21 rounded-sm text-sm hover:bg-green-300" id= "{{$branch->branchID}}">Bulk Restock</button>
                            </div>
                        </div>
                      <table class="text-center items-center min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                              <tr>
                                 <th scope="col" class="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Item ID
                                 </th>
                                 <th scope="col" class="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Item Name
                                 </th>
                                
                                <th scope="col" class="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Stock
                                </th>
                               
                              </tr>   
                        </thead> 
                        <tbody class="bg-white divide-y divide-gray-200">
                        @foreach ($items as $item)
                            @if($item->branchID == $branch->branchID)
                            <tr>
                               <td class="px-7 py-4 whitespace-nowrap">
                                       <div class="text-sm text-gray-900">{{$item->itemID}}</div>
                               </td>
                               <td class="px-6 py-4 whitespace-nowrap">
                                       <div class="text-sm text-gray-900">{{$item->itemName}}</div>
                               
                               </td>
                               <td class="px-6 py-4 whitespace-nowrap">
                                   <div class="text-sm text-gray-900">{{$item->itemQuantity}}</div>
                               </td>
                            </tr>
                            @endif
                        @endforeach
                           
                        </tbody>
                     </table>
                     
                    </div>
                  </div>  
                </div>
            </div>
            @endforeach     
         </div>
    </div>
    
    
</div>

<div class="flex h-1/3 m-2">
    
    <div class="bg-white m-2 p-4 rounded-sm shadow-sm w-full">
           
        <div class="text-xl">
            Branches Information
        </div>
        <table class="text-center items-center min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                              <tr>
                                 <th scope="col" class="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Branch
                                 </th>
                                 <th scope="col" class="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Branch Address
                                 </th>
                                
                                <th scope="col" class="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Branch Manager
                                </th>
                                <th scope="col" class="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Branch Contact Number
                                </th>
                              </tr>   
                        </thead> 
                        <tbody class="bg-white divide-y divide-gray-200">
                        @foreach ($branches1 as $branche)
                            <tr>
                               <td class="px-7 py-4 whitespace-nowrap">
                                       <div class="text-sm text-gray-900">{{$branche->branchName}}</div>
                               </td>
                               <td class="px-6 py-4 whitespace-nowrap">
                                       <div class="text-sm text-gray-900">{{$branche->branchAddress}}</div>
                               
                               </td>
                               <td class="px-6 py-4 whitespace-nowrap">
                                   <div class="text-sm text-gray-900">{{$branche->lastName}}, {{$branche->firstName}}</div>
                               </td>
                               <td class="px-6 py-4 whitespace-nowrap">
                                   <div class="text-sm text-gray-900">{{$branche->branchContact}}</div>
                               </td>
                            </tr>   
                        @endforeach
                           
                        </tbody>
                     </table>     
        </div>
    </div>
</div>

<div class=" hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id='bulkRequest'>
    <div class="w-3/12 relative w-auto my-6 mx-auto max-w-3xl">
      <!--content-->
      <div class=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 class="text-3xl font-semibold">
            Bulk Restock
          </h3>
          <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none" onclick="toggleModal('bulkRequest')">
              ×
          </button>
        </div>
        <!--body-->
        <div class="w-full relative w-96 p-6 flex-auto">
         
          <form action="bulkOrder" method = "post">
              @csrf
                <div class="mb-4">
                    <label for="name" >Amount:</label>
                      <input type="text" name="bulk" id="name" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm"  placeholder="Bulk Amount">
                </div>
                
                    <input type="hidden" id="bulkID" name="id">
                  <button type="submit" value="Edit Branch" name="button" class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" onclick="toggleModal('editBranch')">
                    Confirm
                  </button>    
              </div>
          </form>

        </div>
    </div>
    </div>
<div>


<script type="text/javascript">

  function toggleModal(modalID, ID){
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    var x = document.getElementById("bulkID").value = ID; 
  }

  @if(isset($activeModal))
    toggleModal('{{$activeModal}}');
  @endif
</script>
   
@endsection