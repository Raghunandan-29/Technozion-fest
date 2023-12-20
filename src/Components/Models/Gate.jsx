/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 ./public/models/gate.glb 
Author: chernyi.r (https://sketchfab.com/chernyi.r)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/warp-portal-gate-terrain-warhammer-40k-9d8b62512b0b4833863d5126ff22acfa
Title: Warp Portal Gate Terrain Warhammer 40k
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Gate(props) {
  const { nodes, materials } = useGLTF('./models/gate.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.182}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.lambert2SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.initialShadingGroup} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.lambert28SG} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.lambert31SG} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.lambert32SG} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.lambert33SG} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.lambert34SG} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.lambert35SG} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.lambert36SG} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.lambert37SG} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.lambert37SG} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.lambert37SG} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.lambert38SG} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.lambert39SG} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.lambert41SG} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.lambert41SG} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.lambert41SG} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.lambert41SG} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.lambert41SG} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.lambert41SG} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.lambert41SG} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.lambert41SG} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.lambert41SG} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.lambert41SG} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.lambert42SG} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.lambert43SG} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.lambert43SG} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.lambert43SG} />
        <mesh geometry={nodes.Object_31.geometry} material={materials.lambert43SG} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.lambert44SG} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.lambert45SG} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.lambert45SG} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.lambert45SG} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.lambert6SG} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.lambert7SG} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/gate.glb')
