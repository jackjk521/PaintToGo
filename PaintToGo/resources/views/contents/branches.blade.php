@extends('layout.layout')

@section('branches')
    bg-gray-500
@endsection

@section('content')

<div class="grid grid-cols-3 gap-4 p-8 justify-center">
                    
                    
                         
    @foreach ($branches as $branch)
        
                
                <div class=" m-8 text-center">
                    
                        <h1 class=" mb-10 text-xl font-bold "> {{$branch->branchName}} </h1>
                        <h1 class="mb-2 text-l font-bold">{{$branch->branchAddress}} </h1>
                        <h1 class=" mb-2 text-l font-bold"> {{$branch->branchContact}} </h1>   
                </div>

    @endforeach
    
</div>

   
@endsection