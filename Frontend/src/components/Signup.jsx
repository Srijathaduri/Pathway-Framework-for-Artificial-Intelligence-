import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from './login';

function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[700px] p-5">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Close button */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none  text-white">✕</Link>
                            <h3 className="font-bold text-lg text-white">Signup</h3>

                            {/* Name Field */}
                            <div className='mt-4 space-y-2'>
                                <span className='text-white'>Name</span>
                                <br/>
                                <input 
                                    type="text" 
                                    placeholder='Enter your fullName' 
                                    className='w-68 md:w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("name", { required: true })} // use lowercase "name"
                                />
                                <br/>
                                {errors.name && <span className="text-sm text-red-500 mt-7">*This field is required</span>}
                            </div>

                            {/* Email Field */}
                            <div className='mt-4 space-y-2'>
                                <span className='text-white'>Email</span>
                                <br/>
                                <input 
                                    type="email" 
                                    placeholder='Enter your email' 
                                    className='w-68 md:w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("email", { required: true })}
                                />
                                <br/>
                                {errors.email && <span className="text-sm text-red-500 mt-7">*This field is required</span>}
                            </div>

                            {/* Password Field */}
                            <div className='mt-4 space-y-2'>
                                <span className='text-white'>Password</span>
                                <br/>
                                <input 
                                    type="password" 
                                    placeholder='Enter your password' 
                                    className='w-68 md:w-80 px-3 py-1 border rounded-md outline-none'
                                    {...register("password", { required: true })}
                                />
                                <br/>
                                {errors.password && <span className="text-sm text-red-500 mt-7">*This field is required</span>}
                            </div>

                            {/* Submit Button */}
                            <div className='flex justify-between mt-4'>
                                <button className='bg-white text-[#011f4b] font-bold px-3 py-1 rounded-md hover:bg-slate-800 duration-300'>
                                    Signup
                                </button>
                                <p className='text-white ml-10'>
                                    Have an account?{' '}
                                    <button
                                        to="/"
                                        className='underline text-blue-500 cursor-pointer'
                                        onClick={() => document.getElementById("my_modal_3").showModal()}
                                    >
                                        Login
                                    </button>
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
