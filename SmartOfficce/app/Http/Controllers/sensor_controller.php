<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class sensor_controller extends Controller
{
    public function GetSensors(Request $request){
        if ($request->has('userId')){
            $userId = $request->input('userId');
            $result = DB::SELECT("SELECT id, deviceName, value, description, areaId FROM sensors where userId = ?", [($userId)]);
            $data = array();
            // return response()->json(['message'=>'Data received'], 200);
            foreach ($result as $row)
            {
                array_push($data, $row);
            }

            echo json_encode($data);
        }else {

            return response()->json(['message'=>'no data'], 400);
        }

    }

    public function AddNewSensor(Request $request){
        if ($request->has('id')){
            $id = $request->input('id');
            $deviceName = $request->input('deviceName');
            $value = $request->input('value');
            $description = $request->input('description');
            $userId = $request->input('userId');
            $areaId = "none";
            DB::INSERT('INSERT into sensors (id, deviceName, value, description, userId, areaId ) VALUES (?,?,?,?,?,?) ', [ $id ,$deviceName , $value, $description, $userId, $areaId ] );

            //return response()->json(['message'=>'Data received'], 200);
        }else {

            //return response()->json(['message'=>'no data'], 400);
        }

    }


    public function UpdateSensor(Request $request){
        if ($request->has('id')){
            $id = $request->input('id');
            $deviceName = $request->input('deviceName');
            $description = $request->input('description');
            DB::UPDATE('UPDATE sensors SET deviceName = ?, description =?  where id= ? ', [$deviceName , $description , $id] );

            return response()->json(['message'=>'Data received'], 200);
        }else {

            return response()->json(['message'=>'no data'], 400);
        }

    }
    public function UpdateSensorArea(Request $request){
        if ($request->has('id')){
            $id = $request->input('id');
            $areaId = $request->input('areaId');
            DB::UPDATE('UPDATE sensors SET areaId = ?  where id= ? ', [$areaId  , $id] );

            return response()->json(['message'=>'Data received'], 200);
        }else {

            return response()->json(['message'=>'no data'], 400);
        }

    }

    public function DeleteSensor(Request $request){
        if ($request->has('id')){
            $id = $request->input('id');
            DB::DELETE('DELETE from sensors where id= ? ', [$id] );

            return response()->json(['message'=>'Data received'], 200);
        }else {

            return response()->json(['message'=>'no data'], 400);
        }

    }


}
