import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { proxy, usePorxy } from 'valtio';


// const state = proxy({
//   current: null,
//   items: {
//     Bottom_base: "#ffffff",
//     bottoms: "#ffffff",
//     shirt: "#ffffff",
//     collar_1: "#ffffff",
//     collar_2: "#ffffff",
//   }
// });

function Shirt({ ...props }) {
  const group = useRef()
  // const snap = usePorxy(state);
  const { nodes, materials } = useGLTF('shirt.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -4.17, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh geometry={nodes.collar_1.geometry} material={nodes.collar_1.material} />
        <mesh geometry={nodes.collar_2.geometry} material={materials['Material.003']} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
        <mesh geometry={nodes.shirt.geometry} material={nodes.shirt.material} />
        <mesh geometry={nodes.shirt_1.geometry} material={materials['back.002']} />
        <mesh geometry={nodes.shirt_2.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.shirt_3.geometry} material={materials['hand up']} />
        <mesh geometry={nodes.shirt_4.geometry} material={materials.back} />
        <mesh geometry={nodes.shirt_5.geometry} material={materials['hand up.001']} />
      </group>
      <mesh
        geometry={nodes.Bottom_base.geometry}
        material={nodes.Bottom_base.material}
        position={[0, -4.17, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      />
      <mesh
        geometry={nodes.bottoms.geometry}
        material={nodes.bottoms.material}
        position={[0, -4.17, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.05}
      />
    </group>
  )
}

const Mode = () => {
  return (
    <div>
      <Canvas style={{ background: '#171717' }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Shirt />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Mode;
