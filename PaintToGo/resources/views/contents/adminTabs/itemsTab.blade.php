<div class="content w-10/12 flex flex-col" id="t_items">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
                <div class="flex whitespace-nowrap bg-white justify-between">
                    <div class="px-6 py-4 whitespace-nowrap bg-white text-gray-900 text-xl uppercase flex items-center"> 
                        <h2>Item List</h2>
                    </div>
                    <form action="searchItem" method = "POST">
                        @csrf
                        <input type="text" id="search" name ="search" placeholder = "Search" class="w-2/6 m-1 rounded-md " value = "">
                    </form>
                    <div class="px-6 py-4 whitespace-nowrap bg-white text-gray-900 text-lg font-semibold flex items-center"> 
                        <button onclick="toggleModal('newItem')" class="mr-6 bg-green-500 text-white px-4 py-3 w-24 rounded-sm text-sm hover:bg-green-300 ">New Item</button>
                    </div>
                </div>
                <table class="min-w-full divide-y divide-gray-500">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Item ID
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Item Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Selling Price
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Supplier
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Unit Count
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date Updated
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tags
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                            </th>
                        </tr>   
                    </thead> 
                    <tbody class="bg-white divide-y divide-gray-200" id ="itemBody">
                    @foreach($items as $item)
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">{{$item->itemID}}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">{{$item->itemName}}</div>
                            
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">{{$item->price}}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{$item->sellingPrice}}</div>

                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{$item->supplierName}}</div>
                        
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{$item->unitCount}}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900">{{$item->dateAdded}}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-gray-900"> 
                                @foreach($tags as $tag)
                                    @if($tag->itemID == $item->itemID)
                                    <span class='badge badge-secondary'>{{$tag->tagName}}</span>
                                     @endif
                                 @endforeach
                                 </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap flex">
                                <div class="text-sm text-gray-900 ml-12">
                                    <form action="itemActions" method = "POST">
                                        @csrf
                                        <input type='hidden' name='id' value='{{$item->itemID}}'>
                                        <button name='button' id="editButton" value='Edit' class=" bg-blue-500 text-white px-4 py-3 w-15 rounded-sm text-sm hover:bg-blue-300 ">Edit</button>
                                        <button class="bg-blue-500 text-white px-4 py-3 w-15 rounded-sm text-sm hover:bg-blue-300" name='button' id="editButton" value='Delete'>Delete</button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                        @endforeach            
                    </tbody>
                </table>
                {{ $items->links() }}
            
            </div>
        </div>  
    </div>
</div>

<script type="text/javascript">

    $('#searchItem').on('keyup',function(){
        $value=$(this).val();
            $.ajax({
            type : 'get',
            url : '{{URL::to('searchItem')}}',
            data:{'search':$value},
            success:function(data){
            $('itemBody').html(data);
            }
        });
})
</script>