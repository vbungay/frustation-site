import React from 'react'
import './SectionThree.scss'
import imgLeft from '../../../assets/images/imgLeft.jpg'
import imgRight from '../../../assets/images/imgRight.jpg'
import SectionFour from '../sectionFour/SectionFour'

const SectionThree = () => {
    return (
        <>
            <div className="section">
                <div className="left">
                    <p>
                        I had always been passionate about web development, spending countless hours honing his coding skills and
                        crafting websites. Heck, I even studied abroad just to turn my passion into a successful career!
                    </p>
                    <img src={imgLeft} alt="" srcset="" />
                </div>
                <div className="right">
                    <img src={imgRight} alt="" srcset="" />
                    <p>
                        As I embarked on this hellish job search, I soon realized that landing a web development position was not as easy as I had imagined.
                        Days turned into weeks, and weeks into months, but my inbox remained empty, devoid of job offers or even interview
                        invitations. Doubt began to seep into my mind, and my once fiery passion for web development began to wane.
                    </p>
                </div>
            </div>
            <SectionFour />
        </>
    )
}

export default SectionThree