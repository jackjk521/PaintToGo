<!--New Brand Modal -->
<div class=" hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="newBrand">
    <div class="w-3/12 relative w-auto my-6 mx-auto max-w-3xl">
      <!--content-->
      <div class=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 class="text-3xl font-semibold">
            Create New Branch
          </h3>
          <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none" onclick="toggleModal('newBrand')">
              ×
          </button>
        </div>
        <!--body-->
        <div class="w-full relative w-96 p-6 flex-auto">
         
          <form action="newItem" method = "post">
              @csrf
                <div class="mb-4">
                    <label for="branchName" class ="sr-only">Brand Name:</label>
                      <input type="text" name="brandName" id="inputName" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" placeholder="Brand Name">
                </div>
        </form>
        </div>
        </div>
    </div>
</div>

@if(isset($editBrand))
<!--Edit Brand Modal -->
<div class=" hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="newBrand">
    <div class="w-3/12 relative w-auto my-6 mx-auto max-w-3xl">
      <!--content-->
      <div class=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 class="text-3xl font-semibold">
            Create New Branch
          </h3>
          <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none" onclick="toggleModal('newBrand')">
              ×
          </button>
        </div>
        <!--body-->
        <div class="w-full relative w-96 p-6 flex-auto">
         
          <form action="editBrand" method = "post">
              @csrf
                <div class="mb-4">
                    <label for="branchName" class ="sr-only">Brand Name:</label>
                      <input type="text" name="brandName" id="inputName" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" value = "{{$editBrand->supplierName}}"placeholder="Brand Name">
                </div>
        </form>
        </div>
        </div>
    </div>
</div>
@endif