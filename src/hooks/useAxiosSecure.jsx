import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) return;

    const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
      if (auth.user?.accessToken) {
        config.headers.Authorization = `Bearer ${auth.user.accessToken}`;
      }
      return config;
    });

    const resInterceptor = axiosSecure.interceptors.response.use(
      (res) => res,
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          auth.signOutUser().then(() => navigate("/login"));
        }
        return Promise.reject(error);
      },
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [auth, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
