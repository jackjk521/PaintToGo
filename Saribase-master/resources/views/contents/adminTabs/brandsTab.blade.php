<div class="w-2/5 content flex flex-col" id="t_brands">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
                <div class="flex whitespace-nowrap bg-white justify-between">
                    <div class="px-6 py-4 whitespace-nowrap bg-white text-gray-900 text-xl uppercase flex items-center"> 
                        <h2>Brand List</h2>
                        
                    </div>
                    <div class="px-6 py-4 whitespace-nowrap bg-white text-gray-900 text-lg font-semibold flex items-center"> 
                    <button onclick="toggleModal('newBrand')" class="mr-6 bg-green-500 text-white px-4 py-3 w-30 rounded-sm text-sm hover:bg-green-300 ">New Brand</button>
                    </div>
                </div>
                    
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Brand ID
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Brand Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                            </th>
                        </tr>   
                    </thead> 
                    <tbody class="bg-white divide-y divide-gray-200">    
                        
                                    @foreach ($brands as $brand)
                                    <tr>
                                        <td class="px-7 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-900">{{$brand->brandID}}</div>
            
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-900">{{$brand->brandName}}</div>
                                        
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap flex">
                                            <div class="text-sm text-gray-900 ">
                                                <form action="" method = "POST">
                                                    @csrf
                                                    <button type="submit" class="text-indigo-600 hover:text-indigo-900">Edit</button>
                                                </form>
                                            </div>
                                            <div class="text-sm text-gray-900 ml-12">
                                                <form action="" method = "POST">
                                                    @csrf
                                                    <button type="submit" class="text-red-500 hover:text-red-900">Delete</button>
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
