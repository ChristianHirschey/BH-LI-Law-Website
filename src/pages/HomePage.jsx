import React from 'react';
import homepagebg from '../assets/pexels-mikhail-nilov-8730998.jpg';

// FIXME: Add sliding display of testimonials, brief list of services, contact info/form and map API

function HomePage() {
  return (
    <>
    <div className="relative w-full blur brightness-50" style={{ height: '75vh', backgroundImage: `url(${homepagebg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

    <div className="container mx-auto p-4 text-white absolute inset-0 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl md:text-6xl font-bold">Welcome to Our Law Office</h1>
      <p className="text-lg md:text-4xl mt-4">The attorneys at the Law Offices of Baaden & Hirschey have over 40 years of combined experience practicing law throughout 
        Long Island. We have extensive experience in Divorce, Divorce Mediation, and Family Court matters. With a free consultation and payment plans available, 
        we strive to respond to the needs of our clients. You can expect to be kept informed about your case throughout the entire process, get timely responses 
        from our office, and receive personalized service. Call us: 631-319-6800.</p>
    </div>
    </>
  );
}

export default HomePage;
