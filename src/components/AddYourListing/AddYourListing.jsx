import React from 'react';
import people_icon from '../../assets/people icon.svg'
import place_icon from '../../assets/place icon.svg'
import cart from '../../assets/cart.svg'
import calendar_icon from '../../assets/calendar icon.svg'
import addIcon from '../../assets/add.svg';

const categories = [
    {
        icon: people_icon,
        title: 'People',
        description: 'An Individual or Organization. Teacher, Coach, Professional or Online Seller. Company, Business or Association.',
        color: '#8064A2',
    },
    {
        icon: place_icon,
        title: 'Place',
        description: 'An Address. Classroom, Shop, Performance or Event Venue, Sports Arena, Play Area, Studio, School or Campus.',
        color: '#77933C',
    },
    {
        icon: cart,
        title: 'Product',
        description: 'An Item that you can Book, Buy or Rent. Appointment, Ticket, or Voucher. Equipment, Instrument or Activity Kit.',
        color: '#C0504D',
    },
    {
        icon: calendar_icon,
        title: 'Program',
        description: 'An Event with Venue and Date. Meetup, Workshop or Webinar. Exhibition, Performance or Competition.',
        color: '#0096C8',
    },
];

const AddYourListing = () => {

    return (
        <div className='addYourListing-div pt-lg-4'>
            <div className="container mb-4 bg-white p-lg-4">
                <div className='d-flex justify-content-center align-items-center gap-2 gap-lg-3 py-4'>
                    <img src={addIcon} className='h-lg-40' alt="Add Your Own" />
                    <h5 className="fw-semibold mb-0">Add Your Listing</h5>
                </div>
                <div className="row row-gap-lg-3">
                    {categories.map((category, idx) => (
                        <div className="col-12 col-lg-6 mb-4" key={idx}>
                            <div className="card h-100 border-2 category-card m-lg-2" style={{ borderColor: category.color, cursor:'pointer' }} data-color={category.color}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="category-icon me-3">
                                            <img src={category.icon} height={34} width={34} className='h-lg-40 w-lg-40' alt="" />
                                        </div>
                                        <h5 className="card-title fw-semibold mb-0">{category.title}</h5>
                                    </div>
                                    <p className="card-text pt-1">{category.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddYourListing;
