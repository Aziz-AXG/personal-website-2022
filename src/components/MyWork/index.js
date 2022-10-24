import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import { MyWorkData } from './MyWorkData'
import './myprojects.css'

function MyWork() {
            return (
                        <div id='MyWork' className='projectsContener' data-aos="zoom-in">
                                    <h1>My Work</h1>
                                    <div className='projectsBox' >
                                                {MyWorkData.map((itam, index) => {
                                                            return <div className='projectList' key={index} data-aos="flip-up">
                                                                        <input type="image" img className='projectIMG' alt={`Project${++index}`} src={itam.img} />
                                                                        <a className='onHoverView' href={itam.link} rel="noreferrer" target="_blank">
                                                                                    <h1>{itam.typeofWork}</h1>
                                                                                    <p>VIEW <AiFillEye /> </p>
                                                                        </a>
                                                            </div>
                                                })}
                                    </div>
                        </div >

            )
}

export default MyWork