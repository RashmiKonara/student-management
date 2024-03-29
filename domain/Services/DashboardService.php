<?php

namespace Domain\Services;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Http\Resources\StudentResource;

class DashboardService
{
    public function index()
    {
        $quary = Student::query();
        $students = $quary->paginate(10)->onEachSide(1);
        return inertia('Dashboard',[
            'students' => StudentResource::collection($students),
        ]);
    }
}
