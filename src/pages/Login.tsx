import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center font-outfit">
      <form className="flex flex-col gap-4 sm:max-w-96 w-[90%] mt-24">
        <div className="flex justify-center items-center gap-2 mb-2">
          <p className="font-serif text-3xl">Login</p>
          <hr className="border-none h-[1.75px] w-8 bg-black" />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="border-[1.5px] border-black px-3 py-2"
        />
        <input
          type="text"
          placeholder="Password"
          className="border-[1.5px] border-black px-3 py-2"
        />
        <p className="flex justify-between">
          <span className="hover:cursor-pointer">Forgot your password?</span>
          <Link to={"/register"}>Create account</Link>
        </p>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-black w-fit px-8 py-3 text-white cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
