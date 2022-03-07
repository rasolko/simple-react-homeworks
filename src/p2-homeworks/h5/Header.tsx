import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
function Header() {
    const [navMenu, setNavMenu] = useState<boolean>(false);
    const changeNavMenu = () => {
        setNavMenu(!navMenu);
    }
    return (
        <div className={s.header}>
            <div className={s.navButton} onClick={changeNavMenu}>
                |||
            </div>
            <div className={navMenu ? `${s.navLinkContainer} ${s.navLinkContainerActive}` : s.navLinkContainer}>
                <NavLink to="/pre-junior" className={s.navLink} onClick={changeNavMenu}>Pre-junior</NavLink>
                <NavLink to="/junior" className={s.navLink} onClick={changeNavMenu}>Junior</NavLink>
                <NavLink to="/junior-plus" className={s.navLink} onClick={changeNavMenu}>Junior-plus</NavLink>
            </div>

        </div>
    )
}

export default Header
