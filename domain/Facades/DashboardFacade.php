<?php

namespace Domain\Facades;

use Illuminate\Support\Facades\Facade;
use Domain\Services\DashboardService;

class DashboardFacade extends Facade{
    protected static function getFacadeAccessor()
    {
        return DashboardService::class;
    }
}
