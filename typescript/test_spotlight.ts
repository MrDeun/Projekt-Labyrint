import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const renderer = new THREE.WebGLRenderer({antialias:true});
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,2000);
const controls = new THREE.OrbitControls(camera,renderer.domElement);

camera.position.z = 20;
controls.update();

const axis_help = new THREE.AxesHelper(2000);

const material = new THREE.MeshStandardMaterial({color:0xff0000});
const geometry = new THREE.BoxGeometry(500,500,500,1,1,1);

const mesh = new THREE.Mesh(geometry,material);
const light = new THREE.SpotLight(0xffffff,5.0,0,Math.PI/6,0.1,2.0);

scene.add(axis_help);
scene.add(mesh);
scene.add(light);

function animate()
{
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene,camera);

}

animate()