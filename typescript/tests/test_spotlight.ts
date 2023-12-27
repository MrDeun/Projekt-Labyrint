import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const renderer = new THREE.WebGLRenderer({antialias:true});
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,2000);
const controls = new OrbitControls(camera,renderer.domElement);

camera.position.z = 20;
controls.update();

const axis_help = new THREE.AxesHelper(2000);

const material = new THREE.MeshStandardMaterial({color:0xff00ff,side:THREE.DoubleSide});
const geometry = new THREE.BoxGeometry(50,50,50,1,1,1);
const smallgeometry = new THREE.BoxGeometry(1,1,1,1,1,1);

const mesh = new THREE.Mesh(geometry,material);
const smallmesh = new THREE.Mesh(smallgeometry,material);
smallmesh.position.x = 30;
const light = new THREE.SpotLight(0xfdf4dc,5.0,2000,Math.PI/30,0,2);

light.target = smallmesh;

const light_help = new THREE.SpotLightHelper(light,0xffffff);


scene.add(axis_help);
scene.add(mesh);
scene.add(light);
scene.add(light_help);

function animate()
{
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene,camera);
}

window.addEventListener('resize',onWindowResize,false);

function onWindowResize()
{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

animate()