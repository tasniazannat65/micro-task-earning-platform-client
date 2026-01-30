import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({ to, children }) => {
    return (
       <NavLink
      to={to}
      className={({ isActive }) =>
        `
        relative
        px-2 py-1
        text-[16px]       
        font-medium
        transition-all
        duration-200
        ${
          isActive
            ? "text-primary"
            : "text-accent hover:text-primary"
        }
        `
      }
    >
      {children}
    </NavLink>
    );
};

export default MyLink;