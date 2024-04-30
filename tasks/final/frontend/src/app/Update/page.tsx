"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const registration = () => {
    const [showPassword, setShowPassWord] = useState(false);
    const {
        register,
        reset,
        formState: { errors },
      } = useForm();
    return (
        <div className="py-20">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:w-3/4 lg:w-full flex-col md:flex-row">
          <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="flex flex-col md:flex-col lg:flex-row gap-1">
                <div className="form-control"></div>
                <div className="form-control w-full">
                  <div className=" text-[#C6A921] font-medium text-lg text-center flex">
                    <div>
                      <h3 className="bg-[#C6A921] text-white text-xl font-semibold p-3 rounded-xl mr-3 flex">
                      </h3>
                    </div>
                    <h1 className=" text-[#C6A921] font-bold text-2xl rounded-xl w-full underline">
                      Registration
                    </h1>
                  </div>
                  <label className="label">
                    <span className="label-text text-[#C6A921] font-medium text-lg">
                      User Name
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("userName", { required: true })}
                    placeholder="User Name"
                    name="userName"
                    className="input input-bordered border-[#C6A921]"
                  />
                  {errors.userName && (
                    <span className="text-red-700">*User Name is required</span>
                  )}
                </div>
              </div>
              <div>
                   <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#C6A921] font-medium text-lg">
                     Contact No.
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("contact", { required: true })}
                    placeholder="Contact no."
                    name="contact"
                    className="input input-bordered border-[#C6A921]"
                  />
                  {errors.contact && (
                    <span className="text-red-700">*contact number is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#C6A921] font-medium text-lg">
                      Image URL
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("image_url", { required: true })}
                    placeholder="Image url"
                    name="image_url"
                    className="input input-bordered border-[#C6A921]"
                  />
                  {errors.image_url && (
                    <span className="text-red-700">*image is required</span>
                  )}
                </div>

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
                  {errors.email && (
                    <span className="text-red-700">*Email is required</span>
                  )}
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
                    {errors.password?.type === "required" && (
                      <span className="text-red-700">
                        *Password is required
                      </span>
                    )}
                    {errors.password?.type === "pattern" && (
                      <span className="text-red-700">
                        *Provie a special Character,one capital letter
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="text-red-700">
                        *Password must be 6 characters
                      </span>
                    )}
                    <span
                      className="absolute top-3 right-2"
                      onClick={() => setShowPassWord(!showPassword)}
                    >
                    </span>
                  </div>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn text-white hover:bg-[#C6A921] bg-[#C6A921]">
                  Update Information
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default registration;