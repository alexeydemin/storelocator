<?php

namespace ADemin\StoreLocator\Models;

use Illuminate\Support\Facades\DB;
use October\Rain\Database\Model;
use October\Rain\Database\Traits\Validation;

class Store extends Model
{
    use Validation;

    public $table = 'ademin_storelocator_stores';

    protected $guarded = ['*'];

    protected $fillable = [
        'address_1',
        'address_2',
        'city',
        'state',
        'country',
        'hours',
        'name',
        'phone',
        'website',
        'zip',
        'description',
        'lat',
        'lng',
    ];

    public $rules = [
        'name' => 'required',
    ];

    public $hasOne = [];
    public $hasMany = [];
    public $belongsTo = [];
    public $belongsToMany = [];
    public $morphTo = [];
    public $morphOne = [];
    public $morphMany = [];
    public $attachOne = [
        'photo' => 'System\Models\File'
    ];
    public $attachMany = [];

    public function scopeDistance($query, $lat, $long, $distance)
    {
        return $query
            ->with('photo')
            ->having('distance', '<', $distance)
            ->select(DB::raw(
                    "*, (3959 * ACOS(COS(RADIANS($lat))
                    * COS(RADIANS(lat))
                    * COS(RADIANS($long) - RADIANS(lng))
                    + SIN(RADIANS($lat))
                    * SIN(RADIANS(lat)))) AS distance"
                )
            )->orderBy('distance', 'asc');
    }

    public function scopeWithinBounds($query, $a, $b, $c, $d)
    {
        return $query
            ->with('photo')
            ->whereBetween('lat', [min($a, $c), max($a, $c)])
            ->whereBetween('lng', [min($b, $d), max($b, $d)]);
    }

    public function scopeActive($query)
    {
        return $query->where('is_enabled', true);
    }
}
