import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
function Contactus() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div>
                <div className="flex h-screen items-center justify-center">
                    <div className=" w-[450px] ">
                        <div className="modal-box">
                            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <Link
                                    to="/"
                                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                >
                                    ✕
                                </Link>

                                <h3 className="font-bold text-lg text-black">Contact Us</h3>
                                <div className='mt-4 space-y-2'>
                                    <span className='text-black'>Name</span>
                                    <br />
                                    <input type='type'
                                        placeholder='Enter your First Name'
                                        className='w-80 px-3 py-1 border rounded-md outline-none'
                                        {...register("name", { required: true })}
                                    />
                                    <br />
                                    {errors.name && (
                                        <span className="text-sm text-red-500">
                                            This field is required
                                        </span>
                                    )}
                                </div>
                                <div className='mt-4 space-y-2'>
                                    <span className='text-black'>Email</span>
                                    <br />
                                    <input type='email'
                                        placeholder='Enter your Email Address'
                                        className='w-80 px-3 py-1 border rounded-md outline-none'
                                        {...register("email", { required: true })}
                                    />
                                    <br />
                                    {errors.email && (
                                        <span className="text-sm text-red-500">
                                            This field is required
                                        </span>
                                    )}
                                </div>
                                <div className='mt-4 space-y-2'>
                                    <span className='text-black'>Message</span>
                                    <br />
                                    <textarea
                                        placeholder='Describe your thoughts...'
                                        className='w-full h-32 px-3 py-2 border rounded-md outline-none resize-none'
                                        {...register("message", { required: true })}
                                    />
                                    <br />
                                    {errors.message && (
                                        <span className="text-sm text-red-500">
                                            This field is required
                                        </span>
                                    )}
                                </div>
                                <div className="flex mt-6">
                                    <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactus;
