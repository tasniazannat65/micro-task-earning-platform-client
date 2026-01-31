import React from 'react';
import Banner from '../../components/home/banner/Banner';
import Testimonials from '../../components/home/testimonial_section/Testimonials';
import EarningOpportunities from '../../components/home/earning_section/EarningOpportunities';
import WalletFlow from '../../components/home/wallet_section/WalletFlow';
import PlatformFor from '../../components/home/platform_section/PlatformFor';
import TaskCategories from '../../components/home/task_section/TaskCategories';

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
            <section>
                <WalletFlow/>
            </section>
            <section>
                <PlatformFor/>
            </section>
            <section>
                <TaskCategories/>
            </section>
            
        </div>
    );
};

export default Home;