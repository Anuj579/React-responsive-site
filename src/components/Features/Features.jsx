import React from 'react';
import people_icon from '../../assets/people icon.svg'
import place_icon from '../../assets/place icon.svg'
import shopping_icon from '../../assets/shopping icon.svg'
import calendar_icon from '../../assets/calendar icon.svg'

const features = [
    { icon: people_icon, title: 'People', description: 'Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.', button: 'Connect' },
    { icon: place_icon, title: 'Place', description: 'Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.', button: 'Meet up' },
    { icon: shopping_icon, title: 'Product', description: 'Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.', button: 'Get it' },
    { icon: calendar_icon, title: 'Program', description: 'Find events, meetups and workshops related to your hobby. Register or buy tickets online.', button: 'Attend' },
];

const Features = () => {
    return (
        <div className="container my-5 py-lg-4">
            <div className="row">
                {features.map((feature, idx) => (
                    <div className="col-lg-6 mb-4" key={idx}>
                        <div className="card text-center text-lg-start feature-card">
                            <div className="card-body d-flex flex-column px-lg-5">
                                <div className='d-flex justify-content-center justify-content-lg-start align-items-center gap-2 gap-lg-4 my-3 my-lg-4'>
                                    <img src={feature.icon} height={34} width={34} className='h-lg-40 w-lg-40' alt={feature.title} />
                                    <h5 className="card-title fw-semibold mb-0">{feature.title}</h5>
                                </div>
                                <p className="card-text mb-auto fs-lg-17">{feature.description}</p>
                                <button className="rounded-3 fw-semibold py-2 bg-transparent text-primary-color mt-auto mb-3 my-lg-4 feature-btn">{feature.button}</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
