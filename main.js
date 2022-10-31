import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);

//scene.add(torus);


// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(300).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load('back.jpg');
scene.background = spaceTexture;

// Avatar

const jeffTexture = new THREE.TextureLoader().load('jeff.png');

const jeff = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: jeffTexture }));

scene.add(jeff);


//otros cubos
const phpTexture = new THREE.TextureLoader().load('fondo.jpg');

const php = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ map: phpTexture }));

//scene.add(php);

//conocimientos
const htmlTexture = new THREE.TextureLoader().load('php.jpg');

const html = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ map: htmlTexture }));

scene.add(html);

const cssTexture = new THREE.TextureLoader().load('react.png');

const css = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ map: cssTexture }));

scene.add(css);


const javaTexture = new THREE.TextureLoader().load('java.png');

const java = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ map: javaTexture }));

scene.add(java);

const proTexture = new THREE.TextureLoader().load('jeff.png');

const pro = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), new THREE.MeshBasicMaterial({ map: proTexture }));

//scene.add(pro);

const circleTexture = new THREE.TextureLoader().load('tuerca.png');
const geo = new THREE.CircleGeometry( 2, 40 );
const mat = new THREE.MeshBasicMaterial( { map: circleTexture } );
const circle = new THREE.Mesh( geo, mat );
scene.add( circle );


const payaTexture = new THREE.TextureLoader().load('icon.png');

const paya = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ map: payaTexture }));

scene.add(paya);



const utpTexture = new THREE.TextureLoader().load('utp.jpg');

const utp = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ map: utpTexture }));

scene.add(utp);



// Moon

const moonTexture = new THREE.TextureLoader().load('fondo.jpg');
//const normalTexture = new THREE.TextureLoader().load('fondo.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    //normalMap: normalTexture,
  })
);


moon.position.z = 30;
moon.position.setX(-10);

jeff.position.z = -5;
jeff.position.x = 3;



html.position.z = 6;
html.position.x= 1;
html.position.y= -1;

css.position.z = 6;
css.position.x= 2;

java.position.z = 6;
java.position.x= 3;
java.position.y= -1;

pro.position.z = 12;
pro.position.x = 3;

circle.position.z = 12;
circle.position.x = 3;


paya.position.z = +20;
paya.position.x = -3;
paya.position.y = 1;

utp.position.z = +20;
utp.position.x = -3;
utp.position.y = -1;




// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  jeff.rotation.y += 0.01;
  jeff.rotation.z += 0.01;

  paya.rotation.y += 0.01;
  paya.rotation.z += 0.01;

  utp.rotation.y += 0.01;
  utp.rotation.z += 0.01;

  /*php.rotation.y += 0.01;
  php.rotation.z += 0.01;*/

  camera.position.z = t * -0.01;
  camera.position.x = t * +0.00;
  //camera.position.y = t * +0.001;
  //camera.rotation.y = t * -0.0000;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  /*torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;*/

  moon.rotation.x += 0.005;

  jeff.rotation.y+=0.005

  html.rotation.y += 0.005;
  css.rotation.y += 0.005;
  java.rotation.y += 0.005;

  circle.rotation.z += 0.005;

  paya.rotation.y+=0.005

  utp.rotation.y+=0.005

  // controls.update();

  renderer.render(scene, camera);
}

animate();
