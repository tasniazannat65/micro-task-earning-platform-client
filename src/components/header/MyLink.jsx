import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({ to, children, mobile }) => {
    return (
       <NavLink
      to={to}
      className={({ isActive }) =>
        mobile
          ? `
            relative
            flex items-center
            px-4 py-3
            text-[15px]       
            font-semibold
            rounded-xl
            transition-all
            duration-200
            ${
              isActive
                ? "bg-primary/10 text-primary border border-primary/20"
                : "text-accent hover:bg-base-200 hover:text-primary border border-transparent"
            }
          `
          : `
            relative
            px-4 py-2
            text-[15px]       
            font-semibold
            transition-all
            duration-300
            group
            ${
              isActive
                ? "text-primary"
                : "text-accent hover:text-primary"
            }
          `
      }
    >
      {/* Desktop Styles - Underline effect */}
      {!mobile && (
        <>
          <span className="relative z-10">{children}</span>
          <span 
            className={`
              absolute bottom-0 left-0 right-0
              h-0.5
              bg-gradient-to-r from-primary to-secondary
              transform origin-left
              transition-transform duration-300 ease-out
              ${
                // Use NavLink's isActive via a render function
                to === window.location.pathname
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }
            `}
          />
          {/* Subtle background on hover */}
          <span 
            className="
              absolute inset-0 
              bg-primary/5 
              rounded-lg
              transform scale-95
              opacity-0
              group-hover:opacity-100 
              group-hover:scale-100
              transition-all duration-300
              -z-10
            "
          />
        </>
      )}
      
      {/* Mobile Styles - Simple text */}
      {mobile && children}
    </NavLink>
    );
};

export default MyLink;