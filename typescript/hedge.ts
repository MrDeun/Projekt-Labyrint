import * as THREE from 'three'

const material = new THREE.MeshStandardMaterial({color:0x00ff00});

//Size of one block: 10x10

export class Hedge
{
    
    mesh: THREE.Mesh;
    all: THREE.Group;
    geometry: THREE.BoxGeometry;

    static hedge_thickness: number = 3.0;

    constructor(length: number)
    {
        this.geometry = new THREE.BoxGeometry(Hedge.hedge_thickness,12.5,length,1,1,1);
        this.mesh = new THREE.Mesh(this.geometry,material);

        this.all = new THREE.Group();
        this.all.add(this.mesh);
    }

};