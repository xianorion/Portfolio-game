import React, {useRef,useEffect} from 'react';
import doorJson from "../Constants/Doors.json"
import Door from "./Door"
import  "../css/GalleryStyle.css"

const Gallery = () =>{

    const scrollContainer = useRef();

    const doorObjs = doorJson.DoorConfig.Doors;
    
    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === 'ArrowLeft') {
            scrollContainer.current.scrollLeft -= 50; // Adjust the scroll amount as needed
          } else if (e.key === 'ArrowRight') {
            scrollContainer.current.scrollLeft += 50; // Adjust the scroll amount as needed
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, []);
    return(<>
    
    <div className='doors' tabIndex={0}  ref={(scrollContainer)}>
{doorObjs.map(door =><Door  key={door.id} name={door.doorName} link={door.link}></Door>)}
</div>


    </>)


}

export default Gallery;