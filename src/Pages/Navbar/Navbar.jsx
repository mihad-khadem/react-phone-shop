import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center py-6 px-4 bg-sky-200 rounded-sm shadow-md">
        {/* Logo */}
        <div>
            <h2 className="text-2xl font-semibold">Phone Shop</h2>
        </div>
        {/* Nav Links */}
        <ul className="flex gap-5">
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-sky-400 underline" : ""
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-sky-400 underline" : ""
              }
              to="/favorites"
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-sky-400 underline" : ""
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
