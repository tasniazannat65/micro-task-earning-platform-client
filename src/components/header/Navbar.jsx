import React from 'react';
import MyLink from './MyLink';
import { Link } from 'react-router';
import Container from '../shared_component/Container';

const Navbar = () => {
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
            {/* Custom Task/Earning Logo */}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                {/* Checkmark circle representing task completion */}
                <circle cx="12" cy="12" r="10" className="opacity-20" fill="currentColor" />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M9 12l2 2 4-4"
                  className="stroke-current"
                />
                {/* Dollar/coin symbols representing earning */}
                <circle cx="17" cy="7" r="2.5" fill="currentColor" className="text-secondary" />
                <text x="17" y="8.5" fontSize="3" textAnchor="middle" fill="white" fontWeight="bold">$</text>
              </svg>
              {/* Accent dot */}
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

          {/* Right: CTA Button */}
          <a
            href="https://github.com/tasniazannat65/micro-task-earning-platform-client.git"
            target="_blank"
            rel="noreferrer"
            className="
              hidden md:inline-flex
              items-center gap-2
              text-sm
              font-semibold
              px-5 py-2.5
              rounded-xl
              bg-primary
              text-base-100
              hover:bg-secondary
              hover:scale-105
              active:scale-95
              transition-all duration-200
              shadow-md shadow-primary/30
              hover:shadow-lg hover:shadow-secondary/40
            "
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Join as Developer
          </a>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <label 
              htmlFor="mobile-menu" 
              className="
                btn btn-ghost btn-circle
                hover:bg-base-200
                active:bg-base-300
                border border-base-300/50
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-accent"
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

            {/* Mobile Dropdown */}
            <input type="checkbox" id="mobile-menu" className="hidden peer" />
            <div className="
              hidden peer-checked:block
              absolute right-4 top-20
              w-64
              rounded-2xl
              bg-base-100
              border border-base-300/60
              shadow-2xl shadow-base-300/30
              backdrop-blur-xl
              overflow-hidden
              animate-in fade-in slide-in-from-top-2 duration-200
            ">
              <nav className="flex flex-col p-3 gap-1">
                <MyLink to="/" mobile>Home</MyLink>
                <MyLink to="/login" mobile>Login</MyLink>
                <MyLink to="/register" mobile>Register</MyLink>
                <MyLink to="/dashboard" mobile>Dashboard</MyLink>
                
                <div className="divider my-2" />
                
                <a
                  href="https://github.com/tasniazannat65/micro-task-earning-platform-client.git"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center justify-center gap-2
                    text-sm font-semibold
                    px-4 py-3
                    rounded-xl
                    bg-primary
                    text-base-100
                    hover:bg-secondary
                    transition-colors duration-200
                    shadow-md shadow-primary/30
                  "
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Join as Developer
                </a>
              </nav>
            </div>
          </div>

        </div>
      </Container>
    </div>
    );
};

export default Navbar;