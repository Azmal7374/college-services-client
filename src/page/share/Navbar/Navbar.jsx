import { useContext, useState } from "react";

import { NavLink } from "react-router-dom";

import { AuthContext } from "../../../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {
        console.log(error.message);
      });
  };

  return (

    <div className=" sticky top-0 z-30 bg-white">
      <div className="navbar  ">
        <img data-aos="fade-down" className="w-20 md:w-24 " src={0} alt="" />
        <h2 className="text-xl md:text-3xl font-bold   ">CS&F</h2>

        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5  "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-4 bg-slate-200    rounded-md w-52"
            >
              <p className="px-2 my-3">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </p>

              <p className="px-2 py-2">
                <NavLink
                  to="/colleges"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Colleges
                </NavLink>
              </p>

              {user && (
                <p className="px-2 py-2">
                  <NavLink
                    to="/admission"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                  Admission
                  </NavLink>
                </p>
              )}

              {user && (
                <p className="px-2 py-2">
                  <NavLink
                    to="/myCollege"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                 My College
                  </NavLink>
                </p>
              )}
               
              {!user?.email ? (
                <>
                  <p className="px-2 py-2">
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "active" : "default"
                      }
                    >
                      Login
                    </NavLink>
                  </p>
                </>
              ) : (
                <p className="px-2 py-2">
                  <NavLink>
                    {" "}
                    <button
                      onClick={logOut}
                      className="text-[#0A6EBD] font-bold"
                    >
                      Sign Out
                    </button>
                  </NavLink>
                </p>
              )}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1   ml-24">
            <p className="mx-4 my-4">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </p>
            <p className="mx-4  my-4">
                <NavLink
                  to="/colleges"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Colleges
                </NavLink>
              </p>

              {user && (
                <p className="mx-4  my-4">
                  <NavLink
                    to="/admission"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                  Admission
                  </NavLink>
                </p>
              )}

             
              {user && (
                <p className="mx-4  my-4">
                  <NavLink
                    to="/myCollege"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                 My College
                  </NavLink>
                </p>
              )}

            {!user?.email ? (
              <>
                <p className="mx-4  my-4">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                  >
                    Login
                  </NavLink>
                </p>
              </>
            ) : (
              <p className="mx-4  my-4">
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  <button
                    onClick={logOut}
                    className="text-[#0A6EBD] font-bold"
                  >
                    Sign Out
                  </button>
                </NavLink>
              </p>
            )}

          

          </ul>
        </div>

        <p className="mr-4">
              
        <input type="text" placeholder="College Name" className="input   input-[] w-40 md:w-64  " />
        </p>

        <div className="navbar-end mr-4 lg:mr-20" data-aos="fade-down">
          {user && (
            <img
              className="h-14 w-14  rounded-full"
              title={user?.displayName}
              src={user ? user.photoURL : ""}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
