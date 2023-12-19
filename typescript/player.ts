import * as THREE from 'three';

const material = new THREE.MeshBasicMaterial({color:0xffffff,wireframe:true});
const geometry = new THREE.CapsuleGeometry(1.0,5.0,4,8);

export class Player
{
    mesh: THREE.Mesh;
    
    flashlight: THREE.PointLight;
    //player_camera: THREE.PerspectiveCamera;
    all: THREE.Group;

    step: number;
    angle: number;

    constructor(helper: boolean)
    {
        this.angle = 0;
        this.step = 0.1;

        this.mesh = new THREE.Mesh(geometry,material);
        this.flashlight = new THREE.PointLight(0xFDF4DC,0.25,150,0.33);
        //this.player_camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,200);

        this.all = new THREE.Group();
        this.all.add(this.mesh);
        this.all.add(this.flashlight);
        //this.all.add(this.player_camera);
    }


}