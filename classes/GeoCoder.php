<?php

namespace ADemin\StoreLocator\Classes;

use ADemin\StoreLocator\Models\Settings;

class GeoCoder
{
    public $apiKey;
    public $address;
    public $lat;
    public $lng;
    public $formattedAddress;

    public function __construct($addressParts)
    {
        $this->apiKey = Settings::get('api_key');
        $this->buildAddress($addressParts);
        $this->geocode();
    }

    public function buildAddress($addressParts)
    {
        $this->address = implode(
            ',', [
                $addressParts['address_1'],
                $addressParts['city'],
                $addressParts['state'],
                $addressParts['country'],
            ]
        );
    }

    public function geocode()
    {
        $url = 'https://maps.google.com/maps/api/geocode/json?' .
            http_build_query(
                [
                    'address' => urldecode($this->address),
                    'key' => $this->apiKey
                ]
            );
        $resp = json_decode(file_get_contents($url), true);
        if ($resp['status'] != 'OK') {
            return false;
        }
        $this->lat = $resp['results'][0]['geometry']['location']['lat'];
        $this->lng = $resp['results'][0]['geometry']['location']['lng'];
        $this->formattedAddress = $resp['results'][0]['formatted_address'];

        return true;
    }
}
