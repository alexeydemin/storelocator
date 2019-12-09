<?php namespace ADemin\StoreLocator\Updates;

use Illuminate\Support\Facades\Config;
use Seeder;
use ADemin\StoreLocator\Models\Settings;

class SeedSettingsTable extends Seeder
{
    public function run()
    {
        Settings::set([
            'api_key' => Config::get('ademin.storelocator::googleMapsKey', null)
        ]);
    }
}
