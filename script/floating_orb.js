import * as THREE from 'three';
const mirror = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.3, roughness: 0.1, });
const geometry = new THREE.SphereGeometry(1.5, 32, 16, 0, Math.PI * 2, 0, Math.PI);
export class Orb {
    constructor() {
        this.mesh = new THREE.Mesh(geometry, mirror);
        this.all = new THREE.Group();
        this.all.add(this.mesh);
    }
    updatePosition() {
        this.all.position.y = 3 * Math.sin(Date.now() * Math.PI / 1200);
    }
}
