@extends('layout.layout')

@section('admin')
    bg-gray-500
@endsection

@section('content')


<div class="bg-gray-800 justify-center">
        <nav class="fixed flex w-full flex-wrap p-2 bg-gray-800">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div class="relative flex items-center justify-center h-16">
                    <div class="flex space-x-16 justify-center">
                      <button class="focus:outline-none focus:bg-gray-900 hover:bg-gray-700 text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium" onclick="toggleTable('t_employee')">Employees</button>
                      <button class="focus:outline-none focus:bg-gray-900 hover:bg-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium" onclick="toggleTable('t_items')">Items</button>
                      <button class="focus:outline-none focus:bg-gray-900 hover:bg-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium" onclick="toggleTable('t_branches')">Branches</button>
                      <button class="focus:outline-none focus:bg-gray-900 hover:bg-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium" onclick="toggleTable('t_suppliers')">Suppliers</button>
                      <button class="focus:outline-none focus:bg-gray-900 hover:bg-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium" onclick="toggleTable('t_brands')">Brands</button>
                    </div>
              </div>
            </div>
        </nav>
</div>
<div class="mt-24 hidden flex justify-center p-8" id="tables">
        <!--employee-->
        @include('contents.adminTabs.employeesTab')
        <!--items-->
        @include('contents.adminTabs.itemsTab')
        <!--branches-->
        @include('contents.adminTabs.branchesTab')
        <!--suppliers-->
        @include('contents.adminTabs.suppliersTab')
        <!--Brands-->
        @include('contents.adminTabs.brandsTab')
           
</div>
<!--Error Modal-->    
@include('contents.adminModals.errorModals')
<!--Employee Modal-->    
@include('contents.adminModals.employeeModals')
<!--Item Modal-->
@include('contents.adminModals.itemModals')
<!--Branch Modal-->       
@include('contents.adminModals.branchModals')
<!--Supplier Modal-->       
@include('contents.adminModals.supplierModals')
<!--Brand Modal-->       
@include('contents.adminModals.brandModals')

<script type="text/javascript">

  function toggleModal(modalID){
    document.getElementById(modalID).classList.toggle("hidden");
    document.getElementById("backdrop").classList.toggle("hidden");
    document.getElementById(modalID).classList.toggle("flex");
    document.getElementById("backdrop").classList.toggle("flex");
  }
  function toggleTable(tableID){
      var i, content;

      content = document.getElementsByClassName("content");
      
      document.getElementById("tables").classList.remove("hidden");  
      for(i=0;i<content.length;i++){
          content[i].classList.add("hidden");
      }  

      active_table=document.getElementById(tableID);
      active_table.classList.toggle("hidden");

  }   
  @if(isset($activeTable))
    toggleTable('{{$activeTable}}');
  @endif

  @if(isset($activeModal))
    toggleModal('{{$activeModal}}');
  @endif
</script>

<script type="text/javascript">
$.ajaxSetup({ headers: { 'csrftoken' : '{{ csrf_token() }}' } });
</script>

@endsection