import * as THREE from 'three'
import { OrbitControls } from 'three/example/jsm/controls/OrbitControls.js'

const renderer = new THREE.WebGLRenderer({antialias:true});
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,0.1,2000);

const material = new THREE.MeshStandardMaterial({color:0xff0000});
const geometry = new THREE.BoxGeometry(500,500,500,1,1,1);

const mesh = new THREE.Mesh(geometry,material);