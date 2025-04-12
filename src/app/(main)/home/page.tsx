import React from 'react'
import { HeroSection } from '../../components/pages/Home/HeroSection'
import { HowItWorks } from '../../components/pages/Home/HowItWorks'
import { FeaturedTutors } from '../../components/pages/Home/FeaturedTutors' 

const Home = () => {
    return (
        <div>
            <HeroSection />
            <HowItWorks />
            <FeaturedTutors />
        </div>
    )
}

export default Home;
