import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className={({ isActive }) =>
              isActive
                ? "inline-flex items-center py-6 px-3 mr-4 text-whitetext-4xl font-bold cursive tracking-widest"
                : "inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/post"
            className={({ isActive }) =>
              isActive
                ? "inline-flex items-center p-3 my-6 rounded text-red-100 bg-red-700"
                : "inline-flex items-center p-3 my-6 rounded text-red-200 hover:text-green-800"
            }
          >
            Blog Posts
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? "inline-flex items-center p-3 my-6 rounded text-red-100 bg-red-700"
                : "inline-flex items-center p-3 my-6 rounded text-red-200 hover:text-green-800"
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "inline-flex items-center p-3 my-6 rounded text-red-100 bg-red-700"
                : "inline-flex items-center p-3 my-6 rounded text-red-200 hover:text-green-800"
            }
          >
            About Me!
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
