import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <ul className = "nav-bar">
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/episodes'>Episodes</Link>
            </li>
            <li>
                <Link to='/characters'>Characters</Link>
            </li>
        </ul>

    )
}


export default NavBar;