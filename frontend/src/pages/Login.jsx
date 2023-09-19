import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";

import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err?.error);
      // console.log(err?.data?.message || err?.error);
    }
  };
  return (
    <>
      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600 space-y-5 bg-blue-100 rounded-md p-10">
          <div className="text-center pb-8">
            <div className="mt-5">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                LOGIN
              </h3>
            </div>
          </div>
          <form onSubmit={submitHandler} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-800 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium">Password</label>
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-800 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>

            <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Sign Up
            </button>
          </form>
          <div className="mt-10">
            <p className="text-center">
              Dont have an account?
              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500 inline-flex"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
