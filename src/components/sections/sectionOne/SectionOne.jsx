import React from 'react'
import './SectionOne.scss'
import img1 from '../../../assets/images/img1.jpg'
import img2 from '../../../assets/images/img2.jpg'
import img3 from '../../../assets/images/img3.jpg'
import SectionTwo from '../sectionTwo/SectionTwo'

const SectionOne = () => {
    return (
        <>
            <div className="container">
                <div className="grid1">
                    <div className="img">
                        <img src={img1} alt="" />
                    </div>
                    <h4>Lost Sight</h4>
                    <p>
                        "Amidst the chaos, he lost sight of the vibrant web of his once impassioned code."
                    </p>
                </div>
                <div className="grid2">
                    <div className="img">
                        <img src={img3} alt="" />
                    </div>
                </div>
                <div className="grid3">
                    <div className="img">
                        <img src={img2} alt="" />
                    </div>
                    <h4>Fading Canvas</h4>
                    <p>
                        "Artistic embers smoldered, as the cigarette became a symbol of his waning passion for creation."
                    </p>
                </div>
            </div>
            <SectionTwo />
        </>
    )
}

export default SectionOne