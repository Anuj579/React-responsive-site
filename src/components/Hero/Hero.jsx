import React from 'react'
import hero_img from '../../assets/hero-img.png';
import Form from '../Form/Form';


function Hero() {
    return (
        <div className='pt-2 pt-lg-5' style={{ backgroundColor: '#F7F5F9' }}>
            <div className='container h-100 d-flex flex-column d-lg-none'>
                <h1 className='fst-italic fw-semibold py-4 mb-0'>Explore your <span className='text-secondary-color'>hobby</span> or <span className='text-primary-color'>passion</span></h1>
                <p className=''>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.</p>
                <Form />
                <img src={hero_img} className='w-100' alt="hero-bg-img" />
            </div>
            <div className='container d-none d-lg-flex justify-content-between align-items-start mt-5'>
                <div className='col-7'>
                    <h1 className='fst-italic fw-semibold mb-4 pb-3'>Explore your <span className='text-secondary-color'>hobby</span> or <span className='text-primary-color'>passion</span></h1>
                    <p className='lh-lg'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
                    <p className='mb-5 lh-lg'>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.</p>
                    <img src={hero_img} alt="hero-img" className='mt-5 w-100' />
                </div>
                <div className='col-4'>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Hero
