import * as THREE from 'three';
import { Player } from './player.js'

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,2000);
const scene = new THREE.Scene();

camera.position.y += 20.0;
camera.rotation.x -= Math.PI/2;

const player = new Player(false);

scene.add(player.all);

function animate()
{
    requestAnimationFrame(animate);

    renderer.render(scene,camera);
}

animate();

document.addEventListener('keydown',handleKeyDown)

function handleKeyDown(input: KeyboardEvent)
{
    switch(input.key)
    {
        case 'w':
            player.all.position.x += Math.cos(player.angle) * player.step;
            player.all.position.z += Math.sin(player.angle) * player.step;
            break;
        case 's':
            player.all.position.x -= Math.cos(player.angle) * player.step;
            player.all.position.z -= Math.sin(player.angle) * player.step;
            break;
        case 'd':
            player.angle += Math.PI / 90;
            player.all.rotation.y = -player.angle;
            break;
        case 'a':
            player.angle -= Math.PI / 90;
            player.all.rotation.y = -player.angle;
            break;
        default:
            break;
    }
}

window.addEventListener(
	'resize',
	function() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.render( scene, camera );
	},
	false
);

