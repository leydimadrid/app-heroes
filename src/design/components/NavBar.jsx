 import { Link, NavLink, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";

export const NavBar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6 mt-2">
              <div className="flex space-x-4">
                <NavLink
                  className={({ isActive }) =>
                    `text-white block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? "text-yellow-500" : ""
                    }`
                  }
                  to="/inicio"
                >
                  Inicio
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    `bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? "text-yellow-500" : ""
                    }`
                  }
                  to="/marvel"
                >
                  MARVEL
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    `bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium ${
                      isActive ? "text-yellow-500" : ""
                    }`
                  }
                  to="/dc"
                >
                  DC
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              onClick={onLogout}
              className="bg-red-600 py-2 px-6 rounded-lg font-bold text-white hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              Salir 👉
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-2">
          <NavLink
            className={({ isActive }) =>
              `bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "text-yellow-500" : ""
              }`
            }
            to="/inicio"
          >
            Inicio
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "text-yellow-500" : ""
              }`
            }
            to="/marvel"
          >
            MARVEL
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium ${
                isActive ? "text-yellow-500" : ""
              }`
            }
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>
    </nav>
  );
};