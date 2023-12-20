import * as THREE from 'three';
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const geometry = new THREE.PlaneGeometry(100.0, 100.0, 1, 1);
export class Tile {
    constructor() {
        this.mesh = new THREE.Mesh(geometry, material);
    }
}
