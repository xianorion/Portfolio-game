import React, { useState} from 'react';
import  "../Styles/GalleryStyle.css"
import  '../Styles/SpriteAnimation.css';

const Door = ({name, link}) =>{

    const [doorOpen, setDoorOpen] = useState(false);

    const openDoor = () =>{
        console.log("opening door");
        setDoorOpen(true);
    }

    const closeDoor = () =>{
        console.log("closing door...");
        setDoorOpen(false);
    }

    const onClick = () =>{
        window.open(link);
    }

    return(<div className='door'  >
    <h6>{name}</h6>
     <div className="sprite-animation">
    <div className={doorOpen? `open-door-sprite`:`closed-door-sprite`}
    onMouseEnter={openDoor}
    onMouseLeave={closeDoor}
    onClick={onClick}
    />

    </div> 
    
    </div>);

}

export default Door;