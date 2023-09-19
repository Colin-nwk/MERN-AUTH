import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(e.value);
  };
  return (
    <>
      {" "}
      <main className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600 space-y-5 bg-blue-100 rounded-md p-10">
          <div className="text-center pb-8">
            <div className="mt-5">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                REGISTER
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
              <label className="font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              Sign in
            </button>
          </form>

          <div className="mt-10">
            <p className="text-center">
              Already have an account?
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500 inline-flex"
              >
                Log In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
