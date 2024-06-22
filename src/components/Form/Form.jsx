import React, { useState } from 'react'
import eye_icon from '../../assets/eye icon.svg'
import lock_icon from '../../assets/lock icon.svg'
import google from '../../assets/google icon.svg'
import fb from '../../assets/fb icon.svg'

function Form() {
    const [formType, setFormType] = useState('signin');

    return (
        <div className="my-4 my-lg-0">
            <div className="row justify-content-md-center">
                <div className="text-center">
                    <div className="mb-4 d-flex justify-content-center justify-content-lg-start gap-5">
                        <a type="button" className={`fs-17 text-decoration-none fw-medium ${formType === 'signin' ? 'border-bottom-primary-color' : 'text-secondary'}`} onClick={() => setFormType('signin')}>Sign In</a>
                        <a type="button" className={`fs-17  text-decoration-none fw-medium ${formType === 'joinin' ? 'border-bottom-primary-color' : 'text-secondary'}`} onClick={() => setFormType('joinin')}>Join In</a>
                    </div>

                    <div className='d-flex flex-column flex-lg-column-reverse'>
                        {formType === 'signin' ? (
                            <div>
                                <form className="">
                                    <input type="email" className="w-100 rounded-3 border px-3 py-2 mb-3" placeholder="Email" />
                                    <div className='w-100 rounded-3 border mb-2 d-flex justify-content-between bg-white'>
                                        <input type="password" className="py-2 px-3 w-100 rounded-3 border-0" placeholder="Password" />
                                        <img src={eye_icon} className='px-3' alt="eye icon" />
                                    </div>
                                    <div className="d-flex justify-content-between mt-3 mb-4 my-lg-4 pb-2">
                                        <div className='d-flex gap-2 align-items-center'>
                                            <input type="checkbox" style={{ width: '18px', height: '18px' }} />
                                            <a className='text-decoration-none text-black'> Remember me</a>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <img src={lock_icon} alt="" />
                                            <a href="#" className='text-decoration-none text-black'>Forgot password?</a>
                                        </div>
                                    </div>
                                    <button type="button" className="bg-primary-color rounded-3 fw-semibold py-2 text-white w-100 d-lg-none">Continue</button>
                                    <button type="button" className="rounded-3 fw-semibold py-2 border border-dark bg-transparent w-100 d-none d-lg-block">Continue</button>
                                </form>

                            </div>
                        ) : (
                            <div>
                                <form>
                                    <input type="email" className="w-100 rounded-3 border px-3 py-2 mb-3" placeholder="Email" />
                                    <div className='w-100 rounded-3 border mb-2 d-flex justify-content-between bg-white'>
                                        <input type="password" id="password-input" className="py-2 px-3 w-100 rounded-3 border-0" placeholder="Password" />
                                        <img src={eye_icon} className='px-3' alt="eye icon" />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center mb-3'>
                                        <div className="password-meter">
                                            <div className="meter-section rounded me-1"></div>
                                            <div className="meter-section rounded me-1"></div>
                                            <div className="meter-section rounded"></div>
                                        </div>
                                        <p className='text-secondary fw-semibold mb-0'><small>Password strength</small></p>
                                    </div>
                                    <p><small className='text-secondary'>By continuing, you agree to our <span className='fw-medium text-dark'>Terms of Service</span> and <span className='fw-medium text-dark'>Privacy Policy.</span></small></p>
                                    <button type="button" className="border-0 bg-primary-color rounded-3 fw-semibold py-2 text-white w-100 d-lg-none">Continue</button>
                                    <button type="button" className="border-0 bg-primary-color rounded-3 fw-semibold py-2 text-white w-100 d-none d-lg-block">Agree and Continue</button>
                                </form>
                            </div>
                        )}

                        <div className="mb-3 mb-lg-0 d-flex flex-column flex-lg-column-reverse">
                            <p className='connect-with d-flex flex-row my-4'><span className='px-2 fw-semibold fs-lg-14'>Or connect with</span></p>
                            <div>
                                <button className="rounded-3 fw-semibold py-2 bg-transparent w-100 mb-3 d-flex align-items-center"><img src={google} className='ms-2' alt="google icon" /><span className='text-center -ms w-100'>Continue with Google</span></button>
                                <button className="rounded-3 fw-semibold py-2 bg-transparent  w-100 d-flex align-items-center"><img src={fb} className='ms-2' alt="fb icon" /><span className='text-center -ms w-100'>Continue with Facebook</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form
