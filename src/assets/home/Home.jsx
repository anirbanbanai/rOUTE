import React from 'react';
import { Outlet } from 'react-router-dom';
import Herader from '../Header/Herader';

const Home = () => {
    return (
        <div>
            <Herader></Herader>
          <Outlet></Outlet>
        </div>
    );
};

export default Home;