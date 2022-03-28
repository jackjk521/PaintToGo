<div class="content w-10/12 flex flex-col" id="t_employee">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
                    <div class="flex whitespace-nowrap bg-white justify-between">
                        <div class="px-6 py-4 whitespace-nowrap bg-white text-gray-900 text-xl uppercase flex items-center"> 
                            <h2>Employee Table</h2>
                            
                        </div>
                        <div class="px-6 py-4 whitespace-nowrap bg-white text-gray-900 text-lg font-semibold flex items-center"> 
                        
                                <button onclick="toggleModal('employee')" class="mr-6 bg-blue-500 text-white px-4 py-3 w-24 rounded-sm text-sm hover:bg-blue-300 ">Add</button>
                        
                        </div>
                    </div>
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="w-40 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Employee ID
                                </th>
                                <th scope="col" class="w-40 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Type
                                </th>
                                <th scope="col" class="w-40 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Full Name
                                </th>
                                <th scope="col" class="w-40 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Contact Number
                                </th>
                                <th scope="col" class="w-40 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Branch
                                </th>
                                <th scope="col" class="w-40 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Action
                                </th>
                            </tr>   
                        </thead> 
                        <tbody class="bg-white divide-y divide-gray-200">    
                                    @foreach ($employees as $employee)
                                    <tr>
                                        <td class="px-7 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-900">{{$employee->employeeID}}</div>
            
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                                <div class="text-sm text-gray-900">{{$employee->levelName}}</div>
                                        
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">{{$employee->lastName}}, {{$employee->firstName}}</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">{{$employee->contactNumber}}</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">{{$employee->branchName}}</div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap flex">
                                            <div class="text-sm text-gray-900 ">
                                                <form action="employeeActions" method = "POST">
                                                    @csrf
                                                    <input type='hidden' name='id' value='{{$employee->employeeID}}'>
                                                    <button type="submit" value="Edit" name="button" class="text-indigo-600 hover:text-indigo-900">Edit</button>
                                                </form>
                                            </div>
                                            <div class="text-sm text-gray-900 ml-12">
                                                <form action="deleteEmployee" method = "POST">
                                                    @csrf
                                                    <input type='hidden' name='id' value='{{$employee->employeeID}}'>
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