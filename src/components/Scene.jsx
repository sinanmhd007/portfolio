import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function FloatingGeometry() {
  const group = useRef()
  const orb = useRef()

  useFrame(({ clock, pointer }) => {
    const time = clock.getElapsedTime()
    if (group.current) {
      group.current.rotation.y = Math.sin(time * 0.35) * 0.18 + pointer.x * 0.08
      group.current.rotation.x = Math.cos(time * 0.24) * 0.08 + pointer.y * 0.05
    }
    if (orb.current) {
      orb.current.rotation.x = time * 0.22
      orb.current.rotation.y = time * 0.34
    }
  })

  return (
    <group ref={group}>
      <mesh ref={orb} position={[0.8, 0, 0]}>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshStandardMaterial color="#101827" emissive="#0a3145" emissiveIntensity={0.35} roughness={0.36} metalness={0.7} />
      </mesh>
      <mesh rotation={[1.2, 0.2, 0.1]}>
        <torusGeometry args={[2.35, 0.012, 12, 160]} />
        <meshBasicMaterial color="#7ddcff" transparent opacity={0.32} />
      </mesh>
      <mesh rotation={[0.2, 1.4, 0.45]}>
        <torusGeometry args={[3.05, 0.01, 12, 160]} />
        <meshBasicMaterial color="#dbe5f2" transparent opacity={0.18} />
      </mesh>
      {Array.from({ length: 28 }).map((_, index) => (
        <mesh
          key={index}
          position={[
            Math.sin(index * 1.7) * (3 + (index % 4) * 0.35),
            Math.cos(index * 1.2) * 2.1,
            -1.2 - (index % 9) * 0.38,
          ]}
          rotation={[index * 0.18, index * 0.27, index * 0.12]}
        >
          <boxGeometry args={[0.035, 0.035, 0.45]} />
          <meshBasicMaterial color={index % 3 === 0 ? '#d7c59a' : '#7ddcff'} transparent opacity={0.32} />
        </mesh>
      ))}
    </group>
  )
}

export default function Scene() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 7.4], fov: 45 }} dpr={[1, 1.6]}>
        <color attach="background" args={['#060812']} />
        <fog attach="fog" args={['#060812', 7, 21]} />
        <ambientLight intensity={0.52} />
        <pointLight position={[4, 3, 5]} color="#7ddcff" intensity={14} distance={12} />
        <pointLight position={[-3, -2, 4]} color="#d7c59a" intensity={5} distance={9} />
        <FloatingGeometry />
      </Canvas>
    </div>
  )
}
