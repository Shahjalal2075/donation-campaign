import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Root.css';

const Root = () => {
    return (
        <div className='container mx-auto font-inter'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;