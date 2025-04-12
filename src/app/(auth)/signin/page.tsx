"use client"
import React, { useState } from 'react'

enum formType {
    LOGIN = "login",
    SIGNUP = "signup"
}

const SignIn = () => {
    const [form, setForm] = useState<formType>(formType.LOGIN);

    return (
        <div className="h-[100vh] content-center">
            <form className="grid grid-cols-1 shadow-lg p-15 rounded-md mx-auto gap-5 max-w-[30%]">
                <div className="text-center grid grid-cols-2 mb-4">
                    <h1 className={`text-2xl pointer ${form === formType.LOGIN ? 'text-red-500' : 'text-black'}`} onClick={() => setForm(formType.LOGIN)}>Log in</h1>
                    <h1 className={`text-2xl ${form === formType.SIGNUP ? 'text-red-500' : 'text-black'}`} onClick={() => setForm(formType.SIGNUP)}>Sign up</h1>
                </div>
                <input type="text" placeholder="Email" className="p-5 rounded-md border" />
                <input type="password" placeholder="Password" className="p-5 rounded-md border" />
                <button className="bg-blue-200 p-5 rounded-md" type="submit">Log In</button>
                <span className="text-center">Forgot Password?</span>
            </form>
        </div>
    )
}

export default SignIn
