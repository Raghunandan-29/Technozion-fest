import React from 'react'
import {Main_section_1_model} from './Models/Main_section_1_model'
import { Canvas } from 'react-three-fiber'
import { OrbitControls, ScrollControls } from '@react-three/drei'
import {Main_section_overlay} from './Main_section_overlay_1'

function MainSection() {
  return (
    <div className='Main_section'>
        <div className='Main_section_container'>
        <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1.5}/>
        <directionalLight position={[5, 5, 5]} intensity={1}/>
        <ScrollControls pages={0} damping={0.25}>
        <Main_section_overlay/>
        <Main_section_1_model />
        </ScrollControls>
        </Canvas>
        </div>
    </div>
  )
}

export default MainSection