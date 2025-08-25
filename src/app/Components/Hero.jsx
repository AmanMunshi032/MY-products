import React from 'react';

const Hero = () => {
    return (
         <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-16">
    <img
      src="https://i.ibb.co.com/qFcPm2ZV/OILHK60.jpg"
      className="lg:max-w-md rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-7xl font-bold "><i>Roco Wireless <br></br>Headphone</i></h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in.<br></br> Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. 
      </p>
      <button className="px-10 py-3 bg-white text-black font-extrabold rounded-xl">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Hero;