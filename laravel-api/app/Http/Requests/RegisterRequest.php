<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RegisterRequest extends FormRequest
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
            'name' => ['required' , 'string' , 'max:200'],
            'email' => ['required' , 'string' , 'email' , 'max:200' , 'unique:users'],
            'role' => ['required' , 'string' , Rule::in(['Owner' , 'Customer'])],
            'password' => ['required' , 'string' , 'min:6' , 'confirmed'],
        ];
    }
}
