<?php

namespace ADemin\StoreLocator;

use ADemin\StoreLocator\Models\Settings;
use ADemin\StoreLocator\Models\Store;
use Illuminate\Support\Facades\Route;

Route::get('/api/stores.json', function () {
    return get('lat')
        ? Store::active()->distance(get('lat'), get('lng'), get('radius'))->get()
        : Store::active()->withinBounds( get('a'), get('b'), get('c'), get('d'))->get();
});

Route::get('/map', function () {
    $html = file_get_contents('plugins/ademin/storelocator/components/storelocator/map.htm');
    $apiKey = Settings::get('api_key');
    return str_replace('%api_key%', $apiKey, $html) ;
});