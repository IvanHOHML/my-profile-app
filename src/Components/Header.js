import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { MenuOutlined, Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Header.css'


const Header = () => {
    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }
    return (
        <div className='header'>
            <div className='menu-icon'>
                <MenuOutlined className='menu' onClick={showMenu} />
            </div>
            <nav className={active ? 'slider active' : 'slider'}>
                <ul>
                    <div className='closed'>
                        <Close className='close' onClick={showMenu} />
                    </div>
                    <li>
                        <Link to='/Home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Projects'>Projects</Link>
                    </li>
                    <li>
                        <Link to='/FindMe'>Find Me</Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Header;
