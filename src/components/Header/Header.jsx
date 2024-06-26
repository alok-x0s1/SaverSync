import React from "react";
import LogoutBtn from "./LogoutBtn";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../Logo";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Expenses",
      slug: "/all-expense",
      active: authStatus,
    },
    {
      name: "Add Expense",
      slug: "/add-expense",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-primary-bg-color text-primary-color">
      <nav className="flex px-6 justify-between items-center">
        <div className="mr-4">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <ul className="flex gap-4">
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className="inline-block px-6 py-2 duration-500 hover:text-secondary-color font-medium rounded-xl"
                >
                  {item.name}
                </button>
              </li>
            ) : null
          )}
              {/* <LogoutBtn /> */}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
