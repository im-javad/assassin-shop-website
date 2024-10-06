<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
            'email' => ['required' , 'string' , 'email' , 'max:200' , 'exists:users,email'],
            'password' => ['required' , 'string' , 'min:6'],
        ];
    }

    public function messages()
    {
        return [
            'email.exists' => 'ایمیل وارد شده در سیستم موجود نیست'
        ];
    }
}
