import './App.css'
import { useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

export default function App() {
  useScrollToTop();
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer/>
      <ScrollToTop className='rounded-circle d-lg-none' style={{ right: '20px', bottom: '20px' }} smooth width='40px' height='40px' component={<svg width="20" style={{ marginBottom: '1px' }} height="20" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.0067 11.08C14.3334 10.7533 14.3334 10.2266 14.0067 9.89997L8.4667 4.35997C8.2067 4.09997 7.7867 4.09997 7.5267 4.35997L1.9867 9.89997C1.66003 10.2266 1.66003 10.7533 1.9867 11.08C2.31337 11.4066 2.84003 11.4066 3.1667 11.08L8.00003 6.2533L12.8334 11.0866C13.1534 11.4066 13.6867 11.4066 14.0067 11.08Z" fill="inherit" />
      </svg>} />
    </>
  )
}

