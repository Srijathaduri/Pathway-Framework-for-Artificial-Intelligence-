import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function Contact() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false); // Manage button state

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const messageInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    setIsSubmitting(true); // Disable the button

    try {
      const response = await axios.post("https://api.web3forms.com/submit", {
        access_key: "ba4f693f-1f0d-417a-8eaa-de9def74846a",
        ...messageInfo,
      });

      if (response.data.success) {
        toast.success("Message sent successfully!");
        reset(); // Clear form fields
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error(
        "An error occurred: " +
          (error.response?.data?.message || "Unable to submit the form.")
      );
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[700px] p-5">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Close button */}
              <button
                type="button"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none text-white"
                onClick={() => navigate("/")}
              >
                ✕
              </button>
              <h3 className="font-bold text-lg text-white">Contact Us</h3>

              {/* Name Field */}
              <div className="mt-4 space-y-2">
                <label className="text-white">Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-68 md:w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: "Name is required" })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500 mt-7">
                    *{errors.name.message}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="mt-4 space-y-2">
                <label className="text-white">Email</label>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-68 md:w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500 mt-7">
                    *{errors.email.message}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className="mt-4 space-y-2">
                <label className="text-white">Message</label>
                <br />
                <textarea
                  placeholder="Enter your message"
                  className="w-68 md:w-80 px-3 py-1 border rounded-md outline-none"
                  rows="4"
                  {...register("message", { required: "Message is required" })}
                />
                <br />
                {errors.message && (
                  <span className="text-sm text-red-500 mt-7">
                    *{errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className={`bg-white text-[#011f4b] font-bold px-3 py-1 rounded-md hover:bg-slate-800 duration-300 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
