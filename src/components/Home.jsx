import React from 'react'
import Hero from './Hero/Hero'
import Features from './Features/Features';
import AddYourOwn from './AddYourOwn/AddYourOwn';
import Testimonials from './Testimonials/Testimonials';

function Home() {
    return (
        <>
            <Hero />
            <Features />
            <AddYourOwn />
            <Testimonials />
        </>
    )
}

export default Home
