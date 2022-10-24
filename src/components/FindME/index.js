import React from 'react'
import { FindMEData } from './FindMEData'
import 'aos/dist/aos.css'
import './findme.css'

function FindMe() {
            return (
                        <div className='findmeContainer'>
                                    {FindMEData.map((item, index) => {
                                                return <div className='findmeBox' data-aos={item.aosData} key={index}>
                                                            <div>
                                                                        <div className='findmeIcon'>{item.icon}</div>
                                                                        <h1 className='findmeH1'>{item.name}</h1>
                                                            </div>
                                                            <p>{item.description}</p>
                                                            <a href={item.link} target="_blank" rel="noreferrer">Facebook</a>
                                                </div>
                                    })}
                        </div>
            )
}

export default FindMe