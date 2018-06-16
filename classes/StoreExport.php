<?php

namespace ADemin\StoreLocator\Classes;

use ADemin\StoreLocator\Models\Store;
use Backend\Models\ExportModel;

class StoreExport extends ExportModel
{
    public function exportData($columns, $sessionKey = null)
    {
        return Store::all()
            ->each(function ($store) use ($columns) {
                $store->addVisible($columns);
            })
            ->toArray();
    }
}

