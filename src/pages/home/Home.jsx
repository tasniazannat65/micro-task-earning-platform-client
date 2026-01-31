import React from 'react';
import Banner from '../../components/home/banner/Banner';
import Testimonials from '../../components/home/testimonial_section/Testimonials';

const Home = () => {
    return (
        <div>
            <section>
                <Banner/>
            </section>
            <section>
                <Testimonials/>
            </section>
            
        </div>
    );
};

export default Home;