import { OrbitControls,Scroll,ScrollControls } from '@react-three/drei'
import React,{useEffect,useState} from 'react'
import { Canvas } from 'react-three-fiber'
import { WoodenGate} from './Components/Models/WoodenGate'
import { Gate } from './Components/Models/Gate'
import { Portal } from './Components/Models/Portal'
//import { useAnimation } from './Components/Models/Portal_Animate_state';
import tz from './Components/Models/tz.jpeg'
import { useNavigate } from 'react-router-dom';


function FirstPage() {
    const [isTitle,setIsTitle] = useState(false);
    const [isLogoVisible, setIsLogoVisible] = useState(false);
    const navigate = useNavigate();
    // const handleButtonClick = () => {
    //     // Change route to '/first' when the button is clicked
    //     navigate('/second');
    //   };
    
    useEffect(() => {
        // Function to set isVisible to true after a delay of 6000 milliseconds (6 seconds)
        const showDivAfterDelay = () => {
          setTimeout(() => {
            setIsTitle(true);
          }, 6500);
          // After 14 seconds, hide the title by setting isVisible to false
          setTimeout(() => {
            setIsTitle(false);
          }, 14000);
        };
    
        // Call the function to start the countdown when the component mounts
        showDivAfterDelay();
    
        // Clean up the timeout if the component unmounts before the delay is complete
        return () => clearTimeout(showDivAfterDelay);
      }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

    useEffect(() => {
      // Function to set isVisible to true after a delay of 6000 milliseconds (6 seconds)
      const showDivAfterDelay = () => {
        setTimeout(() => {
          setIsLogoVisible(true);
        }, 14500);
      };
  
      // Call the function to start the countdown when the component mounts
      showDivAfterDelay();
  
      // Clean up the timeout if the component unmounts before the delay is complete
      return () => clearTimeout(showDivAfterDelay);
    }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

    const logoStyles= {opacity: isLogoVisible?1:0};
    const titleStyles= {opacity: isTitle?1:0};
    const handleButtonClick = () => {
      // Change route to '/first' when the button is clicked
      navigate('/home');
    };
  return (
    <>
    <Canvas style={{backgroundColor: 'black'}}>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={1}/>
        <directionalLight position={[0,1,0]}intensity={5}/>
        <directionalLight position={[1,0,0]}intensity={10}/>
        <directionalLight position={[0,0,0]}intensity={10}/>
        <ScrollControls pages={0} damping={0.25}>
        {/* <WoodenGate/> */}
        {/* <Gate /> */}
        <Portal />
        <Scroll html>
            <div className="first-page-text" style={titleStyles}>
                <h1>Technozion</h1>
                    {/* <div className='first-page-logo'>
                        <img className="tz-logo" style={logoStyles} src={tz}/>
                    </div>
                <div className='move-button' style={logoStyles} onClick={handleButtonClick}>MOVE</div> */}
            </div>
            <div className='second-page-section' style={logoStyles} >
              <div className='second-page-container'>
                <div className='second-page-name'><h1>NITW</h1></div>
                <div className='second-page-tag'><p>presents</p></div>
                  <div className='second-section-tilte'>
                      <h2>TZ</h2>
                  </div>
                  <button className='btnGlowEnter' onClick={handleButtonClick}>ENTER</button>
                  <div>
                  </div>
              </div> 
            </div> 
        </Scroll>
        </ScrollControls>
    </Canvas>
</>
  )
}

export default FirstPage