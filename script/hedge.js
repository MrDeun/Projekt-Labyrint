import * as THREE from 'three';
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
export class Hedge {
    constructor(length) {
        this.geometry = new THREE.BoxGeometry(Hedge.hedge_thickness, 12.5, length, 1, 1, 1);
        this.mesh = new THREE.Mesh(this.geometry, material);
        this.all = new THREE.Group();
        this.all.add(this.mesh);
    }
}
Hedge.hedge_thickness = 3.0;
;
