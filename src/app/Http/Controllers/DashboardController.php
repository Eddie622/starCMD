<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard', [
            'stats' => [
                'cpu' => '15%',
                'memory' => '2GB',
                'uptime' => '5 days'
            ]
        ]);
    }
}
