import React from 'react';
import MyLink from './MyLink';
import { Link } from 'react-router';
import Container from '../shared_component/Container';

const Navbar = () => {
    return (
    <div className="fixed top-4 left-0 w-full z-50">
      <Container>
        <div className="
          flex items-center justify-between
          rounded-full
          border border-base-300
          bg-base-100/80
          backdrop-blur-md
          px-6 py-3
          shadow-sm
        ">

          {/* Left: Logo */}
          <Link
            to="/"
            className="text-[20px] font-semibold tracking-wide text-primary"
          >
            Zentaskly
          </Link>

          {/* Center: Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6 text-[15px] font-medium">
            <li><MyLink to="/">Home</MyLink></li>
            <li><MyLink to="/login">Login</MyLink></li>
            <li><MyLink to="/register">Register</MyLink></li>
            <li><MyLink to="/dashboard">Dashboard</MyLink></li>
          </ul>

          {/* Right: CTA */}
          <a
            href="https://github.com/your-username/your-client-repo"
            target="_blank"
            rel="noreferrer"
            className="
              hidden md:inline-flex
              items-center gap-2
              text-[14px]
              font-medium
              px-4 py-2
              rounded-full
              border border-primary
              text-primary
              hover:bg-primary hover:text-base-100
              transition
            "
          >
            Join as Developer
          </a>

          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="
                menu menu-sm dropdown-content
                mt-3 p-3 w-56
                rounded-xl
                bg-base-100
                border border-base-300
                shadow
              "
            >
              <li><MyLink to="/">Home</MyLink></li>
              <li><MyLink to="/login">Login</MyLink></li>
              <li><MyLink to="/register">Register</MyLink></li>
              <li><MyLink to="/dashboard">Dashboard</MyLink></li>
            </ul>
          </div>

        </div>
      </Container>
    </div>
    );
};

export default Navbar;