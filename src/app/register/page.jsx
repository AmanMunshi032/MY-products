import Link from 'next/link'
import React from 'react'
import RegisterFrom from './Components/RegisterFrom'

export default function Registerpage() {
  return (
    <div className="hero md:min-h-screen md:mt-0 mt-10 ">
      <div className="card  w-full max-w-sm shrink-0 shadow-2xl space-y-5">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Register now!</h1>
           <RegisterFrom></RegisterFrom>

          <p>
            Already Have an Account? please
            <Link
              className=" text-blue-500 underline ml-2 font-bold"
              href="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
