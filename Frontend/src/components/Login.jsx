import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
  
    console.log("User Info: ", userInfo); // Debugging purpose
  
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {  // Successful login (status 200)
          toast.success('Loggedin in Successfully');
          document.getElementById("my_modal_3").close();
          setTimeout(()=>{
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));

          },1000);

        }

      })
      .catch((error) => {
        if (error.response) {
          console.log(error); // Logs the entire error object
          toast.error("Error: " + error.response.data.message);
          setTimeout(()=>{},1000);
        }
      });
  };
  
  const handleCloseModal = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) modal.close(); // Close the modal
    navigate("/"); // Navigate to the Home page
  };

  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Close modal button */}
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none text-white"
                onClick={()=>document.getElementById("my_modal_3").close()}
              >
                ✕
              </button>

              <h3 className="font-bold text-lg text-white">Login</h3>

              {/* Email field */}
              <div className="mt-4 space-y-2">
                <span className="text-white">Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-68 md:w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br/>
                {errors.email && <span className="text-sm text-red-500 mt-7">*This field is required</span>}
              </div>

              {/* Password field */}
              <div className="mt-4 space-y-2">
                <span className="text-white">Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-68 md:w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br/>
                {errors.password && <span className="text-sm text-red-500  mt-7">*This field is required</span>}
              </div>

              {/* Button */}
              <div className="flex justify-between mt-4">
                <button className="bg-white text-[#011f4b] font-bold px-3 py-1 rounded-md hover:bg-slate-800 duration-300">
                  Login
                </button>
                <p className="text-white">
                  Not registered?{" "}
                  <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                    Signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
