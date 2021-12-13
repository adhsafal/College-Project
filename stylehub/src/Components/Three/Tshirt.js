import React, { Suspense, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import { useGLTF, OrbitControls, Stars } from '@react-three/drei'
import { proxy, useProxy } from 'valtio';


// const state = proxy({
//     current: null,
//     items: {
//         Shirt: '#ffffff',
//         Collar: '#ffffff',
//         Sleeve: '#ffffff',
//     }
// });


function Shirts(props) {
    const group = useRef()
    // const snap = useProxy({ state });
    const { nodes, materials } = useGLTF('/tshirt.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <group position={[0, 1, 0.56]} >
                <mesh geometry={nodes['T-shirt_2'].geometry} material={materials.Collar} />
                <mesh geometry={nodes['T-shirt_1'].geometry} material={materials.Shirt} />
                <mesh geometry={nodes['T-shirt_3'].geometry} material={materials.Sleeve} />
                {/* group.scale.set(2,2,2); */}
            </group>
        </group>
    )
}





const Tshirt = () => {
    return (
        <div>
            <Canvas>
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                    <Shirts style={{ height: '200px' }} />
                    <Stars />
                </Suspense>
                <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={true} />
            </Canvas>
        </div>
    )
}

export default Tshirt
