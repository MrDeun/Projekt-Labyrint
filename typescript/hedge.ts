import * as THREE from 'three'

const material = new THREE.MeshBasicMaterial({color:0x00ff00});

export class Hedge
{
    mesh: THREE.Mesh;
    all: THREE.Group;
    geometry: THREE.BoxGeometry;


    constructor(length: number)
    {
        this.geometry = new THREE.BoxGeometry(1,12.5,length,1,1,1);
        this.mesh = new THREE.Mesh(this.geometry,material);

        this.all = new THREE.Group();
        this.all.add(this.mesh);
    }

};