import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/header/Navbar';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Navbar/>

            </header>
            <main className="pt-28">
                <Outlet/>
            </main>
            <footer>
                
            </footer>
        </div>
    );
};

export default HomeLayouts;