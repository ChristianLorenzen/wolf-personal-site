import React, {useEffect, useRef, useState} from 'react';
import {gsap} from 'gsap';
import '../../styles/cardTilt.scss';


const TiltOnHover = (props) => {
    const card = document.getElementsByClassName('.card')[0];

    console.log(card)

    useEffect(() => {
        card.addEventListener('mousemove', calculateTilt)

        return () => card.removeEventListener('mousemove', calculateTilt);
    }, [])

    const calculateTilt = (props) => {
    
        console.log("caulculating Tilt");
    }
    

    return (
        <div>
            <p>Added TiltOnHover</p>
        </div>
    )
}

export default TiltOnHover;


