import * as THREE from 'three';
import { Hedge } from './hedge.js'
import { Ground } from './ground.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Orb } from './floating_orb.js';

const renderer = new THREE.WebGLRenderer({antialias:true});
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,0.1,5000);
const controls = new OrbitControls(camera,renderer.domElement);
controls.update();

const ground = new Ground()
scene.add(ground.all);

const ratio = 10;

export function generateLabyrinth()
{
    let whole_map: THREE.Group = new THREE.Group();

    let north_main_wall = new Hedge(50 * ratio,false);
    north_main_wall.all.position.z = -24 * ratio;
    whole_map.add(north_main_wall.all);

    let south_main_wall = new Hedge(50 * ratio,false);
    south_main_wall.all.position.z = 24 * ratio;
    whole_map.add(south_main_wall.all)

    let east_main_wall = new Hedge(50 * ratio,true);
    east_main_wall.all.position.x = 24*ratio;
    whole_map.add(east_main_wall.all)

    let west_south_main_wall = new Hedge( 21 * ratio,true);
    west_south_main_wall.all.position.x = 24 * ratio;
    west_south_main_wall.all.position.z = 16 * ratio;
    whole_map.add(west_south_main_wall.all);

    let west_north_main_wall = new Hedge( 21 * ratio,true);
    west_north_main_wall.all.position.x = 24 * ratio;
    west_north_main_wall.all.position.z = -16 * ratio;
    whole_map.add(west_north_main_wall.all);

    return whole_map;
}

scene.add( generateLabyrinth() );

window.addEventListener('resize',onWindowResize,false);
let objective = new Orb();
function onWindowResize()
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.render(scene,camera);
}


function animate(time: number)
{
    requestAnimationFrame(animate);
    objective.all.position.y = 7.5 * Math.sin( Date.now() * Math.PI/60 );
    controls.update();
    renderer.setSize(window.innerWidth,window.innerHeight);
}

animate(0);