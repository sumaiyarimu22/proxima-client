import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { user } = useAuthContext();

  const { logout } = useLogout();

  const handleLOgout = () => {
    logout();
  };

  return (
    <div className="navbar container mx-auto h-20 flex items-center border-b border-sky-900 justify-between">
      <Link className="logo text-2xl font-medium text-sky-400" to="/">
        Proxima
      </Link>
      <nav className="flex gap-5">
        {!user && (
          <div className="flex gap-5">
            <Link to="/login" className="hover:text-sky-400 duration-300">
              Login
            </Link>
            <Link to="/signup" className="hover:text-sky-400 duration-300">
              Sign up
            </Link>
          </div>
        )}

        {user && (
          <div className="flex gap-5 items-center">
            <span>{user.email}</span>
            <button
              onClick={handleLOgout}
              type="submit"
              className="bg-rose-500 text-white rounded-lg py-2 px-5 hover:bg-sky-50 duration-300 hover:text-slate-900"
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
