import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Navbar/>

            </header>
            <main className="pt-25 min-h-screen">
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default HomeLayouts;