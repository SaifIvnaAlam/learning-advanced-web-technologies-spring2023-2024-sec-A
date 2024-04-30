"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const login = () => {
    const [showPassword, setShowPassWord] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
    return (
        <div>
             <div className="hero min-h-screen">
      <div className="hero-content md:w-3/4 lg:w-1/2 flex-col md:flex-row">
      <div className="">
            <img className="w-full rounded-lg" src="" alt="" />
          <img
            className="w-full"
            src="https://i.ibb.co/ZK6xP04/Blue-and-White-Illustrated-Login-Page-Mobile-Prototype.png"
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
          <form  className="card-body">
          <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#C6A921] font-medium text-lg">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    name="email"
                    className="input input-bordered border-[#C6A921]"
                  />
                  
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#C6A921] font-medium text-lg">
                      Password
                    </span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern:
                          /(?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]/,
                      })}
                      placeholder="password"
                      name="password"
                      className="input input-bordered w-full border-[#C6A921]"
                    />
                    
                   
                   
                  </div>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
            <div className="form-control mt-6">
             
             <button className="btn text-white hover:bg-[#C6A921] bg-[#A3CA33]">
                Login
              </button>
             
            </div>
          </form>
          <p className="text-center font-medium text-lg text-[#C6A921]">
            New Applicant ?{" "}
            <Link className="text-red-400" href="/Registration">
              Register
            </Link>
          </p>
          <div className="flex items-center justify-center my-6">
            <button  className="btn  text-[#C6A921]">
              Continue with Google
            </button>
          </div>
        </div>
        
      </div>
    </div>
        </div>
    );
};

export default login;