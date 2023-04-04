import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Herader = () => {
    return (
        <div className='text-2xl font-bold'>
            <Link className='mr-3' to='/'>Home</Link>
            <Link className='mr-3' to='about'>about</Link>
            <Link className='mr-3' to='contact'>Contact</Link>
            <Link className='mr-3' to='meal'>My-Meal</Link>
        </div>
    );
};

export default Herader;