@extends('layout.layout')
@section('products')
    bg-gray-500
@endsection

@section('content')



<div class="flex justify-center">
     
    <div class="w-1/4  p-8 mt-48 bg-white bg-opacity-70 rounded-md">
       
        
           
        <div class = "mb-12">
            <h2 class="text-center text-2xl ">Create Request</h2>
        </div>
        <form action="{{route('newRequest')}}" method = "POST">
            @csrf
            <div class = "mb-4">
                <label for="paymentType" class="ml-6 ">Payment Type:</label>
                <select name="paymentType" id="ptype" class="mb-8">
                    <option value="Cash">Cash</option>
                    <option value="Credit">Credit</option>  
                </select> 
            </div>
            
            <div class="flex justify-center mt-4">
                <button type="submit" name="createRequest" class="bg-blue-500 text-white px-4 py-3 rounded-sm font-medium w-1/2 hover:bg-blue-300 ">Create Request</button>
            </div>  
        
        </form>
    </div>
</div>
@endsection