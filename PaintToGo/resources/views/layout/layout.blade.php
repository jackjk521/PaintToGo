<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <title>SariBase</title>

        <!-- Fonts -->
        

        <!-- Styles -->
        <!--<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"> -->

        <style>
            
            

            /* Login and Request form css  */
            #loginform.jumbotron{width: 500px; margin: 0; background-color:#ffd59a; border-radius: 25px;} input{padding: 10px; margin: 5px;} button.btn.btn-primary{padding:10px; margin: 2px;}

            /*Request list with live search */
            #requestlist.jumbotron{width: 500px; margin: 0; background-color:#ffd59a; border-radius: 25px; } input.number{width: 50px; padding: 10px; margin: 5px;} button.btn.btn-primary.Add{padding:10px; float:right; position: absolute;}

            /* Table css  */
            body{
                font-family: Arial, Helvetica, sans-serif;;
                
            }
       
        </style> 

        <!-- Script/Ajax  -->

        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

    </head>
    <body class="bg-gray-200">
        

        <div class="flex">
        @if (Session::get('empID')!=null)
            <div class=" h-screen sticky top-0 bg-gray-800 text-gray-100 flex-col" id="left-side-panel">
    
                    <h1 class=" text-xl p-2 mb-12 mr-8 mt-6">SARIBASE</h1>
                
                
                <a href="{{route('dashboard')}}" class="@yield('dashboard') px-2 py-4 hover:bg-gray-500 flex  text-lg">Dashboard</a>
                <a href="{{route('products')}}" class="@yield('products') px-2 py-4 hover:bg-gray-500 flex  text-lg">Branch Inventory</a>
                <a href="{{route('requests')}}" class="@yield('requests') px-2 py-4 mb-12 hover:bg-gray-500 flex text-lg">Requests</a>
                @if (Session::get('empLevelID')==1)
                    
                    <a href="{{route('admin')}}" class="px-2 py-4 bg-gray-900 hover:bg-gray-500 flex justify-left text-lg">Admin</a>
                    
                @endif
                
                <div class="@yield('request') w-full absolute bottom-0 px-2 py-4 mb-10 hover:bg-gray-500 flex  text-lg">
                    <form action="{{route('logout')}}">
                        <button type="submit">Log Out</button>
                    </form>
                    
                </div>
                
                
            </div>
        @endif

            <div class=" flex-grow " id="main-content">
                @yield('content') 
            </div>
          </div>


        
        
        
        
    </body>
</html>
