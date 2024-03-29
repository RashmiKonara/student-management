<?php

namespace Domain\Facades;

use Illuminate\Support\Facades\Facade;
use Domain\Services\StudentService;

class StudentFacade extends Facade{
    protected static function getFacadeAccessor()
    {
        return StudentService::class;
    }
}
