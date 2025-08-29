import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';

import Nav from '../repeat/nav';

const Header = () => {
    const [ open, setOpen ] = useState(false) 

    return (
        <header>
            <Link to='/'>Kasa</Link>
            <nav>
                <Nav />
                { open && <div id='burger-menu'><Nav /></div>}
                <button id="burger-button" onClick={() => setOpen(!open)}>{open ? <FaTimes /> : <FaBars />}</button>
            </nav>
        </header>
    )
}

export default Header