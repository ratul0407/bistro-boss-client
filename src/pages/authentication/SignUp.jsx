import { Link } from "react-router-dom";
import authenticationImg from "../../assets/others/authentication2.png";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero bg-authentication-bg shadow-2xl w-11/12 mx-auto py-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          className="max-w-[648px] max-h-[455px]"
          src={authenticationImg}
          alt=""
        />
        <div className="card w-full max-w-sm shrink-0 ">
          <h3 className="text-4xl font-bold text-center">Sign Up</h3>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Type Here"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type Here"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn bg-yellow-700/80 text-white hover:bg-yellow-600/80 duration-300 transition-all"
                value="Sign In"
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
  );
}

export default SignUp;
