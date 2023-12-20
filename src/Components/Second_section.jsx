import React from 'react'
import { Second_section_model } from './Models/Second_section_model'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import { Puzzle_Model } from './Models/Puzzle_model'

function SecondSection() {
  return (
    <div className='Second_section'>
        <Canvas>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={1} />
            <Puzzle_Model/>
        </Canvas>
    </div>
  )
}

export default SecondSection