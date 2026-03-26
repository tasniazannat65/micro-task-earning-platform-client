import React from 'react';
import Banner from '../../components/home/banner/Banner';
import Testimonials from '../../components/home/testimonial_section/Testimonials';
import EarningOpportunities from '../../components/home/earning_section/EarningOpportunities';
import WalletFlow from '../../components/home/wallet_section/WalletFlow';
import PlatformFor from '../../components/home/platform_section/PlatformFor';
import TaskCategories from '../../components/home/task_section/TaskCategories';
import BestWorkers from '../../components/home/best_workers/BestWorkers';

const Home = () => {
    return (
        <div>
                  <title>Zantaskly || Home Page </title>

            <section>
                <Banner/>
            </section>
            <section>
                <BestWorkers/>
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