import React, {useRef} from 'react';
import '../../styles/transparentCardPanel.scss';
import Card from './Card.js'
import background from '../../media/cam1.jpg'
const CardPanel = (props) => {
    const CardPanelRef = useRef(null);

    if (props.images.length > 0) {
        return (
            <div className='card-panel-cont' >
                <div className='card-panel' style={{background: `url(${props.backgroundImage})`}}>
                    {props.images.map((image, index) => (
                        <Card image={image} key={index} index={index} section={"CardPanel"} style={{zIndex:'2'}}/>
                    ))}
                </div>
            </div>
        )
    } else {
        return (
            <div className='card-panel-cont' ref={CardPanelRef}>
                <div className='card-panel'>
                    <h5 style={{color:'white'}}>No content here</h5>
                </div>
            </div>
        )
    }
}

export default CardPanel;