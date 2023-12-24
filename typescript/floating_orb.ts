import * as THREE from 'three'

const loader = new THREE.TextureLoader();
const mirror = new THREE.MeshStandardMaterial({emissive:0xffffff,emissiveIntensity:0.6,emissiveMap:loader.load("/8k_sun.jpg"),metalness:0.0,roughness:1.0,map:loader.load("/8k_sun.jpg")});
const geometry = new THREE.SphereGeometry(1.5,32,16,0,Math.PI*2,0,Math.PI);

export class Orb
{
    mesh: THREE.Mesh;
    all: THREE.Group;
    light: THREE.PointLight;

    constructor()
    {
        this.mesh = new THREE.Mesh(geometry,mirror);
        this.light = new THREE.PointLight(0xd9c53b,128.0,150,2.0);
        this.mesh.add(this.light);
        this.all = new THREE.Group();
        this.all.add(this.mesh);
    }

    updatePosition()
    {
        this.all.position.y = 3 * Math.sin( Date.now() * Math.PI/1200);
        this.all.rotation.y += 3 * Math.PI/120;
    }
}