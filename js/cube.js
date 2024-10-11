import * as THREE from '../node_modules/three/build/three.module.js';
import { TrackballControls } from "https://cdn.skypack.dev/three-trackballcontrols-ts@0.2.3";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;


const renderer = new THREE.WebGLRenderer();
renderer.setClearColor("#1F1F1F"); // Set background colour
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

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

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const edges = new THREE.EdgesGeometry( geometry ); 
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { 
    color: 0xffffff, 
    linewidth: 9,
    linecap: 'round', //ignored by WebGLRenderer
	linejoin:  'round' //ignored by WebGLRenderer
} ) );
const material = new THREE.MeshBasicMaterial( { color: 0x0094EE } );
const cube = new THREE.Mesh( geometry, material, line );
scene.add( cube, line );


function animate() {
    controls.update();

    cube.rotation.x += 0.01 
    line.rotation.x += 0.01;
    cube.rotation.y += 0.01 
    line.rotation.y += 0.01;
	renderer.render( scene, camera );
}

renderer.setAnimationLoop( animate );


