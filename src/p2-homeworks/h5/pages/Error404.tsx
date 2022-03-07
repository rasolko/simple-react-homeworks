import React from 'react'
import s from './Error404.module.css'
import { NavLink } from 'react-router-dom'
function Error404() {
    return (
        <div className={s.errorContainer}>
            <div className={s.errorContent}>
                <NavLink to="/" className={s.navLink}>Вернуться на главную страницу</NavLink>
            </div>
        </div>
    )
}

export default Error404
