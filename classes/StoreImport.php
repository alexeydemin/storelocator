<?php

namespace ADemin\StoreLocator\Classes;

use ADemin\StoreLocator\Models\Store;
use Backend\Models\ImportModel;

class StoreImport extends ImportModel
{
    public $rules = [];

    public function importData($results, $sessionKey = null)
    {
        foreach ($results as $row => $data) {
            try {
                $store = Store::findOrNew($data['id']);
                if (! $store->id) {
                    //Create
                    $gc = new GeoCoder($data);
                    $store->fill($data);
                    $store->website = str_start($data['website'], 'http://');
                    $store->lat = $gc->lat;
                    $store->lng = $gc->lng;
                    $store->address = $gc->formattedAddress;
                    $store->save();
                    $this->logCreated();
                } else {
                    //Update
                    if ($data['address_1'] != $store->address_1
                        || $data['city'] != $store->city
                        || $data['state'] != $store->state
                        || $data['country'] != $store->country
                    ) {
                        $gc = new GeoCoder($data);
                        $store->lat = $gc->lat;
                        $store->lng = $gc->lng;
                        $store->address = $gc->formattedAddress;
                    }
                    $store->fill($data);
                    $store->website = str_start($data['website'], 'http://');
                    $store->save();
                    $this->logUpdated();
                }
            }
            catch (\Exception $ex) {
                $this->logError($row, $ex->getMessage());
            }
        }
    }
}

