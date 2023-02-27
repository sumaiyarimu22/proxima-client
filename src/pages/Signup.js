import { useState } from "react";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="signup-form flex flex-col gap-5 py-20 mx-auto max-w-sm">
      <h2 className="text-3xl font-medium text-sky-400 mb-10 ">Sign up</h2>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="email"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="hello@react.dev"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border border-slate-500 py-2 px-5 rounded-xl outline-none focus:border-sky-400 duration-300"
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="password"
          className="cursor-pointer hover:text-sky-400 duration-300"
        >
          Email address
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border border-slate-500 py-2 px-5 rounded-xl outline-none focus:border-sky-400 duration-300"
        />
      </div>

      <button
        type="submit"
        className="bg-sky-400 text-slate-900 py-2 rounded-xl hover:bg-sky-500 duration-300 mt-3"
      >
        Sign up
      </button>
    </form>
  );
};

export default Signup;
