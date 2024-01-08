import React from 'react';
// import './SpriteAnimation.css'; // Import the CSS file for styling


const Sprite = ({label,imageSrc, width=100, height=100, duration, startPos, endPos, frameCount, loop}) =>{

    const animationStyles = {
        width:`${width}px`,
        height: `${height}px`
    }

    const spriteStyle = {
        width: '100%', 
        height: '100%',
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        animation: `animateSprite ${duration}s steps(${frameCount}) ${loop?'':'1 forwards'}`
    }

    const keyframes = `
      @keyframes animateSprite {
        from {
          background-position: ${startPos?startPos:0}px 0;
        }
        to {
          background-position: ${endPos?endPos:frameCount*width}px 0; /* Adjust based on the total width of your sprite sheet */
        }
      }
    `

    return(<><>{label}</><div>
    <div style={animationStyles}>
      <div style={spriteStyle}></div>
      <style>{keyframes}</style>
    </div>
    </div>
    </>)

}

export default Sprite;