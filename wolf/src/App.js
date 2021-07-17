import React, {useEffect, useState, useRef} from 'react'
import logo from './logo.svg';
import './App.scss';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {heroAnimation} from './components/heroAnimation.js'

const App = () => {
  const headerRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)


  useEffect(() => {
    gsap.to(headerRef.current, {
      opacity: 1,
      duration: .1,
    });
  }, []);

  useEffect(() => {

  })

  useEffect(() => {
    const element = headerRef.current;
    gsap.fromTo(element.querySelector(".App-content-intro"),
      {
        y:'0'
      },
      {
        y:'50vh',
        duration: 2,
        scrollTrigger: {
          trigger: element.querySelector(".App-top-content"),
          start: '60% center',
          end: 'bottom center',
          markers: 'true',
          scrub:'true',
          scrub:3,
        }
      },
    );
  }, []);

  useEffect(() => {
    const element = headerRef.current;
    gsap.to(element.querySelector(".App-header"),
    {
      position:'fixed',
      top:'0',
      display:"inline-block",
      background: 'transparent',
      width: '100%',
      height: '5%',
      bottom:'0px',
      scrollTrigger: {
        trigger: element.querySelector(".App-top-content"),
        start: 'bottom top',
        end: 'bottom top',
        markers: 'true',
        scrub:'true',
        scrub: .1,
        reverse:'true',
      }
    })
    gsap.to(element.querySelector('.App-header-name'),
    {
      flexDirection:'column',
      background: 'transparent',
      width: '10%',
      height:'100%',
      alignItems: 'flex-start',
      writingMode: 'horizontal-tb',
      marginLeft: '20%',
      scrollTrigger: {
        trigger: element.querySelector(".App-top-content"),
        start: 'bottom top',
        end: 'bottom top',
        markers: 'true',
      },
      scrub:'true',
      scrub: 0,
      reverse:'true',
    })
    gsap.to(element.querySelector('.Social-icons-cont'),
    {
      flexDirection:'row',
      background: 'transparent',
      width: '30%',
      height:'100%',
      writingMode: 'horizontal-tb',
      alignItems: 'center',
      justifyContent:'center',
      margin: '0',
      scrollTrigger: {
        trigger: element.querySelector(".App-top-content"),
        start: 'bottom top',
        end: 'bottom top',
        markers: 'true',
      },
      scrub:'true',
      scrub: 0,
    })
    gsap.to(element.querySelectorAll('.Social-icon-link'),
    {
      margin: '0',
      scrollTrigger: {
        trigger: element.querySelector(".App-top-content"),
        start: 'bottom top',
        end: 'bottom top',
        markers: 'true',
      },
      scrub:'true',
      scrub: 0,
    })
  })
    


  const SlideLeftH3 = (props) => {
    const ref = useRef()
    useEffect(() => {
      gsap.fromTo([ref.current], {
        x:'100vw',
        duration: 4
      }, {
        x:'0'
      })
    })
    return (
      <div ref={ref}>
        <h3>
          {props.text}
        </h3>
      </div>
    )
  }

  return (
    <div className="App" ref={headerRef}>
      <div className="App-header">
        <div className='App-header-name'>
          <h5>wolf</h5>
        </div>
        <div className='Social-icons-cont'>
          <a href="https://github.com/ChristianLorenzen" target="_blank" rel="noopener noreferrer" className='Social-icon-link'><InstagramIcon className='Social-icon-img'/></a>
          <a href="https://github.com/ChristianLorenzen" target="_blank" rel="noopener noreferrer" className='Social-icon-link'><TwitterIcon className='Social-icon-img'/></a>
          <a href="https://github.com/ChristianLorenzen" target="_blank" rel="noopener noreferrer" className='Social-icon-link'><GitHubIcon className='Social-icon-img'/></a>
          <a href="https://github.com/ChristianLorenzen" target="_blank" rel="noopener noreferrer" className='Social-icon-link'><LinkedInIcon className='Social-icon-img'/></a>
        </div>
      </div>
      <div className='App-top-content'>
        <div className='App-content-intro'>
              <SlideLeftH3 text={'Full stack developer with a computer graphics background'}/>
        </div>     
      </div>
      <div className="App-about-me">
      
      </div>
    </div>
  );
}

export default App;
