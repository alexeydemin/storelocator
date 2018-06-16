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
    public $attachOne = [];
    public $attachMany = [];

    public function scopeDistance($query, $lat, $long, $distance)
    {
        return $query->having('distance', '<', $distance)
            ->select(DB::raw(
                    "*, (3959 * ACOS(COS(RADIANS($lat))
                    * COS(RADIANS(lat))
                    * COS(RADIANS($long) - RADIANS(lng))
                    + SIN(RADIANS($lat))
                    * SIN(RADIANS(lat)))) AS distance"
                )
            )->orderBy('distance', 'asc')
            ->get();
    }

    public function scopeWithinBounds($query, $a, $b, $c, $d)
    {
        return $query->where(function ($q) use ($a, $c) {
                $q->whereRaw("$a < $c")->whereBetween('lat', [$a, $c])
                    ->orWhere(function ($q2) use ($a, $c) {
                        $q2->whereRaw("$a > $c")->whereBetween('lat', [$c, $a]);
                    });
        })
            ->where(function ($q) use ($b, $d) {
                $q->whereRaw("$b < $d")->whereBetween('lng', [$b, $d])
                    ->orWhere(function ($q2) use ($b, $d) {
                        $q2->whereRaw("$b > $d")->whereBetween('lat', [$d, $b]);
                    });
            })
            ->get();
    }
}
