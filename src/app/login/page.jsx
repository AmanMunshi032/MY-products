import Link from 'next/link'
import React from 'react'
import LoginForm from './Components/LoginForm'

export default function Login() {
  return (
      <div className="hero  md:min-h-screen mt-10  md:mt-0 ">
        <div className="card  w-full max-w-sm shrink-0 shadow-2xl space-y-5">
          <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Login now!</h1>
          <LoginForm></LoginForm>
            <p>New to  this site ? please<Link  className=" text-blue-500 underline ml-2 font-bold" href ='/register'>Regester</Link></p>
          </div>
        </div>
    </div>
  )
}
