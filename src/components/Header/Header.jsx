import React from 'react';

const Header = () => {

    const links = <>
        <li><a>Link</a></li>
        <li><a>Link</a></li>
        <li><a>Link</a></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Header;