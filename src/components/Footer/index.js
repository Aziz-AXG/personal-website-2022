import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai'
import './footer.css'

const year = new Date().getFullYear();

function Footer() {
            return (
                        <footer className='footerbox'>
                                    <h1 data-aos='zoom-in'>
                                                Aziz Falah
                                    </h1>
                                    <div data-aos='zoom-in'>
                                                <a href='https://github.com/AXG-coder' target="_blank" rel="noreferrer"><AiFillGithub /></a>
                                                <a href='https://www.linkedin.com/in/aziz-falah' target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                                                <a href='https://www.facebook.com/AzizXgamer' target="_blank" rel="noreferrer"><AiFillFacebook /></a>
                                    </div>
                                    <h2 data-aos='zoom-in'>©<span>{year}</span> by Aziz Falah</h2>
                        </footer>
            )
}

export default Footer