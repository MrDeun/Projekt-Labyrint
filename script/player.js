import * as THREE from 'three';
export class Player {
    constructor() {
        this.angle = 0;
        this.ambient = new THREE.PointLight(0x999999, 0.05, 50, 0.33);
        this.flashlight = new THREE.SpotLight(0xffffff, 2.0, 300, Math.PI / 9, 0.33, 1.2);
        this.front_point = new THREE.Object3D();
        this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 200);
        this.ambient.position.y = 0.0;
        this.front_point.position.z = -1.0;
        this.flashlight.position.y = 0.0;
        this.flashlight.target = this.front_point;
        this.all = new THREE.Group();
        this.all.add(this.front_point);
        this.all.add(this.flashlight);
        this.all.add(this.ambient);
        this.all.add(this.camera);
    }
}
Player.step = 2.5;
