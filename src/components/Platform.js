export default function Platform(props) {
  return (
    <mesh {...props}>
      <boxGeometry scale={1} args={[1, 1, 0.25]} />
      <meshStandardMaterial />
    </mesh>
  );
}
