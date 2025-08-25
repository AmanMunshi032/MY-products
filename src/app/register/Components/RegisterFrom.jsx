'use client';
import { registeruser } from '@/app/actions/auth/registerUser';
import React from 'react'
export default function RegisterFrom() {
    const heandelsubmit = async (e)=>{
         e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const Phato = form.phato.value;
        const email = form.email.value;
        const password = form.password.value;
        toast("Submitting ....");
        await registeruser({name,Phato ,password,email})
    }
  return (
    <div>
       <form  onSubmit={heandelsubmit} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input bg-white"
              placeholder="Name"
            />
            <label className="label">Photo url</label>
            <input
              type="text"
              name="phato"
              className="input bg-white"
              placeholder="photo url"
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input bg-white"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input bg-white"
              placeholder="Password"
            />
            <button type="submit" className="btn btn-primary mt-4">
              Register
            </button>
            {/* <div>
              <div className="divider">OR</div>
              <button
               
                className="btn w-full bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div> */}
          </form>
    </div>
  )
}
