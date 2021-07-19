import React, {useState, useRef, useEffect} from 'react';

const Card = (props) => {

    const cardRef = useRef(null);
    const [propStyle, setPropStyle] = useState([])
    const [style, setStyle] = useState([])
    const [offsets, setOffsets] = useState( {top: 0,left: 0})
    const [size,setSize] = useState({width:0,height:0})
    const [hoverProperties, setHoverProperties] = useState({perspectiveAmount: 1000, tiltAmount:6, scale:1.1});
    const [hoverStyle, setHoverStyle] = useState({transform: ''})
    const [clickStyle, setClickStyle] = useState({width: '80%',height: '90%',position:'fixed',top: '5%',left: '10%',margin: 'auto',padding: '0', zIndex:'5'})
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const cardElement = document.getElementById(props.section+props.index);
        const top = cardElement.offsetTop;
        const left = cardElement.offsetLeft;
        const width = cardElement.offsetWidth;
        const height = cardElement.offsetHeight;

        if (!(props.hoverProperties === undefined)) {
            const fullStyle = Object.assign({},hoverProperties,props.hoverProperties);
            setHoverProperties(fullStyle)
        }

        setSize({width,height})
        setOffsets({top,left})
        setPropStyle(props.style)
    }, [props.section, props.index, props.hoverProperties, props.style, hoverProperties]);

    const refreshOffsets = () => {
        const cardElement = document.getElementById(props.section+props.index);
        const top = cardElement.offsetTop;
        const left = cardElement.offsetLeft;
        setOffsets({top,left})
    }

    const MouseHover = ({ pageX, pageY}) => {
        if (!isClicked) {
            refreshOffsets();
            const cardWidth = size['width'];
            const cardHeight = size['height'];
            const centerX = offsets['left'] + cardWidth/2;
            const centerY = offsets['top'] + cardHeight/2;
            const mouseX = pageX - centerX;
            const mouseY = (pageY - window.innerHeight) - centerY;
            const rotateX = (hoverProperties['tiltAmount'] * mouseY/(cardHeight/2)).toFixed(1);
            const rotateY = (-hoverProperties['tiltAmount'] * mouseX/(cardWidth/2)).toFixed(1);
            const hoverUpdate = {transform : `perspective(${hoverProperties['perspectiveAmount']}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)
                                    scale3d(${hoverProperties['scale']},${hoverProperties['scale']},${hoverProperties['scale']})`,
                                zIndex:'3',
                                transitionDuration: '1s ease'
            };
            setHoverStyle(hoverUpdate);

            {/*if (isClicked){
                const fullStyle = Object.assign({},propStyle,hoverStyle,clickStyle)
                setStyle(fullStyle);
            }else {
                const fullStyle = Object.assign({},propStyle,hoverStyle);
                setStyle(fullStyle);
            }*/}
            const fullStyle = Object.assign({},propStyle,hoverStyle);
            setStyle(fullStyle);
        }
        
    }

    useEffect(() => {
        console.log(isClicked)
    }, [isClicked])

    const MouseExit = () => {
        setIsClicked(isClicked => false)
        setStyle(propStyle);
    }

    const openCardImg = () => {
        setIsClicked(isClicked => !isClicked)
        if (!isClicked){
            const fullStyle = Object.assign({},propStyle,clickStyle);
            setStyle(fullStyle)

        } else {
            setStyle(propStyle)
        }
    }

    return (
        <div className="card" style={style} key={props.index} id={props.section+props.index} onMouseMove={MouseHover} onMouseLeave={MouseExit} onClick={() =>openCardImg()} ref={cardRef}>
            <div className="card-title">
                <h5>{props.image['title']}</h5>
                <p> {props.image['desc']}</p>
            </div>
            <div className="card-image-cont">
                <img src={props.image['src']} alt="cardImage" className='card-image' />
            </div>
        </div>
    )
}

export default Card;