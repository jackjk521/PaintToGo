<!--New Branch Modal -->
<div class=" hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="newBranch">
    <div class="w-3/12 relative w-auto my-6 mx-auto max-w-3xl">
      <!--content-->
      <div class=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 class="text-3xl font-semibold">
            Create New Branch
          </h3>
          <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none" onclick="toggleModal('newBranch')">
              ×
          </button>
        </div>
        <!--body-->
        <div class="w-full relative w-96 p-6 flex-auto">
         
          <form action="newBranch" method = "post">
              @csrf
                <div class="mb-4">
                    <label for="branchName" class ="sr-only">Branch Name:</label>
                      <input type="text" name="branchName" id="inputName" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" placeholder="Branch Name">
                </div>
                <div class="mb-4">
                    <label for="branchAddress" class ="sr-only">Branch Address:</label>
                    <input type="text" name="branchAddress" id="inputName" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" placeholder="Branch Address">
                </div>
                
              <div class = "mb-4"> 
                  <label for="number" class ="sr-only">Branch Contact:</label>
                  <input type="text" name="branchContact" id="number" placeholder="Branch Contact Number" class="bg-gray-200 border-2 w-full h-1 p-4 rounded-sm "> 
              </div>
              <div class = "flex mb-4"> 
                  <label for="manager" >Branch Manager:</label>
                  <select id="manager" name="managerID" class="w-full bg-gray-200 border-2 rounded-sm text-center" placeholder="Branch Manager">             
                     @foreach($employees as $employee)
                      <option value='{{$employee->employeeID}}'>{{$employee->lastName}}, {{$employee->firstName}}</option>
                      @endforeach
                  </select>
              </div>
              <div class="mt-6 flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button type="submit" value="Add Branch" name="button" class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" onclick="toggleModal('newBranch')">
                    Confirm
                  </button>   
        </form>
         
        </div>
        </div>
        </div>
    </div>
</div>

@if(isset($editBranch))
<div class=" hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="editBranch">
    <div class="w-3/12 relative w-auto my-6 mx-auto max-w-3xl">
      <!--content-->
      <div class=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 class="text-3xl font-semibold">
            Edit Branch
          </h3>
          <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none" onclick="toggleModal('editBranch')">
              ×
          </button>
        </div>
        <!--body-->
        <div class="w-full relative w-96 p-6 flex-auto">
         
          <form action="editBranch" method = "post">
              @csrf
                <div class="mb-4">
                    <label for="branchName" class ="">Branch Name:</label>
                      <input type="text" name="branchName" id="inputName" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" value = "{{$editBranch->branchName}}" placeholder="Branch Name">
                </div>
                <div class="mb-4">
                    <label for="branchAddress" class ="">Branch Address:</label>
                    <input type="text" name="branchAddress" id="inputName" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" value = "{{$editBranch->branchAddress}}" placeholder="Branch Address">
                </div>
                
              <div class = "mb-4"> 
                  <label for="number" class ="">Branch Contact:</label>
                  <input type="text" name="branchContact" id="number" placeholder="Branch Contact Number" value = "{{$editBranch->branchContact}}" class="bg-gray-200 border-2 w-full h-1 p-4 rounded-sm "> 
              </div>
              <div class = "flex mb-4"> 
                  <label for="manager" >Branch Manager:</label>
                  <select id="manager" name="managerID" class="w-full bg-gray-200 border-2 rounded-sm text-center" placeholder="Branch Manager">             
                    @foreach($employees as $employee)
                      @if($employee->employeeID == $editBranch->branchManagerID)
                      <option value='{{$employee->employeeID}}' selected>{{$employee->lastName}}, {{$employee->firstName}}</option>
                      @else
                      <option value='{{$employee->employeeID}}'>{{$employee->lastName}}, {{$employee->firstName}}</option>
                      @endif
                    @endforeach
                  </select>
              </div>
              <div class="mt-6 flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
              <input type="hidden" name="id" value="{{$editBranch->branchID}}">
                  <button type="submit" value="Edit Branch" name="button" class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" onclick="toggleModal('editBranch')">
                    Confirm
                  </button>    
              </div>
        </form>
        </div>
        </div>
    </div>
</div>
@endif