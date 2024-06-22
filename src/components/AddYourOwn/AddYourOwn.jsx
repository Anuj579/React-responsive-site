import React from 'react';
import addIcon from '../../assets/add.svg';
import { Link } from 'react-router-dom';

const AddYourOwn = () => {
    return (
        <div className="py-5" style={{ backgroundColor: '#F7FDFF' }}>
            <div className='container'>
                <div className="card text-center text-lg-start px-lg-0 my-lg-5">
                    <div className="card-body px-lg-5">
                        <div className='d-flex justify-content-center justify-content-lg-start align-items-center gap-2 gap-lg-4 my-3 my-lg-4'>
                            <img src={addIcon} className='h-lg-40' alt="Add Your Own" />
                            <h5 className="card-title fw-semibold mb-0">Add Your Own</h5>
                        </div>
                        <p className="card-text fs-lg-17">
                            Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page
                        </p>
                        <Link to="/add-your-listing">
                            <button className="rounded-3 fw-semibold py-2 bg-transparent text-primary-color feature-btn mb-3 my-lg-4">Add new</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddYourOwn;
