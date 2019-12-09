<?php namespace ADemin\StoreLocator\Models;

use October\Rain\Database\Model;

class Settings extends Model
{
    public $implement = ['System.Behaviors.SettingsModel'];

    // A unique code
    public $settingsCode = 'ademin_storelocator_settings';

    // Reference to field configuration
    public $settingsFields = 'fields.yaml';
}