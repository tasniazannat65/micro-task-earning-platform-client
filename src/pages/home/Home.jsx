import React from 'react';
import Banner from '../../components/home/banner/Banner';
import Testimonials from '../../components/home/testimonial_section/Testimonials';
import EarningOpportunities from '../../components/home/earning_section/EarningOpportunities';

const Home = () => {
    return (
        <div>
            <section>
                <Banner/>
            </section>
            <section>
                <Testimonials/>
            </section>
            <section>
                <EarningOpportunities/>
            </section>
            
        </div>
    );
};

export default Home;