import React, {useRef,useEffect, useState} from 'react';
import doorJson from "../Constants/Doors.json"
import Door from "./Door"
import  "../Styles/GalleryStyle.css"
import Character from './Character';

const Gallery = () =>{

    const scrollContainer = useRef();

    const doorObjs = doorJson.DoorConfig.Doors;
    const [activeDoor, setActiveDoor]= useState(doorObjs.length/2);
    const [position, setPosition] = useState(1000);
    const movementPace = 80;

    useEffect(() => {
        const handleKeyDown = (e) => {
          console.log("ActiveDoor is: ", activeDoor);
          if (e.key === 'ArrowLeft') {
            scrollContainer.current.scrollLeft -= 80; // Adjust the scroll amount as needed
         
            if(activeDoor > 0){
              setActiveDoor(activeDoor-1);
              setPosition(position-movementPace);
            }
             
          } else if (e.key === 'ArrowRight') {
            scrollContainer.current.scrollLeft += 80; // Adjust the scroll amount as needed
           
            if(activeDoor < doorObjs.length-1){
              setActiveDoor(activeDoor+1);
              setPosition(position+movementPace);
            }
          }else if(e.key === 'ArrowUp'){
            window.open(doorObjs[activeDoor].link);
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [activeDoor, doorObjs.length, position]);


    return(<>
    <Character
    positionX={position}
    />
    <div className='doors' tabIndex={0}  ref={(scrollContainer)}>
{doorObjs.map((door) =><Door  key={door.id} name={door.doorName} link={door.link} spriteFile={door.spriteFile} isActive={(activeDoor+1)==door.id}></Door>)}
</div>


    </>)


}

export default Gallery;