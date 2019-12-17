<?php namespace ADemin\StoreLocator\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class UpdatesStoresAddIsEnabled extends Migration
{
    public function up()
    {
        Schema::table('ademin_storelocator_stores', function ($table) {
            $table->boolean('is_enabled')->after('description')->default(true);
        });
    }

    public function down()
    {
        Schema::table('ademin_storelocator_stores', function ($table) {
            $table->dropColumn('is_enabled');
        });
    }
}
