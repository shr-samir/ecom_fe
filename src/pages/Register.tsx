import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex items-center justify-center font-outfit">
      <form className="flex flex-col gap-4 sm:max-w-96 w-[90%] mt-24">
        <div className="flex justify-center items-center gap-2 mb-2">
          <p className="font-serif text-3xl">Sign Up</p>
          <hr className="border-none h-[1.75px] w-8 bg-black" />
        </div>
        <input
          type="name"
          placeholder="Name"
          className="border-[1.5px] border-black px-3 py-2"
        />
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
        <p className="flex justify-end">
          <Link to={"/login"} className="hover:cursor-pointer">
            Login Here
          </Link>
        </p>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-black w-fit px-8 py-3 text-white cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
