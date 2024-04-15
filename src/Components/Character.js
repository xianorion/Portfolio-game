import React, { useEffect, useState } from 'react';
import '../Styles/SpriteAnimation.css';
import '../Styles/Character.css';

const walkingLeft = 'walking-mack-sprite';
const idle = 'idle-mack-sprite';
const entering = 'back-mack-sprite';

const Character = ({positionX}) =>{
    const [charAction, setCharAction] = useState(idle);
    const [charStyle, setCharStyle] = useState(null);


    const flippedWalk = {
        transform: 'scaleX(-1)'
    }

    useEffect(()=>{

        const handleKeyDown = (e) =>{
            // console.log("where am i?", characterRect);

            if(e.key === 'ArrowLeft'){
               setCharAction(walkingLeft); 
              
            }else if(e.key === 'ArrowRight'){
                setCharAction(walkingLeft);
                setCharStyle(flippedWalk);
            }else if(e.key ==='ArrowUp'){
                setCharAction(entering);
            }

        }

        const handleKeyUp = (e) =>{
            setCharAction(idle); 
            setCharStyle(null);

        }


        document.addEventListener('keydown',handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);


        return () =>{
            document.removeEventListener('keydown',handleKeyDown);
            document.addEventListener('keyup', handleKeyUp);
        }

    },[])



    return(
        <div  className='character'
        style={{
            left: `${positionX}px`,
          }}
        >
            <div className="character-sprite">
            <div className={charAction} style={charStyle}/>
            </div>
        </div>
       
    );

}

export default Character;