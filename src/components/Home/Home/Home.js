import React from 'react';
import Services from '../../Services/Services';
import HeroSection from '../HeroSection/HeroSection';
import Meals from '../Meals/Meals';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Meals></Meals>
            <Services></Services>
        </div>
    );
};

export default Home;