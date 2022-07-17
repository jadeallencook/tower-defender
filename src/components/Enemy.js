import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import usePosition from "../hooks/usePosition";

export default function Enemy() {
  const [position, setPostion] = usePosition();
  let [x, y, z] = position;
  const ref = useRef();
  // useFrame(() => {
  //   if (x <= 0) {
  //     setPostion([(x += 0.01), y, z]);
  //   } else {
  //     setPostion([-3, y, z]);
  //   }
  // });
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry scale={1} args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
