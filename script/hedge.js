import * as THREE from 'three';
const loader = new THREE.TextureLoader();
const hedge_texture = loader.load("/hedge.jpg");
hedge_texture.repeat.set(5, 5);
const material = new THREE.MeshBasicMaterial({ color: 0x00aa00 });
//Size of one block: 10x10
export class Hedge {
    constructor(length, turned) {
        this.geometry = new THREE.BoxGeometry(Hedge.hedge_thickness, 12.5, (length + (Hedge.hedge_thickness)), 1, 6, Math.floor(length + (Hedge.hedge_thickness)));
        this.mesh = new THREE.Mesh(this.geometry, material);
        if (turned == true) {
            this.mesh.rotation.y = Math.PI / 2;
        }
        this.all = new THREE.Group();
        this.all.add(this.mesh);
        this.all.position.y -= 0.1;
    }
}
Hedge.hedge_thickness = 3.0;
;
