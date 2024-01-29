import React, { useEffect, useRef } from 'react';
import style from "./index.module.css"
const AnimationOnScroll = () => {
  const html = document.documentElement;
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const frameCount = 69;

  const currentFrame = (index) =>{
    if(index<10){
      index = "0"+index
    }
 return   (
      
      `/anim2/Comp 1_${index
        .toString()
        .padStart(5, '0')}.jpg`
        );
      }

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  const img = new Image();
  img.src = currentFrame(1);

  const updateImage = (index) => {
    img.src = currentFrame(index);
    // contextRef.current.clearRect(0, 0, 1158, 770);
    // contextRef.current.draw();
    contextRef.current.drawImage(img, 0, 0);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    contextRef.current = context;

    canvas.width = 1158;
    canvas.height = 770;

    img.onload = function () {
      context.drawImage(img, 0, 0);
    };

    const handleScroll = () => {
      const scrollTop = html.scrollTop;
      const maxScrollTop = html.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));
    requestAnimationFrame(() => {

        return updateImage(frameIndex + 1)});
    };

    window.addEventListener('scroll', handleScroll);

    preloadImages();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [html]);

  return (

    <div className={style.bodyy}>
    
    <canvas ref={canvasRef}  />;
    </div>
    )
};

export default AnimationOnScroll;
