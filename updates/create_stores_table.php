<?php namespace ADemin\StoreLocator\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateStoresTable extends Migration
{
    public function up()
    {
        Schema::create('ademin_storelocator_stores', function(Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name');
            $table->string('address')->nullable();
            $table->string('address_1')->nullable();
            $table->string('address_2')->nullable();
            $table->string('city')->nullable();
            $table->string('state')->nullable();
            $table->string('zip')->nullable();
            $table->string('country')->nullable();
            $table->string('phone')->nullable();
            $table->string('website')->nullable();
            $table->text('hours')->nullable();
            $table->string('lat')->nullable();
            $table->string('lng')->nullable();
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ademin_storelocator_stores');
    }
}
