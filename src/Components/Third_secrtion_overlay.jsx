import React, {useState} from 'react'
import { OrbitControls, Scroll } from '@react-three/drei'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image_1 from "./Models/image1.jpeg"
import image_2 from "./Models/image2.jpeg";
import image_3 from "./Models/image3.jpeg";
import { Third_section_model } from './Models/Third_section_model'
import hologram from "./Models/hologram.png";

const images = [image_1, image_2, image_3]; // Add your image URLs here


function Third_secrtion_overlay() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [rotationY, setRotationY] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [rotateAnimation, setRotateAnimation] = useState(false);
    const [invertImage,setInvertImage]= useState(false);


  const handlePrev = () => {
    rotateAndChangeImage('left');
    setRotationY((prevRotationY) => prevRotationY - 90); // Adjust the rotation angle as needed
    setRotateAnimation(true);
  };

  const handleNext = () => {
    rotateAndChangeImage('right');
    setRotationY((prevRotationY) => prevRotationY + 90); // Adjust the rotation angle as needed
    setRotateAnimation(true);
  };
   
  // const rotateAndChangeImage = (direction) => {
  //   setRotation(direction === 'right' ? -180 : 180);
  //   setInvertImage(true);
  //   setTimeout(() => {
  //     setCurrentIndex((prevIndex) => {
  //       if (direction === 'right') {
  //         return (prevIndex + 1) % images.length;
  //       } else {
  //         return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
  //       }
  //     });
  //   }, 2500); // Adjust the duration of the rotation
  
  //   setTimeout(() => {
  //     setRotation(0);
  //     setRotateAnimation(false);
  //     setInvertImage(false);
  //   }, 5000);
  const rotateAndChangeImage = (direction) => {
    setRotation(direction === 'right' ? -180 : 180);
  
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === 'right') {
          return (prevIndex + 1) % images.length;
        } else {
          return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
        }
      });
  
      setRotation(0);
      setInvertImage(true);
  
      setTimeout(() => {
        setInvertImage(false);
        setRotateAnimation(false);
      }, 1500); // Adjust the duration of the second rotation
    }, 1500); // Adjust the duration of the first rotation
  };

    // setTimeout(() => {
    //   setCurrentIndex((prevIndex) => {
    //     if (direction === 'right') {
    //       return (prevIndex + 1) % images.length;
    //     } else {
    //       return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
    //     }
    //   });
    //   setRotation(0);
    //   setRotateAnimation(false);
    // }, 5000); // Adjust the duration of the rotation
  // };

  return (
    <>
    <Scroll html>
        <div className='third_section-slider'>
        <div className='left-arrow-section'>
            <FaArrowLeft className='left-arrow'  onClick={handlePrev}/>
        </div>
        <div className='slider-container' id='slider-container'>
          <div className={`image-section ${rotateAnimation ? 'rotate-animation' : ''} `}>
            <img  className={` slider-img ${invertImage ? 'invert-image' : ''}`}src={images[currentIndex]} alt={`slide-${currentIndex}`}/>
            </div>
        </div>
        <div className='rigth-arrow-section'>
            <FaArrowRight className='right-arrow' onClick={handleNext}/>
        </div>
        </div>
          <div className='hologram-light'>
              {/* <img className='hologram-img' src={hologram} alt="" /> */}
            {/* <div className='light-bar-1'></div> */}
            <div className='larger-circle-section'>
              <div className='larger-circle-outter'></div>
          </div>
          <div className='left-bar-section'>
              <div className='left-bar'></div>
          </div>
          <div className='right-bar-section'>
              <div className='right-bar'></div>
          </div>
          <div className='small-circle-section'>
              <div className='small-circle-outter'>
                  {/* <div className='small-circle-inner'></div> */}
              </div>
          </div>
          </div>
        </Scroll>
        <OrbitControls enableRotate={false} enableZoom={false}/>
        <Third_section_model rotationY={rotationY}/>
    </>
  )
}

export default Third_secrtion_overlay