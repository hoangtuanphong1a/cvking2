import type { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import type { ReactThreeFiber } from '@react-three/fiber';

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: ReactThreeFiber.BufferGeometryNode<MeshLineGeometry, typeof MeshLineGeometry>;
    meshLineMaterial: ReactThreeFiber.MaterialNode<MeshLineMaterial, typeof MeshLineMaterial>;
  }
}
