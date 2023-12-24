import * as THREE from 'three';
import { Hedge } from './hedge.js'
import { Ground } from './ground.js'
import { Orb } from './floating_orb.js';

const renderer = new THREE.WebGLRenderer({antialias:true});
document.body.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();

const skybox = loader.load("/8k_stars.jpg");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,0.1,5000);



const ground = new Ground()
const light = new THREE.AmbientLight(0xffffff,5.0);
scene.add(ground.all);
scene.background = skybox;

const ratio = 10;

export function generateLabyrinth()
{
    const whole_map: THREE.Group = new THREE.Group();

    const north_main_wall = new Hedge(48 * ratio, true);
    north_main_wall.all.position.z = -24 * ratio;
    whole_map.add(north_main_wall.all);

    const south_main_wall = new Hedge( 48 * ratio,true);
    south_main_wall.all.position.z = 24 * ratio;
    whole_map.add(south_main_wall.all)

    const east_main_wall = new Hedge( 48 * ratio, false);
    east_main_wall.all.position.x = 24*ratio;
    whole_map.add(east_main_wall.all)

    const west_south_main_wall = new Hedge( 16 * ratio,false);
    west_south_main_wall.all.position.x = -24 * ratio;
    west_south_main_wall.all.position.z = 16 * ratio;
    whole_map.add(west_south_main_wall.all);

    const west_north_main_wall = new Hedge( 16 * ratio,false);
    west_north_main_wall.all.position.x = -24 * ratio;
    west_north_main_wall.all.position.z = -16 * ratio;
    whole_map.add(west_north_main_wall.all);

    const west_secondlayer_wall = new Hedge( 36 * ratio, false);
    west_secondlayer_wall.all.position.x = -20 * ratio;
    whole_map.add(west_secondlayer_wall.all)

    const west_thirdlayer_wall = new Hedge( 22 * ratio , false);
    west_secondlayer_wall.all.position.x = -11 * ratio;
    whole_map.add(west_thirdlayer_wall.all);

    const south_east_thirdlayer_wall = new Hedge( 15 * ratio,true);
    south_east_thirdlayer_wall.all.position.z = 19 * ratio;
    south_east_thirdlayer_wall.all.position.x = 9 * ratio;
    whole_map.add(south_east_thirdlayer_wall.all);

    return whole_map;
}

scene.add( generateLabyrinth() );
scene.rotation.x = Math.PI/2;
scene.position.z = -600;

window.addEventListener('resize',onWindowResize,false);
const objective = new Orb();
function onWindowResize()
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
}

window.addEventListener('keydown',handleKeyDown);

function handleKeyDown(key: KeyboardEvent)
{
    switch(key.key)
    {
        case 'w':
            scene.position.z += 1.0;
            break;
        case 's':
            scene.position.z -= 1.0;
            break;
        case 'a':
            scene.rotation.x += Math.PI/90;
            break;
        case 'd':
            scene.rotation.x -= Math.PI/90;
            break;
        case 'ArrowLeft':
            scene.rotation.y -= Math.PI/90;
            break;
        case 'ArrowRight':
            scene.rotation.y += Math.PI/90;
            break;
        case 'r':
            onWindowResize();
            break;
        case 'h':
            console.log("Scene Positions: " + scene.position.x + " " + scene.position.y + " " + scene.position.z)
            console.log("Scene Rotations: " + scene.rotation.x + " " + scene.rotation.y + " " + scene.rotation.z)
            break;
        default:
            break;
    }
}

function animate(time: number)
{
    requestAnimationFrame(animate);
    objective.updatePosition();
    renderer.render(scene,camera);
}

animate(0);