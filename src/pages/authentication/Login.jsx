import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import signInImg from "../../assets/others/authentication2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
function Login() {
  const { signInUser } = useContext(AuthContext);
  const captchaRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) === true) {
      signInUser(email, password);
      Swal.fire({
        title: "Success",
        icon: "success",
        text: "successfully signed in",
      });
      return navigate(from, { replace: true });
    }
    return alert("false captcha");
  };

  return (
    <div className="hero bg-authentication-bg shadow-2xl w-11/12 mx-auto py-12">
      <div className="hero-content flex-col lg:flex-row">
        <img className="max-w-[648px] max-h-[455px]" src={signInImg} alt="" />
        <div className="card w-full max-w-sm shrink-0 ">
          <h3 className="text-4xl font-bold text-center">Login</h3>
          <form onSubmit={handleSubmit} className="card-body">
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
            <div className="form-control">
              <LoadCanvasTemplate />
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                required
                className="input input-bordered"
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
              New To the site?{" "}
              <Link className="underline" to="/sign-up">
                Go To Sign Up
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

export default Login;
