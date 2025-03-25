import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useMemo } from 'react';

export default function Background3D() {
  const meshes = useRef<Mesh[]>([]);
  
  // Create random positions for geometric shapes
  const positions = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ],
      scale: Math.random() * 0.5 + 0.5,
    }));
  }, []);

  useFrame((state, delta) => {
    meshes.current.forEach((mesh, i) => {
      mesh.rotation.x += delta * 0.1;
      mesh.rotation.y += delta * 0.15;
      mesh.position.y = positions[i].position[1] + Math.sin(state.clock.elapsedTime + i) * 0.5;
    });
  });

  return (
    <group>
      {positions.map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => (meshes.current[i] = el as Mesh)}
          position={pos.position as [number, number, number]}
          rotation={pos.rotation as [number, number, number]}
          scale={pos.scale}
        >
          <torusKnotGeometry args={[1, 0.3, 128, 16]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#00f3ff' : '#ff00ff'}
            transparent
            opacity={0.3}
            metalness={0.8}
            roughness={0.2}
            emissive={i % 2 === 0 ? '#00f3ff' : '#ff00ff'}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
} 