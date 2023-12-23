import * as THREE from 'three';
import { Player } from './player.js';
import { Hedge } from './hedge.js';
import { Ground } from './ground.js';
import { Orb } from './floating_orb.js';
const renderer = new THREE.WebGLRenderer();
const loader = new THREE.TextureLoader();
const skybox = loader.load("/8k_stars.jpg");
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
const scene = new THREE.Scene();
scene.background = skybox;
//scene.fog = new THREE.Fog(0x111111,0.1,50);
const player = new Player();
const ground = new Ground();
scene.add(ground.all);
const arrayHedge = [];
for (let index = 0; index < 4; index++) {
    arrayHedge[index] = new Hedge(50, false);
}
arrayHedge[0].all.position.x = 25;
arrayHedge[1].all.position.x = 0;
arrayHedge[2].all.position.x = -25;
arrayHedge[3].all.position.x = 0;
arrayHedge[0].all.position.z = 0;
arrayHedge[1].all.position.z = 25;
arrayHedge[2].all.position.z = 0;
arrayHedge[3].all.position.z = -25;
arrayHedge[1].all.rotation.y = Math.PI / 2;
arrayHedge[3].all.rotation.y = Math.PI / 2;
for (let element of arrayHedge) {
    scene.add(element.all);
}
const objective = new Orb();
scene.add(objective.all);
scene.add(player.all);
function animate() {
    requestAnimationFrame(animate);
    objective.updatePosition();
    renderer.render(scene, player.camera);
}
animate();
document.addEventListener('keydown', handleKeyDown);
function handleKeyDown(input) {
    switch (input.key) {
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
            console.log("Angle: " + player.angle);
            break;
        default:
            break;
    }
}
window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, player.camera);
}, false);
