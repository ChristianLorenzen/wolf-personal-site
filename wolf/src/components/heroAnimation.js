import React, {useEffect, useState, useRef} from 'react';
import {gsap, Power3} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
let timeline = gsap.timeline()

const HeroAnimation = (NavRef,TextRef) => {
    timeline
    .to(NavRef.current, {
        delay: 1,
        duration: .6,
    }).to(TextRef.current, {
        duration: .3,
        y: 50,
    }
    );
};

export default HeroAnimation;