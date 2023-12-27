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

function create_logLayer(height: number) // on what height?
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


function create_logStack(stack_height: number) //How high?
{
    let all = new THREE.Group();
    for (let index = 0; index < stack_height; index++) 
    { 
        let temp = create_logLayer(index);
        temp.rotation.y += Math.PI/2 * (index % 2);
        all.add(temp);
    }
    return all;
}

function create_brickCircle(radius: number)
{
    let all = new THREE.Group();


    for (let index = 0; index < 8; index++) 
    {
        let temp = new Brick();
        temp.all.position.y = -6.25 + 0.4;
        temp.all.position.x = radius * Math.cos( index * Math.PI/4 );
        temp.all.position.z = radius * Math.sin( index * Math.PI/4 );
        temp.all.rotation.y -= index * Math.PI/4;
        all.add(temp.all);
    }

    return all;
}

function create_lights(radius_in: number)
{
    const light_origin = new THREE.PointLight(0xe25822,4.0,64,2.0);
    let radius = radius_in * 0.8;

    let whole = new THREE.Group();
    whole.add(light_origin);

    for (let index = 0; index < 4; index++) 
    {
        let temp = light_origin.clone();
        temp.position.x = radius * Math.cos(Math.PI / 2 * index);
        temp.position.z = radius * Math.sin(Math.PI / 2 * index);
        
        whole.add(temp);
    }
    
    return whole;
}

export class Campfire
{
    stack_height: number;
    radius:number;

    whole: THREE.Group;

    logStack: THREE.Group;
    brickCircle: THREE.Group;
    lightSource: THREE.Group;

    constructor(stack_height_in: number,radius_in: number)
    {
        this.radius = radius_in;
        this.stack_height = stack_height_in;

        this.whole = new THREE.Group()

        this.logStack = create_logStack(this.stack_height);
        this.brickCircle = create_brickCircle(this.radius);
        this.lightSource = create_lights(this.radius);

        this.whole.add(this.logStack);
        this.whole.add(this.brickCircle);
        this.whole.add(this.lightSource);
    }

    updateLight()
    {
        this.lightSource.position.y = 
            (Log.thickness-1) * this.stack_height * Math.cos( Date.now() * Math.PI/1800 );
    }
}