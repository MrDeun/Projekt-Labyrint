import * as THREE from 'three';
const loader = new THREE.TextureLoader();
export class Orb {
    constructor() {
        this.all = new THREE.Group;
        this.light = new THREE.PointLight(0xffffff, 4.0, 64, 2.0);
        this.mesh = new THREE.Mesh(Orb.geometry, Orb.material);
        this.all.add(this.light);
        this.all.add(this.mesh);
    }
    updatePosition() {
        this.all.position.y = 2.0 * Math.sin(Date.now() * Math.PI / 1800);
        this.all.rotation.y += 3 * Math.PI / 120;
    }
}
Orb.radius = 8.0;
Orb.geometry = new THREE.SphereGeometry(3.0, 32, 16);
Orb.material = new THREE.MeshStandardMaterial({
    emissiveMap: loader.load('/8k_sun.jpg'),
    map: loader.load('/8k_sun.jpg'),
    emissiveIntensity: 0.6,
});
