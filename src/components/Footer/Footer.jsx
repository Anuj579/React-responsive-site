import React from 'react';
import footer_img from '../../assets/footer-image.png'
import fbicon from '../../assets/fb-icon-footer.svg'
import twittericon from '../../assets/twitter.svg'
import instaicon from '../../assets/insta.svg'
import pinteresticon from '../../assets/pinterest.svg'
import googleplusicon from '../../assets/gp.svg'
import yticon from '../../assets/yt.svg'
import telegramicon from '../../assets/telegram.svg'
import mailicon from '../../assets/mail.svg'
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <>
      <div className='py-3 py-lg-5 pt-5 position-relative' style={{ backgroundColor: '#F7FDFF' }}>
        <div className='container position-relative px-lg-0'>
          <h1 className='fw-medium mt-3 pt-lg-5 fst-italic'>Your <span className='text-primary-color'>Hobby</span>, Your <span className='text-secondary-color'>Community...</span></h1>
          <button type="button" className="bg-primary-color rounded-3 fw-semibold py-1 px-3 my-4 py-lg-2 text-white">Get Started</button>
          <img src={footer_img} className='w-100 mt-4 mt-lg-5' alt="" />
        </div>
        <div className='scroll-to-top-btn d-none d-lg-block'>
          <ScrollToTop className='rounded-circle ' style={{ right: '20px', bottom: '20px' }} smooth width='40px' height='40px' component={<svg width="20" style={{ marginBottom: '1px' }} height="20" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0067 11.08C14.3334 10.7533 14.3334 10.2266 14.0067 9.89997L8.4667 4.35997C8.2067 4.09997 7.7867 4.09997 7.5267 4.35997L1.9867 9.89997C1.66003 10.2266 1.66003 10.7533 1.9867 11.08C2.31337 11.4066 2.84003 11.4066 3.1667 11.08L8.00003 6.2533L12.8334 11.0866C13.1534 11.4066 13.6867 11.4066 14.0067 11.08Z" fill="inherit" />
          </svg>} />
          <p className='bg-white mb-0 px-1 text-primary-color'>Go to top (Ctrl+Home)</p>
        </div>
      </div>
      <footer className="mt-5">
        <div className="container ">
          <div className="row d-lg-none">
            <div className="accordion " id="accordionPanelsStayOpenExample">
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button className="accordion-button px-0 z-0" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    <h6 className='fw-bold mb-0'>Hobbycue</h6>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                  <div className="accordion-body px-0 pt-2">
                    <ul className='list-unstyled'>
                      <li className='mb-3'><a href="#" className='text-decoration-none text-secondary'><small>About Us</small></a></li>
                      <li className='my-3'><a href="#" className='text-decoration-none text-secondary'><small>Our Services</small></a></li>
                      <li className='my-3'><a href="#" className='text-decoration-none text-secondary'><small>Work With Us</small></a></li>
                      <li className='my-3'><a href="#" className='text-decoration-none text-secondary'><small>FAQ</small></a></li>
                      <li className='my-3'><a href="#" className='text-decoration-none text-secondary'><small>Contact Us</small></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button className="accordion-button px-0 " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    <h6 className='fw-bold mb-0'>How Do I</h6>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
                  <div className="accordion-body px-0">
                    <ul className='list-unstyled'>
                      <li className='mb-3'><a href="#" className='text-decoration-none text-secondary'><small>Sign Up</small></a></li>
                      <li className='my-3'><a href="#" className='text-decoration-none text-secondary'><small>Add a Listing</small></a></li>
                      <li className='my-3'><a href="#" className='text-decoration-none text-secondary'><small>Claim Listing</small></a></li>
                      <li className='my-3'><a href="#" className='text-decoration-none text-secondary'><small>Post a Query</small></a></li>
                      <li className='my-3'><a href="#" className='text-decoration-none text-secondary'><small>Add a Blog Post</small></a></li>
                      <li className='my-3'><a href="#" className='text-decoration-none text-secondary'><small>Other Queries</small></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button className="accordion-button px-0 " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    <h6 className='fw-bold mb-0'>Quick Links</h6>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show">
                  <div className="accordion-body px-0">
                    <ul className='list-unstyled'>
                      <li className='mb-3'><a href="#" className='text-decoration-none text-secondary'><small>Listings</small></a></li>
                      <li className='my-3'><a href="#" className='text-decoration-none text-secondary'><small>Blog Posts</small></a></li>
                      <li className='my-3'><a href="#" className='text-decoration-none text-secondary'><small>Shop / Store</small></a></li>
                      <li className='my-3'><a href="#" className='text-decoration-none text-secondary'><small>Community</small></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 mb-md-0">
              <h6 className="fw-bold mt-4">Social Media</h6>
              <ul className="list-unstyled list-inline d-flex gap-2 flex-wrap my-3">
                <li className="list-inline-item"><a href="#" className="text-dark"><img src={fbicon} alt="fb-icon" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-dark"><img src={twittericon} alt="fb-icon" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-dark"><img src={instaicon} alt="fb-icon" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-dark"><img src={pinteresticon} alt="fb-icon" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-dark"><img src={googleplusicon} alt="fb-icon" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-dark"><img src={yticon} alt="fb-icon" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-dark"><img src={telegramicon} alt="fb-icon" /></a></li>
                <li className="list-inline-item"><a href="#" className="text-dark"><img src={mailicon} alt="fb-icon" /></a></li>
              </ul>
              <h6 className="fw-bold mt-5 mb-3">Invite Friends</h6>
              <form className='mb-3'>
                <div className="d-flex">
                  <input type="email" className="w-100 border-end-0 border-primary-color rounded-start-3 px-3" placeholder="Email ID" />
                  <button className="border-0 bg-primary-color rounded-end-3 fw-medium py-2 px-3 text-white" type="submit">Invite</button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer for bigger screen */}
          <div className='d-none d-lg-flex justify-content-between'>
            <div>
              <h6 className='fw-bold mb-0'>Hobbycue</h6>
              <ul className='list-unstyled my-3'>
                <li className='mb-1'><a href="#" className='text-decoration-none text-dark'>About Us</a></li>
                <li className='my-1'><a href="#" className='text-decoration-none text-dark'>Our Services</a></li>
                <li className='my-1'><a href="#" className='text-decoration-none text-dark'>Work With Us</a></li>
                <li className='my-1'><a href="#" className='text-decoration-none text-dark'>FAQ</a></li>
                <li className='my-1'><a href="#" className='text-decoration-none text-dark' >Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h6 className='fw-bold mb-0'>How Do I</h6>
              <ul className='list-unstyled my-3'>
                <li className='mb-1'><a href="#" className='text-decoration-none text-dark'>Sign Up</a></li>
                <li className='my-1'><a href="#" className='text-decoration-none text-dark'>Add a Listing</a></li>
                <li className='my-1'><a href="#" className='text-decoration-none text-dark'>Claim Listing</a></li>
                <li className='my-1'><a href="#" className='text-decoration-none text-dark'>Post a Query</a></li>
                <li className='my-1'><a href="#" className='text-decoration-none text-dark' >Add a Blog Post</a></li>
                <li className='mb-5'><a href="#" className='text-decoration-none text-dark' >Other Queriest</a></li>
              </ul>
            </div>
            <div>
              <h6 className='fw-bold mb-0'>Quick Links</h6>
              <ul className='list-unstyled my-3'>
                <li className='mb-1'><a href="#" className='text-decoration-none text-dark'>Listings</a></li>
                <li className='my-1'><a href="#" className='text-decoration-none text-dark'>Blog Posts</a></li>
                <li className='my-1'><a href="#" className='text-decoration-none text-dark'>Shop / Store</a></li>
                <li className='my-1'><a href="#" className='text-decoration-none text-dark'>Community</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-4 ">
                <h6 className="fw-bold">Social Media</h6>
                <ul className="list-unstyled list-inline d-flex gap-3 flex-wrap my-3">
                  <li className="list-inline-item"><a href="#" className="text-dark"><img src={fbicon} alt="fb-icon" /></a></li>
                  <li className="list-inline-item"><a href="#" className="text-dark"><img src={twittericon} alt="fb-icon" /></a></li>
                  <li className="list-inline-item"><a href="#" className="text-dark"><img src={instaicon} alt="fb-icon" /></a></li>
                  <li className="list-inline-item"><a href="#" className="text-dark"><img src={pinteresticon} alt="fb-icon" /></a></li>
                  <li className="list-inline-item"><a href="#" className="text-dark"><img src={googleplusicon} alt="fb-icon" /></a></li>
                  <li className="list-inline-item"><a href="#" className="text-dark"><img src={yticon} alt="fb-icon" /></a></li>
                  <li className="list-inline-item"><a href="#" className="text-dark"><img src={telegramicon} alt="fb-icon" /></a></li>
                  <li className="list-inline-item"><a href="#" className="text-dark"><img src={mailicon} alt="fb-icon" /></a></li>
                </ul>
                <h6 className="fw-bold mt-5 mb-3">Invite Friends</h6>
                <form className='mb-3'>
                  <div className="d-flex">
                    <input type="email" className="w-100 border-end-0 border-primary-color rounded-start-3 px-3" placeholder="Email ID" />
                    <button className="border-0 bg-primary-color rounded-end-3 fw-medium py-2 px-3 text-white" type="button">Invite</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


        <div className="text-center p-3 p-lg-4  " style={{ backgroundColor: '#F7F5F9' }}>
          <p className='mb-0 fw-medium'>&copy; Purple Cues Private Limited</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
