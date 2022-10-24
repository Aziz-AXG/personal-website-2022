import React from 'react'
import 'aos/dist/aos.css'
import SkillProgress from './SkillProgress';
import { SkilesData, MainSkiles } from './SkilesData'
import './skill.css'

function Skills() {
            return (
                        <div id='Skills' className='SkillsContener' data-aos='zoom-in'>
                                    <h1>My Skills</h1>
                                    <div className='skillBox'>
                                                {MainSkiles.map((item, index) => {
                                                            return <div className='skileRank' data-aos="zoom-in" kay={index}>
                                                                        <p>{item.name}</p>
                                                                        <SkillProgress progressDone={item.proportion} />
                                                            </div>
                                                })}
                                    </div>
                                    <div className='skillBox' data-aos="fade-down"
                                                data-aos-easing="linear"
                                                data-aos-duration="1500">
                                                <h2 data-aos="zoom-in">Other skilles</h2>
                                                <div className='otherSillesList' >
                                                            {SkilesData.map((item, index) => {
                                                                        return <div key={index} data-aos='zoom-in'>
                                                                                    {item.icon}
                                                                                    <p>{item.name}</p>
                                                                        </div>
                                                            })}
                                                </div>
                                    </div>
                        </div>
            )
}

export default Skills