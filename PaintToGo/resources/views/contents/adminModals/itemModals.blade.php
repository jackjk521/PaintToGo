<!--New Item Modal -->
<div class=" hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="newItem">
    <div class="w-3/12 relative w-auto my-6 mx-auto max-w-3xl">
      <!--content-->
      <div class=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 class="text-3xl font-semibold">
            Add Item
          </h3>
          <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none" onclick="toggleModal('newItem')">
              ×
          </button>
        </div>
        <!--body-->
        <div class="w-full relative w-96 p-6 flex-auto">
         
          <form action="newItem" method = "post">
              @csrf
                <div class="mb-4">
                    <label for="fname" class ="sr-only">Item Name:</label>
                      <input type="text" name="name" id="inputName" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" placeholder="Item Name">
                      @error('fname')
                          <div class ="m-2 text-red-500 mt-2 text-sm">
                              {{$message}}
                          </div>
                      @enderror 
                </div>
                <div class = "p-0 mb-4 flex ">
                  <div class="w-full">
                      <label for="lname" class ="sr-only">Price:</label>
                      <input type="text" name="price" id="price" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" placeholder="Price">
                      @error('lname')
                          <div class ="m-2 text-red-500 mt-2 text-sm">
                              {{$message}}
                          </div>
                      @enderror
                  </div>
                  <div class="w-full  ml-6">
                        <label for="selpric" class ="sr-only">Selling Price:</label>
                        <input type="text" name="sellPrice" id="selpric" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" placeholder="Selling Price">
                        @error('lname')
                            <div class ="m-2 text-red-500 mt-2 text-sm">
                                {{$message}}
                            </div>
                        @enderror
                    </div>
                </div>
            
              <div class = "mb-4"> 
                  <label for="number" class ="sr-only">Unit Count:</label>
                  <input type="text"name="unitCount" id="number" placeholder="Unit Count" class="bg-gray-200 border-2 w-full h-1 p-4 rounded-sm ">
                  @error('number')
                  <div class ="m-2 text-red-500 mt-2 text-sm">
                      {{$message}}
                  </div>
                  @enderror
              </div>
              <div class="flex mb-4">
                  <label for="brandID" class="m-2">Brand:</label>
                  <select id="Brands" name="brandID" class="w-full bg-gray-200 border-2 rounded-sm text-center">             
                     @foreach($brands as $brand)
                      <option value='{{$brand->brandID}}'>{{$brand->brandName}}</option>
                      @endforeach
                  </select>
                  @error('branch')
                  <div class ="m-2 text-red-500 mt-2 text-sm">
                      {{$message}}
                  </div>
                  @enderror
              </div>
              <div class="flex mb-4">
                  <label for="itemSupplier" class="m-2">Supplier:</label>
                  <select id="suppliers" name="itemSupplier" class="w-full bg-gray-200 border-2 rounded-sm text-center">     
                  @foreach($suppliers as $supplier)
                        <option value='{{$supplier->supplierID}}'>{{$supplier->supplierName}}</option>
                  @endforeach
                  </select>
                  @error('branch')
                  <div class ="m-2 text-red-500 mt-2 text-sm">
                      {{$message}}
                  </div>
                  @enderror
              </div>
              <div class="mt-6 flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <button type="submit" value="Add Item" name="button" class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" onclick="toggleModal('newItem')">
                    Confirm
                  </button>    
              </div>
          </form>
          
          
        </div>
        <!--footer-->
        
      </div>
    </div>
  </div>

@if(isset($editItem) )
<!--Edit Item Modal -->
<div class=" hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="editItem">
    <div class="w-3/12 relative w-auto my-6 mx-auto max-w-3xl">
      <!--content-->
      <div class=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
          <h3 class="text-3xl font-semibold">
            Edit Item
          </h3>
          <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none" onclick="toggleModal('editItem')">
              ×
          </button>
        </div>
        <!--body-->
        <div class="w-full relative w-96 p-6 flex-auto">
         
          <form action="editItem" method = "post">
              @csrf
                <div class="mb-4">
                    <label for="fname" class ="sr-only">Item Name:</label>
                      <input type="text" name="name" id="inputName" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" value = "{{$editItem->itemName}}" placeholder="Item Name">
                </div>
                <div class = "p-0 mb-4 flex ">
                  <div class="w-full">
                      <label for="lname" class ="">Price:</label>
                      <input type="text" name="price" id="price" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" value = "{{$editItem->price}}"placeholder="Price">
                  </div>
                  <div class="w-full  ml-6">
                        <label for="selpric" class ="">Selling Price:</label>
                        <input type="text" name="sellPrice" id="selpric" class="bg-gray-200 border-2 w-full h-1  p-4 rounded-sm" value = "{{$editItem->sellingPrice}}" placeholder="Selling Price">
                    </div>
                </div>
            
              <div class = "mb-4"> 
                  <label for="number" class ="sr-only">Unit Count:</label>
                  <input type="text"name="unitCount" id="number" placeholder="Unit Count" value = "{{$editItem->unitCount}}"class="bg-gray-200 border-2 w-full h-1 p-4 rounded-sm ">
                  
              </div>
              <div class="flex mb-4">
                  <label for="brandID" class="m-2">Brand:</label>
                  <select id="Brands" name="brandID" class="w-full bg-gray-200 border-2 rounded-sm text-center">             
                     @foreach($brands as $brand)
                     @if($brand->brandID == $editItem->brandID)
                     <option value='{{$brand->brandID}}' selected>{{$brand->brandName}}</option>
                     @else
                     <option value='{{$brand->brandID}}'>{{$brand->brandName}}</option>
                     @endif
                      
                      @endforeach
                  </select>
                  
              </div>
              <div class="flex mb-4">
                  <label for="itemSupplier" class="m-2">Supplier:</label>
                  <select id="suppliers" name="itemSupplier" class="w-full bg-gray-200 border-2 rounded-sm text-center">     
                  @foreach($suppliers as $supplier)
                    @if($supplier->supplierID == $editItem->supplierID)
                    <option value='{{$supplier->supplierID}}' selected>{{$supplier->supplierName}}</option>
                    @else
                      <option value='{{$supplier->supplierID}}'>{{$supplier->supplierName}}</option>
                    @endif
                        
                  @endforeach
                  </select>
              </div>
              <div class="mt-6 flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                  <input type="hidden" name="id" value="{{$editItem->itemID}}">
                  <button type="submit" value="Update" name="button" class="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style="transition: all .15s ease" onclick="toggleModal('newItem')">
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
