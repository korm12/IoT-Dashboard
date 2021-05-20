<?php

use App\Http\Controllers\areas_controller;
use App\Http\Controllers\device_controller;
use App\Http\Controllers\sensor_controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/AddNewDevice', [device_controller::class, 'AddNewDevice']);
Route::post('/UpdateDevice', [device_controller::class, 'UpdateDevice']);
Route::post('/UpdateDeviceStat', [device_controller::class, 'UpdateDeviceStat']);
Route::post('/UpdateDeviceArea', [device_controller::class, 'UpdateDeviceArea']);
Route::post('/DeleteDevice', [device_controller::class, 'DeleteDevice']);


Route::post('/AddNewSensor', [sensor_controller::class, 'AddNewSensor']);
Route::post('/UpdateSensor', [sensor_controller::class, 'UpdateSensor']);
Route::post('/DeleteSensor', [sensor_controller::class, 'DeleteSensor']);
Route::post('/UpdateSensorArea', [sensor_controller::class, 'UpdateSensorArea']);

Route::post('/AddNewArea', [areas_controller::class, 'AddNewArea']);
Route::post('/DeleteArea', [areas_controller::class, 'DeleteArea']);
Route::post('/UpdateArea', [areas_controller::class, 'UpdateArea']);
