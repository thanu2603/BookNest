import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'
import axios from "axios"
import toast from 'react-hot-toast'
import { useLocation,useNavigate } from 'react-router-dom'
function Signup() {
    const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit =async (data) => {
        const userInfo={firstname:data.firstname,email:data.email,password:data.password}
        await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((error) => {
        if (error.response) {
          console.log(error);
          toast.error("Error: " + error.response.data.message);
        }
      });
    }
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

                                <h3 className="font-bold text-lg text-black">SignUp</h3>
                                <div className='mt-4 space-y-2'>
                                    <span className='text-black'>First Name</span>
                                    <br />
                                    <input type='type'
                                        placeholder='Enter your First Name'
                                        className='w-80 px-3 py-1 border rounded-md outline-none text-black'
                                        {...register("firstname", { required: true })}
                                    />
                                    <br />
                                    {errors.firstname && (
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
                                        className='w-80 px-3 py-1 border rounded-md outline-none text-black'
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
                                    <span className='text-black'>Password</span>
                                    <br />
                                    <input type='password'
                                        placeholder='Enter your Password'
                                        className='w-80 px-3 py-1 border rounded-md outline-none text-black'
                                        {...register("password", { required: true })}
                                    />
                                    <br />
                                    {errors.password && (
                                        <span className="text-sm text-red-500">
                                            This field is required
                                        </span>
                                    )}
                                </div>
                                <div className="flex justify-around mt-6">
                                    <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                                        SignUp
                                    </button>
                                    <p className="text-l text-black">
                                        Have account?{" "}
                                        <button
                                            className="underline text-blue-500 cursor-pointer"
                                            onClick={() =>
                                                document.getElementById("my_modal_3").showModal()
                                            }
                                        >
                                            Login
                                        </button>{" "}
                                        <Login />
                                        <Login />
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
