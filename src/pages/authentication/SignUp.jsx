import { Link, useNavigate } from "react-router-dom";
import authenticationImg from "../../assets/others/authentication2.png";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
function SignUp() {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((res) => {
      console.log(res);
      updateUserProfile(data.name, data.photo)
        .then(() => {
          console.log("User Profile Info Updated");
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Sign In successful",
          });
          navigate("/");
        })
        .catch((err) => console.log(err));
    });
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero bg-authentication-bg shadow-2xl w-11/12 mx-auto py-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            className="max-w-[648px] max-h-[455px]"
            src={authenticationImg}
            alt=""
          />
          <div className="card w-full max-w-sm shrink-0 ">
            <h3 className="text-4xl font-bold text-center">Sign Up</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Type Here"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="Enter Photo Url"
                  {...register("photo", { required: true })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Type Here"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    Email is required
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  name="password"
                  className="input input-bordered"
                />
                {errors.password && (
                  <span className="text-red-500 text-xs">
                    Please enter a password
                  </span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-yellow-700/80 text-white hover:bg-yellow-600/80 duration-300 transition-all"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="text-center space-y-4">
              <p className="text-yellow-700/80">
                Alread Registered?{" "}
                <Link to="/login" className="underline">
                  Go To Login
                </Link>
              </p>
              <p>Or sign up with</p>
              <div className="flex items-center justify-center gap-8">
                <FaFacebookF className="icon" />
                <FaGoogle className="icon" />
                <FaGithub className="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
