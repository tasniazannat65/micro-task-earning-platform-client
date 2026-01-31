import React, { useEffect, useState } from 'react';
import MyLink from './MyLink';
import { Link } from 'react-router';
import Container from '../shared_component/Container';
import { BsMoon, BsSun } from 'react-icons/bs';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <Container>
        <div className="
          flex items-center justify-between
          rounded-2xl
          border border-base-300/60
          bg-base-100/95
          backdrop-blur-xl
          px-6 lg:px-8 py-4
          shadow-lg shadow-base-300/20
          transition-all duration-300
          hover:shadow-xl hover:shadow-base-300/30
        ">

          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" className="opacity-20" fill="currentColor" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" className="stroke-current"/>
                <circle cx="17" cy="7" r="2.5" fill="currentColor" className="text-secondary" />
                <text x="17" y="8.5" fontSize="3" textAnchor="middle" fill="white" fontWeight="bold">$</text>
              </svg>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-secondary rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl lg:text-3xl font-bold text-primary tracking-tight">
                Zentaskly
              </span>
              <span className="text-[10px] lg:text-xs text-neutral font-medium -mt-1">
                Earn Smart, Work Easy
              </span>
            </div>
          </Link>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <MyLink to="/">Home</MyLink>
            <MyLink to="/login">Login</MyLink>
            <MyLink to="/register">Register</MyLink>
            <MyLink to="/dashboard">Dashboard</MyLink>
          </nav>

          {/* Right: Desktop Theme + CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="btn btn-ghost btn-circle hover:bg-base-200 active:bg-base-300 transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <BsMoon className="text-xl text-neutral"/>
              ) : (
                <BsSun className="text-xl text-warning"/>
              )}
            </button>

            {/* CTA Button */}
            <a
              href="https://github.com/tasniazannat65/micro-task-earning-platform-client.git"
              target="_blank"
              rel="noreferrer"
              className="
                flex items-center gap-2
                text-sm font-semibold
                px-5 py-2.5
                rounded-xl
                bg-primary text-base-100
                hover:bg-secondary hover:scale-105
                active:scale-95
                transition-all duration-200
                shadow-md shadow-primary/30
                hover:shadow-lg hover:shadow-secondary/40
              "
            >
              Join as Developer
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Theme Toggle Mobile */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="btn btn-ghost btn-circle hover:bg-base-200 active:bg-base-300 transition-all duration-200"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <BsMoon className="text-xl text-neutral"/>
              ) : (
                <BsSun className="text-xl text-warning"/>
              )}
            </button>

            {/* Hamburger */}
            <label htmlFor="mobile-menu" className="
              btn btn-ghost btn-circle
              hover:bg-base-200
              active:bg-base-300
              border border-base-300/50
            ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </label>

            {/* Hidden Checkbox for Menu */}
            <input type="checkbox" id="mobile-menu" className="hidden peer" />
          </div>

          {/* Mobile Dropdown */}
          <div className="
            hidden peer-checked:flex flex-col absolute right-4 top-20 w-64 rounded-2xl
            bg-base-100 border border-base-300/60 shadow-2xl shadow-base-300/30
            backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200
          ">
            <nav className="flex flex-col p-3 gap-2">
              <MyLink to="/" mobile>Home</MyLink>
              <MyLink to="/login" mobile>Login</MyLink>
              <MyLink to="/register" mobile>Register</MyLink>
              <MyLink to="/dashboard" mobile>Dashboard</MyLink>

              <div className="divider my-2" />

              <a
                href="https://github.com/tasniazannat65/micro-task-earning-platform-client.git"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-3 rounded-xl bg-primary text-base-100 hover:bg-secondary transition-colors duration-200 shadow-md shadow-primary/30"
              >
                Join as Developer
              </a>
            </nav>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Navbar;
