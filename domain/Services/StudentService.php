<?php

namespace Domain\Services;

use App\Models\Student;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

use App\Http\Resources\StudentResource;

class StudentService
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Student/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentRequest $request)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        if ($image) {
            $data['image'] = $image->store('students/' . Str::random(), 'public');
        }
        Student::create($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        return inertia('Student/Show', [
            'student' => new StudentResource($student),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        return inertia('Student/Edit', [
            'student' => new StudentResource($student),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentRequest $request, Student $student)
    {
        $data = $request->validated();
        $image = $data['image'] ?? null;
        if ($image) {
            if ($student->image) {
                Storage::disk('public')->deleteDirectory(dirname($student->image));
            }
            $data['image'] = $image->store('students/' . Str::random(), 'public');
        }else{
            unset($data['image']);
        }

        $student->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $name = $student->name;
        $student->delete();
        if ($student->image) {
            Storage::disk('public')->deleteDirectory(dirname($student->image));
        }
    }
}
