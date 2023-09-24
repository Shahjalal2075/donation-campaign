import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {


    return (
        <div className="navbar bg-[#fff] my-6">
            <div className="flex-1">
                <a href="/"><img className='lg:w-40 md:w-40 w-28' src="https://i.ibb.co/LNLphRq/Logo.png" alt="" /></a>
            </div>
            <div className="flex">
                <div className=" flex gap-8 menu menu-horizontal px-1 text-[#0B0B0B] font-normal text-base">
                    <NavLink to={"/"} exact activeClassName="active" className="all-time">Home</NavLink>
                    <NavLink to={"/donation"} activeClassName="active" className="all-time">Donation</NavLink>
                    <NavLink to={"/statistics"} activeClassName="active">Statistics</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;