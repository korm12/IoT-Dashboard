<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRules extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rules', function (Blueprint $table) {
            $table->bigIncrements('ruleId');
            $table->string('userId');
            $table->string('isActive');
            $table->string('deviceId');
            $table->integer('isMinMax');
            $table->string('sensorId');
            $table->integer('minVal');
            $table->integer('maxVal');
            $table->integer('isTimer');
            $table->time('from');
            $table->time('to');
            $table->timestamp('Date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rules');
    }
}
