import { useState } from "react";

export default function usePosition() {
  const isX = Math.random() < 0.5;
  const isNegative = Math.random() < 0.5;
  let offset = Math.floor(Math.random() * 3);
  offset *= Math.round(Math.random()) ? 1 : -1;
  let x = isX ? (isNegative ? -3 : 3) : offset;
  let y = isX ? offset : isNegative ? -3 : 3;
  const [position, setPostion] = useState([x, y, 0]);
  return [position, setPostion];
}
