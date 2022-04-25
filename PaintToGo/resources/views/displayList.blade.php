@extends('layout.layout')

@section('forms')
    <div align= "center"id= "loginform" class = "jumbotron" >
            <h1>This is the Request List</h1>
            <table>
                <thead>
                     <tr>
                        <th> Item ID </th>
                        <th> Item Name </th>
                        <th> Quantity </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                @foreach($reqList as $b)
                    @if($b->requestID == Session::get('requestID'))
                    <tr>
                        <td>{{$b->itemID}}</td>
                        <td>{{$b->itemName}}</td>
                        <center><td>{{$b->quantityRequested}}</td></center>
                        <td>
                        <form action="" method= "POST">
                            @csrf
                            @method('delete')
                            <input type="hidden" name="id" value = {{$b->itemID}}>
                            <button  class= "btn btn-primary">Cancel</button>
                        </form>
                        </td>
                    </tr> 
                    @endif  
                    @endforeach
                </tbody>
            </table>
     
            <button onclick="window.location='{{ url('/request_list') }}'"  class= "btn btn-primary"> Return to Request List page </button>
        </div>
       
@endsection

