@if($errors->any())
<div class=" overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="error">
    <div class="w-3/12 relative w-auto my-6 mx-auto max-w-3xl">
      <!--content-->
      <div class=" border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <!--header-->
        <div class="flex items-start justify-end p-5 pb-0 rounded-t">
          
          <button class="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none" onclick="toggleModal('error')">
              ×
          </button>
        </div>
        <!--body-->
        <div class="pt-0 w-full relative p-6 flex-auto text-red-500">
            ERROR: Form has not been submitted
        </div>
        <!--footer-->
        
      </div>
    </div>
  </div>

    <div class="opacity-25 fixed inset-0 z-40 bg-black" id="backdrop"></div>
@else
    <div class="hidden opacity-25 fixed inset-0 z-40 bg-black" id="backdrop"></div> 
@endif