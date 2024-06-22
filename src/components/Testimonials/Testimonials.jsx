import React from 'react';
import quote_icon from '../../assets/quote.svg';
import girlImage from '../../assets/girl-img.png';
import playbtn from '../../assets/playbtn.svg';
import mic from '../../assets/mic-icon.svg';


const Testimonials = () => {
    return (
        <div className='container'>
            <div className="my-5 py-5 px-0" >
                <div className="card py-3 border-0" style={{ backgroundColor: '#F7F5F9' }}>
                    <div className="card-body px-lg-5 mt-lg-2">
                        <div className="d-flex justify-content-center justify-content-lg-start align-items-center mb-3 mb-lg-0">
                            <img src={quote_icon} alt="Testimonials" className="me-3 h-lg-40" />
                            <h5 className="card-title mb-0">Testimonials</h5>
                        </div>
                        <p className="card-text text-center text-lg-start lh-lg-2 my-lg-4 text-lg-grey">
                            In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue are a great service which helps me get in touch with information, communities, and exchange ideas with other members. It also provides the extra benefit of finding products and services based on local talent. I can be sure what I am getting is going to be of great quality as it comes recommended by people in the hobbycue community. To have discussions, to participate, and to be able to safely explore various hobbies and activities in my city, all under one roof is an excellent idea and I highly recommend it.
                        </p>
                        <div className='d-lg-flex flex-row-reverse justify-content-between align-items-center my-lg-3'>
                            <div className="d-flex justify-content-center align-items-center gap-2">
                                <img src={girlImage} alt="girl" className="me-3 h-60 h-lg-100" />
                                <div>
                                    <h6 className="mb-1 fw-semibold text-primary-color">Shubha Nagarajan</h6>
                                    <small className="text-secondary-color">Classical Dancer</small>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-4 mt-lg-0 rounded-3 p-3 gap-2 gap-lg-4 col-lg-8 p-lg-4" style={{ backgroundColor: '#CCC1DA' }}>
                                <img src={playbtn} alt="play" role='button' />
                                <input className='custom-range' type="range" defaultValue={0} /><small className='text-primary-color' style={{ fontSize: '10px' }}>00:00</small>
                                <div className='position-relative'>
                                    <img src={girlImage} height={48} alt="" />
                                    <img src={mic} className='position-absolute bottom-0' alt="mic" style={{ left: '-5px' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
