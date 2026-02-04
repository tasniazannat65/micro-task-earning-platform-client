import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';
import LoadingSpinner from '../components/shared_component/LoadingSpinner';

const HomeLayouts = () => {
        const navigation = useNavigation();

    return (
        <div>
            <header>
                <Navbar/>

            </header>
            <main className="pt-25 min-h-screen">
                  {
                    navigation.state === 'loading' && (<LoadingSpinner/>)
                }
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default HomeLayouts;