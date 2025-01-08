import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
function useAxiosSecure() {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        logOut();
        navigate("/login");
      }
      console.log("status code error", error);
      return Promise.reject(error);
    }
  );
  return axiosSecure;
}

export default useAxiosSecure;
