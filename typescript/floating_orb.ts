import * as THREE from 'three'

const loader = new THREE.TextureLoader();
const mirror = new THREE.MeshStandardMaterial({emissive:0xffffff,emissiveIntensity:0.6,emissiveMap:loader.load("/8k_sun.jpg"),metalness:0.0,roughness:1.0,map:loader.load("/8k_sun.jpg")});
const geometry = new THREE.SphereGeometry(1.5,32,16,0,Math.PI*2,0,Math.PI);

const brick_geometry = new THREE.BoxGeometry(0.6,0.5,1.5,1,1,1);
const brick_material = new THREE.MeshStandardMaterial({color:0xcb4154});

const log_geometrty = new THREE.BoxGeometry(1.0,1.0,2.0,1,1,1);
const log_material = new THREE.MeshStandardMaterial({color:0x5d4632}); 

const log = new THREE.Mesh(log_geometrty,log_material);

export class Orb
{
    mesh: THREE.Mesh;
    all: THREE.Group;
    light: THREE.PointLight;

    static radius = 3.0;

    constructor()
    {
        let brickArray = [];

        for (let index = 0; index < 8; index++) 
        {
            let temp = new THREE.Mesh(brick_geometry,brick_material);
            temp.position.y = -6.25 + 0.6;
            temp.position.x = Orb.radius * Math.cos( index * Math.PI/4 );
            temp.position.z = Orb.radius * Math.sin( index * Math.PI/4 );
            temp.rotation.y -= index * Math.PI/4;

            brickArray.push(temp);
        }

        let logArray = [];

        for (let index = 0; index < 2; index++) 
        {
            let temp = new THREE.Mesh(log_geometrty,log_material);
            temp.position.y = -6.25 + 1.0;

            if( index%2 == 0)
                {temp.position.z += 0.7;}
            else
                {temp.position.z -= 0.7;}

                logArray.push( temp );
            
        }

        this.mesh = new THREE.Mesh(geometry,mirror);
        this.light = new THREE.PointLight(0xe25822,128.0,150,2.0);
        this.mesh.add(this.light);
        this.all = new THREE.Group();
        this.all.add(this.mesh);
        for (let index = 0; index < brickArray.length; index++) 
            {
                this.all.add(brickArray[index]);
            }
        for (let index = 0; index < logArray.length; index++) 
            {
                this.all.add(logArray[index]);
            }
    }
        

    updatePosition()
    {
        this.mesh.position.y = 3 * Math.sin( Date.now() * Math.PI/2400);
        this.mesh.rotation.y += 3 * Math.PI/120;
        this.light.position.y = 3 * Math.sin( Date.now() * Math.PI/2400);
        this.light.rotation.y += 3 * Math.PI/120;
    }
}