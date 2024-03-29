<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'image' => ['nullable', 'image', 'max:1024'],
            //status can have only two values: active or inactive
            'status' => ['required', 'string', 'in:active,inactive'],
            //age only can be an integer and between 1 and 25
            'age' => ['required', 'integer', 'min:1', 'max:25'],
        ];
    }
}
