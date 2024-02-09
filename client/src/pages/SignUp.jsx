import React, { useState } from 'react';
import {  Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  }
  console.log(formData);
  return (
   <div className="min-h-screen mt-20">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
      {/* left */}
    <div className="flex-1">
        <Link to='/' className="text-[30px] font-bold dark:text-white">
          Pocket&nbsp;
          <span className='text-teal-500 text-[30px]'>&#123;</span>&nbsp;<span className='px-2 py-1 text-[32px] rounded-lg text-white font-bold bg-gradient-to-b from-slate-900 to-teal-700 '> Items: &infin;</span>&nbsp;
          <span className='text-teal-500 text-[30px]'>&#125;</span>
        </Link>
        <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores optio deleniti possimus voluptatum? Ipsa itaque tempore ut quis, laboriosam.</p>
    </div>
    {/* right */}
    <div className="flex-1">
      <form className='flex flex-col gap-5'>
        <div>
          <Label value='Username'/>
          <TextInput 
            type='text'
            placeholder='Enter valid username'
            id='username' onChange={handleChange}/>
        </div>
        <div>
          <Label value='Email'/>
          <TextInput 
            type='email'
            placeholder='Enter valid email address'
            id='email' onChange={handleChange}/>
        </div>
        <div>
          <Label value='Password'/>
          <TextInput 
            type='password'
            placeholder='Enter valid password'
            id='password'  onChange={handleChange}/>
        </div>
        <Button
          gradientMonochrome='failure'
          outline
          type='subit'>Submit
        </Button>
      </form>
      <div className='flex gap-2 text-sm mt-5'>
        <span>Already registered?</span>
        <Link to='/sign-in'
              className='text-blue-500'>&nbsp;Sign In
        </Link>
      </div>
    </div>
    </div>
   </div>
  )
}

export default SignUp