<?php namespace ADemin\StoreLocator\Components;

use Cms\Classes\ComponentBase;

class StoreLocator extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name'        => 'Store Locator Map Component',
            'description' => 'Google Maps with marked stores'
        ];
    }

    public function defineProperties()
    {
        return [];
    }

    public function onRun()
    {
        $this->addCss('/plugins/ademin/storelocator/assets/css/store-locator.css');
    }
}
