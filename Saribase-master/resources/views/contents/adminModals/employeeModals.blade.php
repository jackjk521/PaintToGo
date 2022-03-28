<div class=" hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="employee">
  <div class="w-3/12 relative w-auto my-6 mx-auto max-w-3xl">
    <!--content-->
    <div class=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
      <!--header-->
      <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
        <h3 class="text-3xl font-semibold">
          Add Employee
        </h3>
        <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none" onclick="toggleModal('employee')">
            ×
        </button>
      </div>
      <!--body-->
      <div class="w-full relative w-96 p-6 flex-auto">
       
        <form action="addEmployee" method = "post">
            @csrf
            
            <div class = "p-0 mb-4 flex "> <!--first and last name -->
                <div class="w-full">

                    <label for="fname" class ="sr-only">First Name</label>
                    <input type="text" name="fname" id="fname" placeholder="First Name" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm ">
                    @error('fname')
                        <div class ="m-2 text-red-500 mt-2 text-sm">
                            {{$message}}
                        </div>
                    @enderror
                </div>

                <div class="w-full ml-6">
                    <label for="lname" class ="sr-only">Last Name</label>
                    <input type="text"name="lname" id="lname" placeholder="Last Name" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm ">
                    @error('lname')
                        <div class ="m-2 text-red-500 mt-2 text-sm">
                            {{$message}}
                        </div>
                    @enderror
                </div>
                
            </div>

            <div class = "mb-4"> <!--number -->
                <label for="number" class ="sr-only">Contact Number</label>
                <input type="text"name="number" id="number" placeholder="Contact Number" class="bg-gray-200 border-2 w-full h-1 p-4 rounded-sm ">
                @error('number')
                <div class ="m-2 text-red-500 mt-2 text-sm">
                    {{$message}}
                </div>
                @enderror
            </div>
            <div class="flex mb-4">
                <label for="branch" class="m-2">Branch ID: </label>
                <select name="branch" id="branch" class="w-12 bg-gray-200 border-2 rounded-sm text-center">
                    
                    @foreach ($branches as $branch)
                        <option value="{{$branch->branchID}}">{{$branch->branchID}}</option>
                    @endforeach
                </select>
                @error('branch')
                <div class ="m-2 text-red-500 mt-2 text-sm">
                    {{$message}}
                </div>
                @enderror
            </div>
            <div class = "mb-4"> <!--password -->
                <label for="password" class ="sr-only">Password</label>
                <input type="password"name="password" id="password" placeholder="Password" class="bg-gray-200 border-2 w-full h-1 p-4 rounded-sm ">
                @error('password')
                <div class ="m-2 text-red-500 mt-2 text-sm">
                    {{$message}}
                </div>
                @enderror
            </div>
            <div class = "mb-8"> <!--c_password -->
                <label for="password_confirmation" class ="sr-only">Confirm Password</label>
                <input type="password"name="password_confirmation" id="password_confirmation" placeholder="Confirm Password" class="bg-gray-200 border-2 w-full h-1 p-4 rounded-sm" >
                @error('password_confirmation')
                <div class ="m-2 text-red-500 mt-2 text-sm">
                    {{$message}}
                </div>
                @enderror
            </div>
            <div class="mt-6 flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
        
                <button type="submit" class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" onclick="toggleModal('employee')">
                  Confirm
                </button>
                
            </div>
        </form>
        
        
      </div>
      <!--footer-->
      
    </div>
  </div>
</div>


@if(isset($editEmployee))
<div class=" hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="editEmployee">
  <div class="w-3/12 relative w-auto my-6 mx-auto max-w-3xl">
    <!--content-->
    <div class=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
      <!--header-->
      <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
        <h3 class="text-3xl font-semibold">
          Edit Employee
        </h3>
        <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none" onclick="toggleModal('editEmployee')">
            ×
        </button>
      </div>
      <!--body-->
      <div class="w-full relative w-96 p-6 flex-auto">
       
        <form action="editEmployee" method = "post">
            @csrf
            
            <div class = "p-0 mb-4 flex "> <!--first and last name -->
                <div class="w-full">

                    <label for="fname" class ="sr-only">First Name</label>
                    <input type="text" name="fname" id="fname" placeholder="First Name" value="{{$editEmployee->firstName}}" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm ">
                    @error('fname')
                        <div class ="m-2 text-red-500 mt-2 text-sm">
                            {{$message}}
                        </div>
                    @enderror
                </div>

                <div class="w-full ml-6">
                    <label for="lname" class ="sr-only">Last Name</label>
                    <input type="text"name="lname" id="lname" placeholder="Last Name" value="{{$editEmployee->lastName}}"class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm ">
                    @error('lname')
                        <div class ="m-2 text-red-500 mt-2 text-sm">
                            {{$message}}
                        </div>
                    @enderror
                </div>
                
            </div>

            <div class = "mb-4"> <!--number -->
                <label for="number" class ="sr-only">Contact Number</label>
                <input type="text"name="number" id="number" placeholder="Contact Number" value="{{$editEmployee->contactNumber}}" class="bg-gray-200 border-2 w-full h-1 p-4 rounded-sm ">
                @error('number')
                <div class ="m-2 text-red-500 mt-2 text-sm">
                    {{$message}}
                </div>
                @enderror
            </div>
            <div class="flex mb-4">
                <label for="branch" class="m-2">Branch ID: </label>
                <select name="branch" id="branch" class="w-12 bg-gray-200 border-2 rounded-sm text-center">
                    
                    @foreach ($branches as $branch)
                        @if($branch->branchID == $editEmployee->branchID)
                        <option value="{{$branch->branchID}}" selected>{{$branch->branchID}}</option>
                        @endif
                        <option value="{{$branch->branchID}}">{{$branch->branchID}}</option>
                    @endforeach
                </select>
                @error('branch')
                <div class ="m-2 text-red-500 mt-2 text-sm">
                    {{$message}}
                </div>
                @enderror
            </div>
            <div class = "mb-4"> <!--password -->
                <label for="password" class ="sr-only">Password</label>
                <input type="password"name="password" id="password" placeholder="Password" value="{{$editEmployee->password}}"class="bg-gray-200 border-2 w-full h-1 p-4 rounded-sm ">
                @error('password')
                <div class ="m-2 text-red-500 mt-2 text-sm">
                    {{$message}}
                </div>
                @enderror
            </div>
            <div class = "mb-8"> <!--c_password -->
                <label for="password_confirmation" class ="sr-only">Confirm Password</label>
                <input type="password"name="password_confirmation" id="password_confirmation" value="{{$editEmployee->password}}" placeholder="Confirm Password" class="bg-gray-200 border-2 w-full h-1 p-4 rounded-sm" >
                @error('password_confirmation')
                <div class ="m-2 text-red-500 mt-2 text-sm">
                    {{$message}}
                </div>
                @enderror
            </div>
            <div class="mt-6 flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
            <input type="hidden" name="id" value="{{$editEmployee->employeeID}}">
                <button type="submit" class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" onclick="toggleModal('employee')">
                  Confirm
                </button>
                
            </div>
        </form>
        
        
      </div>
      <!--footer-->
      
    </div>
  </div>
</div>
@endif