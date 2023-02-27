import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar container mx-auto h-20 flex items-center border-b border-sky-900 justify-between">
      <Link className="logo text-2xl font-medium text-sky-400" to="/">
        Proxima
      </Link>
      <nav className="flex gap-5">
        <Link to="/login" className="hover:text-sky-400 duration-300">
          Login
        </Link>
        <Link to="/signup" className="hover:text-sky-400 duration-300">
          Sign up
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
