import React, { useState } from 'react'
import { AiFillHome, AiTwotoneSchedule, AiTwotoneProject, AiFillContainer } from 'react-icons/ai'
import { Link } from 'react-scroll'
import 'aos/dist/aos.css'
import './navbar.css'

const setLight = () => {
    document.documentElement.setAttribute("theme", 'light')
}

const setDark = () => {
    document.documentElement.setAttribute("theme", 'dark')
}


const toggleTheme = (e) => {
    if (e.target.checked) {
        setLight();
    } else {
        setDark();
    }
};

const Navbar = () => {
    const [active, setActive] = useState('')


    return (
        <nav className='navbarcontener' data-aos="fade-right">
            <div className='navbarBox'>
                <Link to='home' spy={true} smooth={true} onClick={() => setActive('home')}
                    className={active === 'home' ? 'active' : ''}>
                    <AiFillHome />
                </Link>
                <Link to='Skills' spy={true} smooth={true} onClick={() => setActive('Skills')}
                    className={active === 'Skills' ? 'active' : ''} >
                    <AiTwotoneSchedule />
                </Link>
                <Link to='MyWork' spy={true} smooth={true} onClick={() => setActive('MyWork')}
                    className={active === 'MyWork' ? 'active' : ''} >
                    <AiTwotoneProject />
                </Link>
                <Link to='Conatcts' spy={true} smooth={true} onClick={() => setActive('Conatcts')}
                    className={active === 'Conatcts' ? 'active' : ''} >
                    <AiFillContainer />
                </Link>
                <label className="switch">
                    <input type="checkbox" onChange={toggleTheme} />
                    <span className="slider round"></span>
                </label>
            </div>
        </nav>
    );
};

export default Navbar;
