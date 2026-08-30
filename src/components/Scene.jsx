import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'

function noise(index, salt = 0) {
  return (Math.sin(index * 97.31 + salt * 43.17) + 1) / 2
}

function SpeedLines() {
  const group = useRef()
  const lines = useMemo(
    () =>
      Array.from({ length: 52 }, (_, index) => ({
        x: (noise(index, 1) - 0.5) * 9,
        y: (noise(index, 2) - 0.5) * 6,
        z: -1 - noise(index, 3) * 10,
        length: 0.45 + noise(index, 4) * 1.1,
        speed: 0.055 + noise(index, 5) * 0.08,
        resetX: (noise(index, 6) - 0.5) * 9,
        resetY: (noise(index, 7) - 0.5) * 6,
        tone: index % 4 === 0 ? '#d7c59a' : '#7ddcff',
      })),
    [],
  )

  useFrame(({ pointer }) => {
    if (!group.current) return
    group.current.rotation.y = pointer.x * 0.08
    group.current.rotation.x = pointer.y * -0.04

    group.current.children.forEach((line, index) => {
      line.position.z += lines[index].speed
      line.position.x += 0.006
      if (line.position.z > 3.5) {
        line.position.z = -10
        line.position.x = lines[index].resetX
        line.position.y = lines[index].resetY
      }
    })
  })

  return (
    <group ref={group} rotation={[0.2, -0.25, -0.2]}>
      {lines.map((line, index) => (
        <mesh key={index} position={[line.x, line.y, line.z]} rotation={[0, 0, -0.58]}>
          <boxGeometry args={[0.012, line.length, 0.012]} />
          <meshBasicMaterial color={line.tone} transparent opacity={index % 3 === 0 ? 0.42 : 0.28} />
        </mesh>
      ))}
    </group>
  )
}

function FlightAura() {
  const aura = useRef()
  const shield = useRef()
  const cape = useRef()

  useFrame(({ clock, pointer }) => {
    const time = clock.getElapsedTime()
    if (aura.current) {
      aura.current.rotation.z = time * 0.22
      aura.current.scale.setScalar(1 + Math.sin(time * 1.4) * 0.045)
    }
    if (shield.current) {
      shield.current.rotation.z = -time * 0.16
      shield.current.rotation.x = Math.sin(time * 0.7) * 0.12 + pointer.y * 0.04
      shield.current.rotation.y = Math.cos(time * 0.6) * 0.16 + pointer.x * 0.08
    }
    if (cape.current) {
      cape.current.rotation.z = Math.sin(time * 1.1) * 0.08
      cape.current.position.y = Math.sin(time * 1.6) * 0.08 - 0.35
    }
  })

  return (
    <group position={[1.1, -0.1, -2.2]}>
      <mesh ref={aura}>
        <torusGeometry args={[1.45, 0.018, 16, 180]} />
        <meshBasicMaterial color="#7ddcff" transparent opacity={0.5} />
      </mesh>
      <mesh rotation={[1.1, 0.2, 0.55]}>
        <torusGeometry args={[2.15, 0.012, 12, 180]} />
        <meshBasicMaterial color="#dbe5f2" transparent opacity={0.22} />
      </mesh>
      <mesh ref={shield}>
        <icosahedronGeometry args={[0.78, 1]} />
        <meshStandardMaterial color="#111827" emissive="#0d4d66" emissiveIntensity={0.72} roughness={0.32} metalness={0.8} />
      </mesh>
      <group ref={cape}>
        <mesh position={[-1.45, -0.42, -0.22]} rotation={[0, 0, 0.55]}>
          <coneGeometry args={[0.32, 2.4, 3, 1, true]} />
          <meshBasicMaterial color="#7ddcff" transparent opacity={0.13} />
        </mesh>
        <mesh position={[-1.9, -0.72, -0.36]} rotation={[0, 0, 0.72]}>
          <coneGeometry args={[0.26, 2.9, 3, 1, true]} />
          <meshBasicMaterial color="#d7c59a" transparent opacity={0.1} />
        </mesh>
      </group>
    </group>
  )
}

function HeroFlightScene() {
  return (
    <>
      <SpeedLines />
      <FlightAura />
      <mesh position={[-3.1, 1.6, -4]} rotation={[0.6, 0.2, -0.45]}>
        <torusGeometry args={[1.2, 0.01, 12, 120]} />
        <meshBasicMaterial color="#7ddcff" transparent opacity={0.16} />
      </mesh>
      <mesh position={[3.6, -1.8, -5]} rotation={[0.4, -0.5, 0.65]}>
        <torusGeometry args={[1.8, 0.012, 12, 140]} />
        <meshBasicMaterial color="#d7c59a" transparent opacity={0.14} />
      </mesh>
    </>
  )
}

export default function Scene() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 7.4], fov: 45 }} dpr={[1, 1.6]}>
        <color attach="background" args={['#060812']} />
        <fog attach="fog" args={['#060812', 6, 19]} />
        <ambientLight intensity={0.58} />
        <pointLight position={[4, 3, 5]} color="#7ddcff" intensity={16} distance={13} />
        <pointLight position={[-4, -2, 4]} color="#d7c59a" intensity={7} distance={10} />
        <HeroFlightScene />
      </Canvas>
    </div>
  )
}
