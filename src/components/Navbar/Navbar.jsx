import React from 'react';
import logo from '../../assets/logo.png'
import logo2 from '../../assets/logo-2.png'
import search from '../../assets/search icon.svg'
import notification from '../../assets/notification icon.svg'
import toggler from '../../assets/menu toggler icon.svg'
import close from '../../assets/close icon.svg'
import explore from '../../assets/explore icon.svg'
import hobbies from '../../assets/hobbies icon.svg'
import bookmark from '../../assets/bookmark icon.svg'
import Form from '../Form/Form';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  // Check if the current path is "/add-your-listing"
  const isAddYourListingPage = location.pathname === '/add-your-listing';

  return (
    <header className="header position-sticky bg-white top-0 z-3">
      <nav className="navbar shadow-sm">
        <div className="container d-flex justify-content-between flex-nowrap">
          <div className='d-flex align-items-center gap-xl-4 gap-lg-2'>
            <Link className="py-1" to="/">
              <img src={isAddYourListingPage ? logo2 : logo} className='logo' alt="logo" />
            </Link>
            <div className="d-none d-lg-flex">
              <input type="text" className="w-100 border-end-0 border rounded-start-3 px-3 col-xl-5" placeholder="Search here..." style={{ backgroundColor: '#F8F9FA', fontSize: '12px' }} />
              <button className="border-0 bg-primary-color rounded-end-3 fw-medium py-2 px-3 text-white" type="submit"><svg width="16" height="16" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.25 0C3.25778 0 0 3.25778 0 7.25C0 11.2422 3.25778 14.5 7.25 14.5C8.88658 14.5 10.3945 13.9465 11.6104 13.0254L16.293 17.707C16.3851 17.803 16.4955 17.8796 16.6176 17.9324C16.7397 17.9852 16.8712 18.0131 17.0042 18.0144C17.1373 18.0158 17.2692 17.9906 17.3924 17.9403C17.5156 17.89 17.6275 17.8157 17.7216 17.7216C17.8157 17.6275 17.89 17.5156 17.9403 17.3924C17.9906 17.2692 18.0158 17.1373 18.0144 17.0042C18.0131 16.8712 17.9852 16.7397 17.9324 16.6176C17.8796 16.4955 17.803 16.3851 17.707 16.293L13.0254 11.6104C13.9465 10.3945 14.5 8.88658 14.5 7.25C14.5 3.25778 11.2422 0 7.25 0ZM7.25 2C10.1613 2 12.5 4.33866 12.5 7.25C12.5 8.64786 11.957 9.9103 11.0742 10.8486C10.9883 10.9108 10.9128 10.9863 10.8506 11.0723C9.91205 11.9562 8.64886 12.5 7.25 12.5C4.33866 12.5 2 10.1613 2 7.25C2 4.33866 4.33866 2 7.25 2Z" fill="#fff" />
              </svg>
              </button>
            </div>
          </div>
          <div className='d-lg-none d-flex gap-2'>
            <button className='border-0 bg-transparent'>
              <img src={search} alt="" />
            </button>
            <button className='border-0 bg-transparent'>
              <img src={notification} alt="" />
            </button>
            <button className='border-0 bg-transparent' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <img src={toggler} alt="" />
            </button>
          </div>
          <div className='d-none d-lg-flex align-items-center gap-xl-4 gap-lg-3'>
            <div className="dropdown">
              <a className="dropdown-toggle text-decoration-none text-black fw-medium d-flex align-items-center gap-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={explore} alt="explore icon" /><span>Explore</span>
              </a>
              <ul className="dropdown-menu border-0 py-0 rounded-1" style={{ boxShadow: '0 8px 12px 0 #939CA31F', zIndex: '-1', marginTop: '1.3rem' }}>
                <li><a className="dropdown-item border-bottom py-2 pe-5 text-secondary" href="#"><small>People - Community</small></a></li>
                <li><a className="dropdown-item border-bottom py-2 pe-5 text-secondary" href="#"><small>Places - Venues</small></a></li>
                <li><a className="dropdown-item border-bottom py-2 pe-5 text-secondary" href="#"><small>Programs - Events</small></a></li>
                <li><a className="dropdown-item border-bottom py-2 pe-5 text-secondary" href="#"><small>Products - Store</small></a></li>
                <li><a className="dropdown-item py-2 pe-5 text-secondary" href="#"><small>Blogs</small></a></li>
              </ul>
            </div>
            <div className="dropdown">
              <a className="dropdown-toggle text-decoration-none text-black fw-medium d-flex align-items-center gap-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={hobbies} alt="hobbies icon" /><span>Hobbies</span>
              </a>
              <ul className="dropdown-menu border-0 py-0 rounded-1" style={{ boxShadow: '0 8px 12px 0 #939CA31F', zIndex: '-1', marginTop: '1.3rem' }}>
                <li><a className="dropdown-item border-bottom py-2 pe-5 text-secondary" href="#"><small>Abc</small></a></li>
                <li><a className="dropdown-item border-bottom py-2 pe-5 text-secondary" href="#"><small>Xyz</small></a></li>
                <li><a className="dropdown-item py-2 pe-5 text-secondary" href="#"><small>Yyx</small></a></li>
              </ul>
            </div>
            <a href="#"><img src={bookmark} alt="bookmark-icon" /></a>
            <a href="#"><img src={notification} alt="notification-icon" /></a>
            <a href=""><svg width="24" height="45" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M29.2267 9.66654V9.83987L27.28 17.0399C27.0499 17.8944 26.5429 18.6486 25.8384 19.1842C25.1339 19.7198 24.2717 20.0067 23.3867 19.9999H13.1867C12.1853 20.0039 11.2189 19.6323 10.4783 18.9583C9.73768 18.2844 9.27679 17.3572 9.18668 16.3599L8.32001 6.54654C8.28997 6.21411 8.13634 5.90504 7.88947 5.68039C7.64261 5.45574 7.32046 5.33185 6.98668 5.3332H4.09334C3.73972 5.3332 3.40058 5.19273 3.15053 4.94268C2.90049 4.69263 2.76001 4.35349 2.76001 3.99987C2.76001 3.64625 2.90049 3.30711 3.15053 3.05706C3.40058 2.80701 3.73972 2.66654 4.09334 2.66654H6.98668C7.98802 2.66247 8.95447 3.03413 9.69507 3.70808C10.4357 4.38203 10.8966 5.30925 10.9867 6.30654V6.66654H26.5733C26.9534 6.66355 27.3298 6.74186 27.6771 6.89621C28.0245 7.05056 28.3348 7.27739 28.5874 7.56148C28.8399 7.84558 29.0288 8.18038 29.1413 8.54343C29.2539 8.90649 29.2875 9.28941 29.24 9.66654H29.2267Z" fill="#8064A2" />
              <path d="M12.0933 29.3334C13.9343 29.3334 15.4267 27.841 15.4267 26.0001C15.4267 24.1591 13.9343 22.6667 12.0933 22.6667C10.2524 22.6667 8.76001 24.1591 8.76001 26.0001C8.76001 27.841 10.2524 29.3334 12.0933 29.3334Z" fill="#8064A2" />
              <path d="M22.7601 29.3334C24.601 29.3334 26.0934 27.841 26.0934 26.0001C26.0934 24.1591 24.601 22.6667 22.7601 22.6667C20.9191 22.6667 19.4268 24.1591 19.4268 26.0001C19.4268 27.841 20.9191 29.3334 22.7601 29.3334Z" fill="#8064A2" />
            </svg>
            </a>
            <button className="rounded-3 fw-medium py-2 px-xl-4 px-lg-2 text-primary-color bg-transparent">Sign In</button>
          </div>

          <div className="offcanvas offcanvas-end w-100" tabIndex="" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className=" container-fluid m-0 offcanvas-header shadow-sm px-0 py-2">
              <div className='container d-flex justify-content-between'>
                <a className="py-1" href="/">
                  <img src={logo2} height={32} alt="logo" />
                </a>
                <button type="button" className='bg-transparent border-0' data-bs-dismiss="offcanvas" aria-label="Close"><img src={close} alt="" /></button>
              </div>
            </div>
            <div className="offcanvas-body container">
              <Form />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
