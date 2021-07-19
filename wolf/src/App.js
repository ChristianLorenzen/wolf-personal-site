import React, {useEffect, useState, useRef} from 'react'
import './styles/App.scss';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CardPanel from './components/cardPanel/CardPanel.js';
import Scene from './media/scene.png';

const App = () => {
  const headerRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)


  useEffect(() => {

  }, []);

 
  useEffect(() => {
    const element = headerRef.current;
    gsap.to(element.querySelector(".App-content-intro"),

      {
        y:'50vh',
        duration: 2,
        scrollTrigger: {
          trigger: element.querySelector(".App-top-content"),
          start: '60% center',
          end: 'bottom center',
          scrub:'true',
          scrub:2,
        }
      },
    );
  }, []);

  {/*useEffect(() => {
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
      alignContent: 'center',
      toggleClass:'navActive',
      scrollTrigger: {
        trigger: element.querySelector(".App-top-content"),
        start: 'bottom top',
        markers: 'true',
        toggleActions: "play none none reset",
      }
    })
    gsap.to(element.querySelector('.App-header-name'),
    {
      flexDirection:'column',
      background: 'transparent',
      width: '4vw',
      height:'100%',
      alignItems: 'flex-start',
      writingMode: 'horizontal-tb',
      marginLeft: '1vw',
      marginRight: '1vw',
      scrollTrigger: {
        trigger: element.querySelector(".App-top-content"),
        start: 'bottom top',
        end: 'bottom top',
        markers: 'true',
        toggleActions: "play none none reset",
      },
    })
    gsap.to(element.querySelector('.Social-icons-cont'),
    {
      flexDirection:'row',
      background: 'transparent',
      width: '15%',
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
        toggleActions: "play none none reset",
      },
    })
    gsap.to(element.querySelectorAll('.Social-icon-link'),
    {
      margin: '0',
      scrollTrigger: {
        trigger: element.querySelector(".App-top-content"),
        start: 'bottom top',
        end: 'bottom top',
        markers: 'true',
        toggleActions: "play none none reset",
      },
    })
  }, [])*/}
    


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

  const imageList = [
    {title: 'tree', desc:"PlanetScene", src: Scene},
    {title: 'drift', desc:"PlanetScene", src: Scene},
    {title: 'bullet', desc:"PlanetScene", src: Scene},
    {title: 'industry', desc:"PlanetScene", src: Scene},
    {title: 'process', desc:"PlanetScene", src: Scene},
    {title: 'imagine', desc:"PlanetScene", src: Scene},
    {title: 'relieve', desc:"PlanetScene", src: Scene},
    {title: 'A story of one', desc:"PlanetScene", src:Scene},
    {title: 'difference', desc:"PlanetScene", src: Scene},
    {title: 'Slow Motion', desc:"2021. Herschel Designs. Artwork for Slow Motion out now on Soundcloud", src: Scene},
    {title: 'encourage', desc:"PlanetScene", src: Scene},
    {title: 'dose', desc:"PlanetScene", src: Scene},
    {title: 'tree', desc:"PlanetScene", src: Scene},
    {title: 'drift', desc:"PlanetScene", src: Scene},
    {title: 'bullet', desc:"PlanetScene", src: Scene},
    {title: 'industry', desc:"PlanetScene", src: Scene},
    {title: 'process', desc:"PlanetScene", src: Scene},
    {title: 'imagine', desc:"PlanetScene", src: Scene},
    {title: 'relieve', desc:"PlanetScene", src: Scene},
    {title: 'A story of one', desc:"PlanetScene", src:Scene},
    {title: 'difference', desc:"PlanetScene", src: Scene},
    {title: 'Slow Motion', desc:"2021. Herschel Designs. Artwork for Slow Motion out now on Soundcloud", src: Scene},
    {title: 'encourage', desc:"PlanetScene", src: Scene},
    {title: 'dose', desc:"PlanetScene", src: Scene},
  ];

  const card = {title: 'a', desc: 'testing', src: Scene};
  

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
        <CardPanel images={imageList} />
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
