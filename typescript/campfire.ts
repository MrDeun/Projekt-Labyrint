import * as THREE from 'three';

const loader = new THREE.TextureLoader();

class Brick 
{
    mesh: THREE.Mesh;
    all: THREE.Group;

    static brick_geometry = new THREE.BoxGeometry(1.9,1.8,5.4,1,1,1);
    static brick_material = new THREE.MeshStandardMaterial({color:0xcb4154});

    constructor()
    {
        this.mesh = new THREE.Mesh(Brick.brick_geometry,Brick.brick_material);

        this.all = new THREE.Group()
        this.all.add(this.mesh);
    }
}

class Log 
{
    mesh: THREE.Mesh;
    all: THREE.Group;

    static offest = 3.0;
    static thickness = 0.8;
    static geometry= new THREE.BoxGeometry(Log.thickness,Log.thickness,9.0,1,1,1);
    static material = new THREE.MeshStandardMaterial({color:0x211911,emissiveMap:loader.load('/8k_sun.png'),emissive:0xe25822});

    constructor()
    {
        this.mesh = new THREE.Mesh(Log.geometry,Log.material);

        this.all = new THREE.Group()
        this.all.add(this.mesh)
    }

}

function logLayer(height: number)
{
    let layer = new THREE.Group;
    for (let index = 0; index < 2; index++) 
    {
        let temp = new Log();
        temp.all.position.y = -6.25 + Log.thickness;

        if( index%2 == 0)
            {temp.all.position.x += Log.offest;}
        else
            {temp.all.position.x -= Log.offest;}
        
        layer.add(temp.all);
    }
    layer.position.y += height;

    return layer;
}

class LogStack
{
    all: THREE.Group;
    constructor(height: number)
    {
        this.all = new THREE.Group()
        for (let index = 0; index < height; index++) 
        { 
            
        }
    }
}