import * as THREE from 'three'

const loader = new THREE.TextureLoader();

const brick_geometry = new THREE.BoxGeometry(1.9,1.8,5.4,1,1,1);
const brick_material = new THREE.MeshStandardMaterial({color:0xcb4154});

const log_offest = 3.0;
const log_thickness = 0.8;
const log_geometrty = new THREE.BoxGeometry(log_thickness,log_thickness,9.0,1,1,1);
const log_material = new THREE.MeshStandardMaterial({color:0x211911,emissiveMap:loader.load('/8k_sun.png'),emissive:0xe25822});

const log = new THREE.Mesh(log_geometrty,log_material);

function log_generate_level()
{
    let logGroup = new THREE.Group();
    for (let index = 0; index < 2; index++) 
    {
        let temp = new THREE.Mesh(log_geometrty,log_material);
        temp.position.y = -6.25 + log_thickness;

        if( index%2 == 0)
            {temp.position.x += log_offest;}
        else
            {temp.position.x -= log_offest;}

        logGroup.add(temp);
    }
    return logGroup;
}


export class Orb
{
    all: THREE.Group;
    light: THREE.PointLight;

    static radius = 8.0;

    constructor()
    {
        let brickArray = [];

        for (let index = 0; index < 8; index++) 
        {
            let temp = new THREE.Mesh(brick_geometry,brick_material);
            temp.position.y = -6.25 + 0.4;
            temp.position.x = Orb.radius * Math.cos( index * Math.PI/4 );
            temp.position.z = Orb.radius * Math.sin( index * Math.PI/4 );
            temp.rotation.y -= index * Math.PI/4;

            brickArray.push(temp);
        }


        let stack = [];

        for (let index = 0; index < 6; index++) 
        {
            let temp = log_generate_level();
            temp.position.y += index * log_thickness;
            if( index%2 == 1 )
                {
                    temp.rotation.y += Math.PI/2;
                }
            stack.push(temp);    
        }

        this.light = new THREE.PointLight(0xe25822,128.0,150,2.0);
        this.all = new THREE.Group();
        this.all.add(this.light);
        for (let index = 0; index < brickArray.length; index++) 
            {
                this.all.add(brickArray[index]);
            }

            for (let index = 0; index < stack.length; index++) 
            {
                this.all.add(stack[index]);
            }

    }
        

    updatePosition()
    {
        this.light.position.y = 2.0 * Math.sin( Date.now() * Math.PI/1800 );
        this.light.rotation.y += 3 * Math.PI/120;
    }
}