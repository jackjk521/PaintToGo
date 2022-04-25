<!--New Supplier Modal -->
<div class=" hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="newSupplier">
    <div class="w-3/12 relative w-auto my-6 mx-auto max-w-3xl">
      <!--content-->
      <div class=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 class="text-3xl font-semibold">
            Create New Supplier
          </h3>
          <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none" onclick="toggleModal('newSupplier')">
              ×
          </button>
        </div>
        <!--body-->
        <div class="w-full relative w-96 p-6 flex-auto">
         
          <form action="newSupplier" method = "post">
              @csrf
                <div class="mb-4">
                    <label for="name" class ="sr-only">Supplier Name:</label>
                      <input type="text" name="supplierName" id="name" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" placeholder="Supplier Name">
                </div>
                <div class="mb-4">
                    <label for="Address" class ="sr-only">Supplier Address:</label>
                    <input type="text" name="supplierAddress" id="Address" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" placeholder="Supplier Address">
                </div>
                
              <div class = "mb-4"> 
                  <label for="number" class ="sr-only">Supplier Contact:</label>
                  <input type="text" name="supplierContact" id="number" placeholder="Supplier Contact Number" class="bg-gray-200 border-2 w-full h-1 p-4 rounded-sm "> 
              </div>
              <div class="mt-6 flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button type="submit" value="Add Supplier" name="button" class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" onclick="toggleModal('newBranch')">
                    Confirm
                  </button>   
              </div>
          </form>
        
          </div></div></div>
    </div>
<div>


@if(isset($editSupplier))
<!--Edit Supplier Modal -->
<div class=" hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="editSupplier">
    <div class="w-3/12 relative w-auto my-6 mx-auto max-w-3xl">
      <!--content-->
      <div class=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 class="text-3xl font-semibold">
            Edit Supplier
          </h3>
          <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none" onclick="toggleModal('editSupplier')">
              ×
          </button>
        </div>
        <!--body-->
        <div class="w-full relative w-96 p-6 flex-auto">
         
          <form action="editSupplier" method = "post">
              @csrf
                <div class="mb-4">
                    <label for="name" >Supplier Name:</label>
                      <input type="text" name="supplierName" id="name" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" value = "{{$editSupplier->supplierName}}" placeholder="Supplier Name">
                </div>
                <div class="mb-4">
                    <label for="Address" class ="">Supplier Address:</label>
                    <input type="text" name="supplierAddress" id="Address" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" value = "{{$editSupplier->supplierAddress}}" placeholder="Supplier Address">
                </div>
                
              <div class = "mb-4"> 
                  <label for="number" >Supplier Contact:</label>
                  <input type="text" name="supplierContact" id="number" placeholder="Supplier Contact Number" value = "{{$editSupplier->supplierContact}}" class="bg-gray-200 border-2 w-full h-1 p-4 rounded-sm "> 
              </div>
              <div class="mt-6 flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
              <input type="hidden" name="id" value="{{$editSupplier->supplierID}}">
                  <button type="submit" value="Edit Branch" name="button" class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" onclick="toggleModal('editBranch')">
                    Confirm
                  </button>    
              </div>
          </form>
        </div>
    </div>
    </div>
<div>
@endif