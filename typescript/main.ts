import * as THREE from 'three';
import { Player } from './player.js';
import { Ground } from './ground.js';
import { generateLabyrinth } from './labirinth.js'
import { Campfire } from './campfire.js'

const renderer = new THREE.WebGLRenderer();
const loader = new THREE.TextureLoader();

const skybox = loader.load("/8k_stars.jpg");

renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,2000);
const scene = new THREE.Scene();
scene.background = skybox;

const player = new Player();
player.all.position.x = -25 * 5;
player.all.rotation.y = -Math.PI/2;

player.angle = - Math.PI/2;
const ground = new Ground();
scene.add(ground.all);

scene.add(generateLabyrinth());

const objective = new Campfire(6,8.0);
scene.add(objective.whole);

scene.add(player.all);

function animate()
{
    requestAnimationFrame(animate);
    objective.updateLight();
    renderer.render(scene,player.camera);
}

animate();

document.addEventListener('keydown',handleKeyDown)

function handleKeyDown(input: KeyboardEvent)
{
    switch(input.key)
    {
        case 's':
            player.all.position.z += 0.5 * Math.cos(player.angle) * Player.step;
            player.all.position.x += 0.5 * Math.sin(player.angle) * Player.step;
            break;
        case 'w':
            player.all.position.z -= 0.5 * Math.cos(player.angle) * Player.step;
            player.all.position.x -= 0.5 * Math.sin(player.angle) * Player.step;
            break;
        case 'a':
            player.angle += 0.5 * Math.PI / 90 * Player.step;   
            player.all.rotation.y = player.angle;
            break;
        case 'd':
            player.angle -= 0.5 * Math.PI / 90 * Player.step;
            player.all.rotation.y = player.angle;
            break;
        default:
            break;
    }
}

window.addEventListener(
	'resize',
	function() {
		player.camera.aspect = window.innerWidth / window.innerHeight;
		player.camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.render( scene, player.camera );
	},
	false
);

