<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class sensor_controller extends Controller
{
    public function GetSensors(Request $request){
        if ($request->has('userId')){
            $userId = $request->input('userId');
            $result = DB::SELECT("SELECT * FROM sensors where userId = ?", [($userId)]);
            $data = array();
            // return response()->json(['message'=>'Data received'], 200);
            foreach ($result as $row)
            {
                array_push($data, $row);
            }
            $data2 = array();
            for($i = 0; $i < count($data); $i++){
                $result2 = DB::SELECT("SELECT id,deviceId,value,time(Date) as time FROM sensorlogs where deviceId = ? order by id DESC limit 6", [($data[$i]->id)]);

                foreach ($result2 as $row2)
                {
                    array_push($data2, $row2);
                }
            }
            $sensorlogs = array();
            for($i = 0; $i < count($data); $i++){
                for($x = count($data2) -1; $x >= 0 ; $x--){
                    if($data[$i]->id == $data2[$x]->deviceId){
                        array_push($sensorlogs, $data2[$x]);
                    }
                }
                $data[$i]->sensorlogs= $sensorlogs;
                $sensorlogs=[];
            }
            echo json_encode($data);
            // echo json_encode($data2);
        }else {

            return response()->json(['message'=>'no data'], 400);
        }

    }

    public function GetSensorsVal(Request $request){
        if ($request->has('id')){
            $id = $request->input('id');
            $result = DB::SELECT("SELECT value FROM sensors where id = ?", [($id)]);
            $data = array();
            // return response()->json(['message'=>'Data received'], 200);
            foreach ($result as $row)
            {
                array_push($data, $row);
            }

            echo ($data[0]->value);
        }else {

            return response()->json(['message'=>'no data'], 400);
        }

    }

    public function GetUnallocatedSen(Request $request){
        if ($request->has('userId')){
            $userId = $request->input('userId');
            $result = DB::SELECT("SELECT count(id) as unallocatedsen FROM sensors where userId = ? and areaId ='none' ", [($userId)]);
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

    public function UnallocatedSen(Request $request){
        if ($request->has('userId')){
            $userId = $request->input('userId');
            $result = DB::SELECT("SELECT id, deviceName FROM sensors where userId = ? and areaId ='none' ", [($userId)]);
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
    public function GetSensorsNum(Request $request){
        if ($request->has('userId')){
            $userId = $request->input('userId');
            $result = DB::SELECT("SELECT COUNT(id) AS totalSensors FROM sensors where userId = ?", [($userId)]);
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

    public function AddAveVal(Request $request){
        if ($request->has('value')){
            $value = $request->input('value');
            $deviceId = $request->input('deviceId');
            DB::INSERT('INSERT into sensorlogs (`value`, deviceId ) VALUES (?,?) ', [ $value ,$deviceId] );

            return response()->json(['message'=>'Data received'], 200);
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

    public function UpdateSensorValue(Request $request){
        if ($request->has('id')){
            $id = $request->input('id');
            $value = $request->input('value');
            DB::UPDATE('UPDATE sensors SET value = ? where id= ? ', [$value  , $id] );

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
