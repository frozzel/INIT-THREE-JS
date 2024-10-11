import * as THREE from '../node_modules/three/build/three.module.js';
import { TrackballControls } from "https://cdn.skypack.dev/three-trackballcontrols-ts@0.2.3";


// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.6,
  1000
);
camera.position.z = 30; // Set camera position

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setClearColor("#1F1F1F"); // Set background colour
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // Add renderer to HTML as a canvas element

// Make Canvas Responsive
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight); // Update size
  camera.aspect = window.innerWidth / window.innerHeight; // Update aspect ratio
  camera.updateProjectionMatrix(); // Apply changes
});

//Trackball Controls for Camera
const controls = new TrackballControls(camera, renderer.domElement);
controls.rotateSpeed = 4;
controls.dynamicDampingFactor = 0.15;

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0x0094EE } );
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry = new THREE.BufferGeometry().setFromPoints( points );

const line = new THREE.Line( geometry, material );

scene.add( line );

function animate() {
    line.rotation.y += 0.01;
    line.rotation.x += 0.01;
    controls.update();
	renderer.render( scene, camera );
}

renderer.setAnimationLoop( animate );