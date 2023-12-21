import * as THREE from 'three';
export class Player {
    constructor() {
        this.angle = 0;
        this.ambient = new THREE.PointLight(0xffffff, 0.1, 50, 0.33);
        this.flashlight = new THREE.SpotLight(0xff000000, 5.0, 150, Math.PI / 60, 0, 200);
        this.camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 200);
        this.ambient.position.y = 3.0;
        this.flashlight.rotation.x = Math.PI / 2;
        this.flashlight_helper = new THREE.SpotLightHelper(this.flashlight, 5.0);
        this.flashlight_helper.rotateX(Math.PI / 2);
        this.all = new THREE.Group();
        this.all.add(this.ambient);
        this.all.add(this.camera);
        this.all.add(this.flashlight);
        this.all.add(this.flashlight_helper);
    }
}
Player.step = 2.5;
