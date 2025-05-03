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
                <div className="text-center grid grid-cols-2 mb-4 gap-2 p-2 rounded-md bg-gray-100">
                    <h1 className={`text-xl cursor-pointer py-5 rounded-md ${form === formType.LOGIN ? 'bg-red-200 text-white' : 'bg-white text-black'}`} onClick={() => setForm(formType.LOGIN)}>Log in</h1>
                    <h1 className={`text-xl cursor-pointer py-5 rounded-md ${form === formType.SIGNUP ? 'bg-blue-200 text-white' : 'bg-white text-black'}`} onClick={() => setForm(formType.SIGNUP)}>Sign up</h1>
                </div>
                <input type="text" placeholder="Email" className="p-5 rounded-md border border-gray-400" />
                <input type="password" placeholder="Password" className="p-5 rounded-md border border-gray-400" />
                {form === formType.SIGNUP && (
                     <input type="password" placeholder="Confirm Password" className="p-5 rounded-md border border-gray-400" />
                )}
                <button className="bg-blue-200 p-5 rounded-md text-white text-xl" type="submit">
                    {form === formType.LOGIN ? (
                        <>Log in</>
                    ):(
                        <>Sign up</>
                    )}
                </button>
                {form === formType.LOGIN && (
                     <span className="text-center">Forgot Password?</span>
                )}
            </form>
        </div>
    )
}

export default SignIn
