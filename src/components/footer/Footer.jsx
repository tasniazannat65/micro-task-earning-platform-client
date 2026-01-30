import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Container from '../shared_component/Container';
import { Link } from 'react-router';

const Footer = () => {
    return (
      <footer className="bg-base-200 border-t border-base-300/60 mt-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <Container>
          <div className="relative py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link
                to="/"
                className="inline-flex items-center gap-3 group"
              >
                {/* Logo matching navbar */}
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
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M9 12l2 2 4-4"
                      className="stroke-current"
                    />
                    <circle cx="17" cy="7" r="2.5" fill="currentColor" className="text-secondary" />
                    <text x="17" y="8.5" fontSize="3" textAnchor="middle" fill="white" fontWeight="bold">$</text>
                  </svg>
                </div>
                <span className="text-2xl font-bold text-primary tracking-tight">
                  Zentaskly
                </span>
              </Link>

              <p className="mt-6 text-[15px] leading-relaxed text-neutral/90 max-w-xs">
                A micro-tasking platform where workers earn by completing tasks,
                buyers get real results, and everything stays transparent.
              </p>

              {/* Tagline */}
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-primary">
                  Earn Smart, Work Easy
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-accent mb-6 flex items-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-primary" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
                Platform
              </h4>

              <ul className="space-y-3 text-[15px]">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/login', label: 'Login' },
                  { to: '/register', label: 'Register' },
                  { to: '/dashboard', label: 'Dashboard' }
                ].map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-neutral hover:text-primary transition-all duration-200 inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-primary transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold text-accent mb-6 flex items-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-primary" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                Resources
              </h4>

              <ul className="space-y-3 text-[15px]">
                {[
                  { label: 'How It Works', href: '#' },
                  { label: 'FAQs', href: '#' },
                  { label: 'Support', href: '#' },
                  { label: 'Privacy Policy', href: '#' }
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-neutral hover:text-primary transition-all duration-200 inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full group-hover:bg-primary transition-colors" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Developer */}
            <div>
              <h4 className="text-lg font-bold text-accent mb-6 flex items-center gap-2">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-primary" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Connect
              </h4>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mb-8">
                <a
                  href="https://github.com/tasniazannat65"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-11 h-11 rounded-xl 
                    flex items-center justify-center 
                    border-2 border-base-300 
                    bg-base-100/50
                    text-accent 
                    hover:bg-primary hover:border-primary hover:text-white 
                    hover:scale-110 hover:rotate-6
                    transition-all duration-300
                    shadow-sm hover:shadow-lg hover:shadow-primary/20
                  "
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/tasnia-zannat/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-11 h-11 rounded-xl 
                    flex items-center justify-center 
                    border-2 border-base-300 
                    bg-base-100/50
                    text-accent 
                    hover:bg-primary hover:border-primary hover:text-white 
                    hover:scale-110 hover:rotate-6
                    transition-all duration-300
                    shadow-sm hover:shadow-lg hover:shadow-primary/20
                  "
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={20} />
                </a>

                <a
                  href="https://www.facebook.com/tasniya.zannat.90"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-11 h-11 rounded-xl 
                    flex items-center justify-center 
                    border-2 border-base-300 
                    bg-base-100/50
                    text-accent 
                    hover:bg-primary hover:border-primary hover:text-white 
                    hover:scale-110 hover:rotate-6
                    transition-all duration-300
                    shadow-sm hover:shadow-lg hover:shadow-primary/20
                  "
                  aria-label="Facebook"
                >
                  <FaFacebookF size={20} />
                </a>
              </div>

              {/* Developer CTA */}
              <a
                href="https://github.com/tasniazannat65/micro-task-earning-platform-client.git"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-5 py-3
                  rounded-xl
                  bg-gradient-to-r from-primary to-secondary
                  text-white text-sm font-semibold
                  hover:shadow-lg hover:shadow-primary/30
                  hover:scale-105
                  active:scale-95
                  transition-all duration-200
                  group
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
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 group-hover:translate-x-1 transition-transform" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative border-t border-base-300/60 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              {/* Copyright */}
              <p className="text-neutral/80">
                © {new Date().getFullYear()} <span className="font-semibold text-primary">Zentaskly</span>. All rights reserved.
              </p>

              {/* Tech Stack Badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-base-300/30 border border-base-300/50">
                <span className="text-neutral/80">Built with</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-success">M</span>
                  <span className="font-bold text-primary">E</span>
                  <span className="font-bold text-secondary">R</span>
                  <span className="font-bold text-warning">N</span>
                </div>
                <span className="text-neutral/80">Stack</span>
              </div>

              {/* Quick Links */}
              <div className="flex items-center gap-6 text-neutral/70">
                <a href="#" className="hover:text-primary transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </Container>

        {/* Decorative bottom border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      </footer>
    );
};

export default Footer;