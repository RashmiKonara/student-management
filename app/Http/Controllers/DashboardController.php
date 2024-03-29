<?php

namespace App\Http\Controllers;

use Domain\Facades\DashboardFacade;

class DashboardController extends Controller
{

    public function index()
    {
        return DashboardFacade::index();
    }
}
