@extends('layout.layout')

@section('content')


<div class="flex justify-center">
       
    <div class="w-1/4  p-10 mt-48 bg-white bg-opacity-70 rounded-md">
       
        <form action="{{route('login')}}" method = "post">
            @csrf
            <div class = "mb-16">
                <h2 class="text-center text-4xl ">Log In</h2>
            </div>
            
            <div class = "mb-4">
                <label for="empID" class ="sr-only">Employee ID</label>
                <input type="text" name = "empID"  placeholder = "Employee ID" class="bg-gray-200 border-2 w-full h-1/3 p-4 rounded-sm ">
               
            </div>
            <div class = "mb-4">
                <label for="password" class ="sr-only">Password</label>
                <input type="password"name="password" id="password" placeholder="Password" class="bg-gray-200 border-2 w-full h-1/3 p-4 rounded-sm @error('password') border-red-500 @enderror" value="">
                @error('password')
               @enderror
            </div>

            @if($message = Session::get('status'))
            <div class ="text-center text-red-500 mt-4">
                {{ $message }} 
            </div>
            @endif

            <div class="flex justify-center mt-4">
                <button type="submit" class="bg-blue-500 text-white px-4 py-3 rounded-sm font-medium w-1/2 hover:bg-blue-300 ">Login</button>
            </div>  
            
        </form>
    </div>
</div>


    
@endsection