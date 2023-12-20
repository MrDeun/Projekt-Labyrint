import * as THREE from 'three';
export class Player {
    constructor() {
        this.angle = 0;
        this.ambient = new THREE.PointLight(0xFDF4DC, 0.25, 150, 0.33);
        this.flashlight = new THREE.SpotLight(0xFDF4DC, 1.5, 500, Math.PI / 90, 0.8, 2);
        this.flashlight_helper = new THREE.SpotLightHelper(this.flashlight, 5.0);
        this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
        this.ambient.position.y = 3.0;
        this.flashlight.position.z = 1.0;
        this.flashlight.rotation.x = Math.PI / 2;
        this.all = new THREE.Group();
        this.all.add(this.ambient);
        this.all.add(this.camera);
        this.all.add(this.flashlight);
        this.all.add(this.flashlight_helper);
    }
}
Player.step = 0.5;
