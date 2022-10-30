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
            <div className='typewriter-name'>
                <p class='line anim-typewriter'>Ivan.Ho.</p>
            </div>
            <div className="menu-icon">
                <MenuOutlined className="menu" onClick={showMenu} />
            </div>
            <nav className={`dropdown-menu ${active ? 'active' : 'inactive'}`}>
                <ul>
                    <div className='closed'>
                        <Close className='close' onClick={showMenu} />
                    </div>
                    <DropDownItem route="/Home" text="Home" />
                    <DropDownItem route="/Projects" text="Projects" />
                    <DropDownItem route="/Message" text="Send Me Message" />
                </ul>
            </nav>
        </div>

    )
}

function DropDownItem(props) {
    return (
        <li>
            <Link to={props.route}>{props.text}</Link>
        </li>
    )
}

export default Header;
