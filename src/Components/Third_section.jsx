import { OrbitControls, ScrollControls} from '@react-three/drei'
import React from 'react'
import { Canvas } from 'react-three-fiber'
import { Third_section_model } from './Models/Third_section_model'
import Third_secrtion_overlay from './Third_secrtion_overlay'


function ThirdSection() {
  return (
    <div className='Third_section'>
        <Canvas >
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={2} />
            <ScrollControls pages={0} damping={0.25}>
            <Third_secrtion_overlay/>
            {/* <Third_section_model/> */}
            </ScrollControls>
        </Canvas>
    </div>
  )
}

export default ThirdSection