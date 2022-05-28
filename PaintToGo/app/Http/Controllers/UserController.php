<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\User;

class UserController extends Controller
{
    public function viewUsers() {
        $users =  DB::table('users')->get();
        if( $users ){
            return response()->json([
                'users' => $users
            ]);
        }  
        else{
            return("Query error");
        }
    }

    public function newUser(Request $request) {
        $user = new User;
        $user->firstName = $request->input('firstName');
        $user->lastName = $request->input('lastName');
        $user->user_contact = $request->input('user_contact');
        $user->email_add = $request->input('email_add');
        $user->level_name = $request->input('level_name');
        $user->password = $request->input('password');
        $user->save();

        if( $user ){
            return response()->json([
                'response' => 1
            ]);
        }  
        else{
            return("Query error");
        }
    }

    public function editUser(Request $request) {
        $user = User::find($request->input('user_id'));
        $user->firstName = $request->input('firstName');
        $user->lastName = $request->input('lastName');
        $user->user_contact = $request->input('user_contact');
        $user->email_add = $request->input('email_add');
        $user->level_name = $request->input('level_name');
        $user->password = $request->input('password');
        $user->save();
        
        if( $user ){
            return response()->json([
                'response' => 1
            ]);
        }  
        else{
            return("Query error");
        }
    }

    public function deleteUser(Request $request) {
        $user = User::find($request->input('user_id'));
       
        if( $user ){
            $user->delete();
            return response()->json([
                'response' => 1
            ]);
        }  
        else{
            return("Query error");
        }
    }

    public function viewEmployees(Request $request) {
        $employees = DB::table('users')
                ->orWhere('level_name', '=', 'Admin')
                ->orWhere('level_name', '=', 'Manager')
                ->get();
       
        if( $employees ){
            return response()->json([
                'employees' => $employees,
                'response' => 1
            ]);
        }  
        else{
            return("Query error");
        }
    }

}
