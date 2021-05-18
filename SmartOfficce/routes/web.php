<?php

use App\Http\Controllers\areas_controller;
use App\Http\Controllers\device_controller;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReactController;
use App\Http\Controllers\sensor_controller;
use Laravel\Ui\Presets\React;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/dashboard', function () {
    return view('adminpanel');
});
// Route::get('/{path?}', [ReactController:: class, 'show'], ['as' => 'react'], ['where ' => ['path' => '.*']]);


Route::get('/control', function () {
    return view('adminpanel');
});

Route::get('/configure', function () {
    return view('adminpanel');
});

Route::get('/addDevice', function () {
    return view('adminpanel');
});


Route::get('/myareas', function () {
    return view('adminpanel');
});

Route::get('/manageareas', function () {
    return view('adminpanel');
});

Route::get('/rules', function () {
    return view('adminpanel');
});

Route::get('/', function () {
    return view('loginpage');
});


Route::get('/GetControlDevice', [device_controller::class, 'GetControlDevice']);


Route::get('/GetSensors', [sensor_controller::class, 'GetSensors']);

Route::get('/GetAreas', [areas_controller::class, 'GetAreas']);
