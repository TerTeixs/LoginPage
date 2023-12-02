'use client';
import React ,{ useState } from "react"
import Link from 'next/link'
import { useRouter } from "next/navigation"

export default function Home() {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const router = useRouter()

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  }
  
  const validateUser = (e) => {
    
    e.preventDefault()
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/
    const isValidPassword = passwordRegex.test(userPassword)

    if(userEmail === "" && userPassword === ""){
      setEmailError('*Invalid email*')
      setPasswordError("*Invalid password*")
    } else if (userEmail === ""){
      setEmailError('*Invalid email*')
      setPasswordError("")
    } else if (userPassword === "") {
      setPasswordError("*Invalid password*")
      setEmailError("")
    } else if (isValidPassword) {
      router.push("/blank/")
    }
  }

  return (
    <body>
      <main className="max-w-sm mx-auto">
        <div className="relative flex flex-col items-center justify-center 
        min-h-screen overflow-hidden w-24 min-w-full">
          <h1 className="text-center text-xl">Welcome back!</h1>
          <h2 className="text-center">Sign in to your account to continue</h2>
          <br></br>
          <form className="min-w-sm mx-auto w-24 min-w-full" onSubmit={validateUser}>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium">
              Email
              <l className="text-rose-600">*</l>
              <br></br>
              <input
                type="email"
                placeholder="Email"
                value={userEmail}
                onChange={handleEmailChange}
                className="bg-gray-50 border border-gray-300 text-gray-900
                text-sm rounded-lg  block w-full p-2.5"
              />
              <p className="text-rose-600">{emailError}</p>
            </label>
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium">
              Password
                <l className="text-rose-600">*</l>
                <br></br>
                <input type="password" 
                  placeholder="Password"
                  value={userPassword}
                  onChange={handlePasswordChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900
                  text-sm rounded-lg  block w-full p-2.5"
              />
              <p className="text-rose-600">{passwordError}</p>
            </label>
          </div>
          <div className="mb-5">
            <button type="submit" className="text-white bg-green-800 hover:bg-green-800
               focus:outline-none focus:ring-4 focus:ring-green-300 
               font-medium rounded-full text-sm px-5 py-2.5 text-center 
               me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-700
                dark:focus:ring-green-800 min-w-full">
              Sign in
            </button>
          </div>
        </form>
        <Link href="/signup">
          <button className="text-green-500">New User? Sign up!</button>
        </Link>
        </div>
      </main>
    </body>
  )
}