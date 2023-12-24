import * as THREE from 'three';
const material = new THREE.MeshBasicMaterial({ color: 0x6f4e37 });
const geometry = new THREE.PlaneGeometry(1000.0, 1000.0, 1.0, 1.0);
export class Ground {
    constructor() {
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.rotation.x = -Math.PI / 2;
        this.mesh.position.y = -6.25;
        this.all = new THREE.Group();
        this.all.add(this.mesh);
    }
}
