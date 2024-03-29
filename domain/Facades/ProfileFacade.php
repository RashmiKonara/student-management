<?php

namespace Domain\Facades;

use Illuminate\Support\Facades\Facade;
use Domain\Services\ProfileService;

class ProfileFacade extends Facade{
    protected static function getFacadeAccessor()
    {
        return ProfileService::class;
    }
}
