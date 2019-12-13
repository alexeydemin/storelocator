<?php namespace ADemin\StoreLocator\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class UpdatesStoresChangeLatLng extends Migration
{
    public function up()
    {
        Schema::table('ademin_storelocator_stores', function ($table) {
            $table->decimal('lat', 11, 7)->change();
            $table->decimal('lng', 11, 7)->change();
        });
    }

    public function down()
    {
        Schema::table('ademin_storelocator_stores', function ($table) {
            $table->string('lat')->change();
            $table->string('lng')->change();
        });
    }
}
