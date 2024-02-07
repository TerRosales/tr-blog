import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header/Header.css';

const SignUp = () => {
  return (
   <div className="min-h-screen mt-20">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
      {/* left */}
    <div className="">
        <Link Link to='/' className="app__logo">
          Pocket&nbsp;
          <span className='style-span'>&#123;</span>&nbsp;<span className='logo__span'> Items: &infin;</span>&nbsp;
          <span className='style-span'>&#125;</span>
        </Link>
    </div>
    {/* right */}
    <div className=""></div>
    </div>
   </div>
  )
}

export default SignUp