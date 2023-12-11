import React, { useState } from 'react';
import "./lll.css";
import { FaStar } from 'react-icons/fa';

const colors = {
    orange: "#ffba5a",
    grey: "#a9a9a9"
}

function ListRegioncentre() {

    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = React.useState(0);
    const [hoverValue, setHoverValue] = React.useState(undefined);

    const handleClick = value => {
        setCurrentValue(value)
    };

    const handleMouseOver = value => {
        setHoverValue(value)
    }

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    return (

        <div>
            <h2 style={{ color: '#a67003', textAlign: 'center', fontSize: '50px' }}>Liste of Region center</h2>

            <div className="searchItem">
                <img
                    src=""
                    alt=""
                    className="siImg" />
                <div className="siDesc">
                    <h1 className="siTitle">center 1</h1>
                    <span className="siDistance">50m from center</span>
                    <span className="siSubtitle"> Relaxed rooms & suites </span>
                    <span className="siTaxiOp"> +212 5288-94168</span>
                </div>
                <div className="siDetails">
                    <div className="siRating">
                        {stars.map((_, index) => {
                            return (
                                //Rating
                                <FaStar
                                    key={index}
                                    style={{ cursor: 'pointer' }}
                                    size={24}
                                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                />
                            )
                        })}

                        {/* Add your own rating component */}

                    </div>
                    <div className="siDetailTexts">

                        <button className="siCheckButton">See Details</button>
                    </div>
                </div>
            </div></div>

    )

}

export default ListRegioncentre;