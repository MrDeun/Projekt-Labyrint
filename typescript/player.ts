import * as THREE from 'three';

const material = new THREE.MeshBasicMaterial({color:0xffffff,wireframe:true});
const geometry = new THREE.CapsuleGeometry(1.0,5.0,4,8);

export class Player
{
    mesh: THREE.Mesh;
    flashlight: THREE.PointLight;
    flash_help: THREE.PointLightHelper;
    camera: THREE.PerspectiveCamera;
    all: THREE.Group;

    step: number;
    angle: number;

    constructor()
    {
        this.angle = 0; // Math.PI/90
        this.step = 0.1;  
        this.mesh = new THREE.Mesh(geometry,material);
        this.flashlight = new THREE.PointLight(0xFDF4DC,0.25,150,0.33);
        this.flash_help = new THREE.PointLightHelper(this.flashlight,1.0,0xffffff);
        this.camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,200);


        this.camera.position.y += 30.0;
        this.camera.rotation.x -= Math.PI/2;
        this.flashlight.position.x = 1.01;

        this.all = new THREE.Group();
        this.all.add(this.mesh);
        this.all.add(this.flashlight);
        this.all.add(this.camera);
    }


}