import {
  CameraControls,
  Environment,
  Gltf,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";
import TableText from "./TableText";
import Button from "./Button";
import { Avatar } from "./Avatar";

const CameraManager = () => {
  return (
    <CameraControls
      // maxAzimuthAngle={Math.PI / 2}
      // minAzimuthAngle={-Math.PI / 2}
      maxPolarAngle={(2 * Math.PI) / 3}
      minPolarAngle={Math.PI / 3}
      zoom={false}
      mouseButtons={{
        left: 1,
        wheel: 16,
      }}
      touches={{ one: 32, two: 512 }}
    />
  );
};

const Scene = () => {
  return (
    <>
      <CameraManager />
      <Environment preset="sunset" />
      <ambientLight intensity={0.6} />
      <Gltf
        src="/models/classroom.glb"
        position={[110, -140, 40]}
        rotation={[0, Math.PI, 0]}
      />
      <Avatar
        rotation={[0, THREE.MathUtils.degToRad(20), 0]}
        scale={120}
        position={[-120, -140, -340]}
      />
      {/* <Blackboard /> */}
      <TableText />
      <Button />
    </>
  );
};

export default Scene;
