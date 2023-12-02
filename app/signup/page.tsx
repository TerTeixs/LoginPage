"use client";

import Link from 'next/link'
import { useState } from 'react'

const signUpPage = () => {
    const [signUpEmail, setSignUpEmail] = useState('')
    const [signUpPassword, setSignUpPassword] = useState('')
    const [signUpConfirmPassword, setConfirmSignUpPassword] = useState('')
    const [signUpEmailError, setSignUpEmailError] = useState('')
    const [signUpPasswordError, setSignUpPasswordError] = useState('')
    const [signUpConfirmPasswordError, setSignUpComfirmPasswordError] = useState('')

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
  
    const handleEmailChange = (e) => {
      setSignUpEmail(e.target.value);
    }
  
    const handlePasswordChange = (e) => {
      setSignUpPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
      setConfirmSignUpPassword(e.target.value);
    }
    
    const validateSignup = (e) => {

      e.preventDefault()
      const isValidPassword = passwordRegex.test(signUpPassword)

      if(signUpEmail === "" && signUpPassword === ""){
        setSignUpEmailError('*Invalid email*')
        setSignUpPasswordError("*Invalid password*")
        setSignUpComfirmPasswordError("*Invalid confirm password*")
      } else if (signUpPassword === ""){
          setSignUpPasswordError("*Invalid password*")
          setSignUpEmailError("")
          setSignUpComfirmPasswordError("*Invalid confirm password*")
      } else if (isValidPassword === false){
          setSignUpEmailError('*Invalid email*')
          setSignUpPasswordError("*Invalid password*")
          setSignUpComfirmPasswordError("*Invalid confirm password*")
      } else if (signUpEmail === ""){
          setSignUpEmailError('*Invalid email*')
          setSignUpPasswordError("")
          setSignUpComfirmPasswordError("*Invalid confirm password*")
      } else if (signUpPassword !== signUpConfirmPassword){
          setSignUpPasswordError("")
          setSignUpEmailError("")
          setSignUpComfirmPasswordError("*Invalid confirm password*") 
      } else if (isValidPassword && signUpPassword === signUpConfirmPassword){
        return console.log({Email: signUpEmail, Password: signUpConfirmPassword})
      }
    }
  
    return (
      <body>
        <main className="max-w-sm mx-auto">
          <div className="relative flex flex-col items-center justify-center 
          min-h-screen w-24 min-w-full overflow-hidden">
          <h1 className="text-center text-xl">Sign Up</h1>
          <br></br>
          <form name="form" onSubmit={validateSignup}
            className="min-w-sm mx-auto w-24 min-w-full">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium">
                Email 
                <l className="text-rose-600">*</l>
                <br></br>
                <input
                type="email"
                placeholder="Email"
                value={signUpEmail}
                onChange={handleEmailChange}
                className="bg-gray-50 border border-gray-300 text-gray-900
                text-sm rounded-lg  block w-full p-2.5"
                />
                <p className="text-rose-600">{signUpEmailError}</p>
              </label>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium">
                Password
                  <l className="text-rose-600">*</l>
                  <br></br>
                  <input type="password" 
                  placeholder="Password"
                  value={signUpPassword}
                  onChange={handlePasswordChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900
                  text-sm rounded-lg  block w-full p-2.5"
                  />
                <p className="text-rose-600">{signUpPasswordError}</p>
              </label>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium">
                Confirm Password
                <l className="text-rose-600">*</l>
                <br></br>
                <input type="password" 
                  placeholder="Confirm Password"
                  value={signUpConfirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900
                  text-sm rounded-lg  block w-full p-2.5"
                />
                <p className="text-rose-600">{signUpConfirmPasswordError}</p>
              </label>
            </div>
            <div className="flex items-start mb-5">
              <button type="submit" className="text-white bg-green-800 hover:bg-green-800
               focus:outline-none focus:ring-4 focus:ring-green-300 
               font-medium rounded-full text-sm px-5 py-2.5 text-center 
               me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-700
                dark:focus:ring-green-800 min-w-full">
                Sign up
              </button>
            </div>
          </form>
          <Link href="../" className="text-green-500">
            <button>Already have an account?</button>
          </Link>
          </div>
        </main>
      </body>
  )
}

export default signUpPage