 import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js'
 
 // scene
 const scene = new THREE.Scene();
   
// camera
 const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 , 1000);
 camera.position.z = 5;
 
 // render
 var renderer = new THREE.WebGLRenderer({antialias:true});
 renderer.setClearColor("#000000");


 console.log(scene)
 console.log(camera)
 console.log(renderer)

 renderer.setSize( window.innerWidth, window.innerHeight);
 document.body.appendChild(renderer.domElement);

            window.addEventListener('resize', () => {
                renderer.setSize(window.innerWidth, window.innerHeight);
                camera.aspect = window.innerWidth/ window.innerHeight;
                camera.updateProjectionMatrix();
            })
            
           
            // create a sphere

            var geometry = new THREE.SphereGeometry(1,4,4);
            var material = new THREE.MeshLambertMaterial({
                color: '#36454f' 
             //  Map = new THREE.TextureLoader().load('./jsold/asteroids.jpg')
                });

            var mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh); 
            
            var update = function ( ){
                mesh.rotation.x += 0.01;
                mesh.rotation.y +=0.005;
            };
            // draw scene
            var render = function ( ){
                renderer.render( scene, camera);
            };
            // run game loop ( update, render, repate)
            var gameloop = function( ){
                requestAnimationFrame ( gameloop);
                update( );
                render( );
            };
            gameloop( );

           
             // light 1
            var light = new THREE.PointLight(0xffffff, 1 , 500);
            light.position.set(0, 0, 0);
            scene.add(light);
          
           // light 2
            var light = new THREE.PointLight(0xffffff, 2 , 500);
            light.position.set(0,0,25);
            scene.add(light); 
      
    
        // background
       // const spaceTexture = new THREE.TextureLoader().load('space.jpg');
       // scene.background = spaceTexture;


        function addStar() {
            const geometry = new THREE.SphereGeometry(0.09,32,32);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const star = new THREE.Mesh(geometry, material);
          
            const [x, y, z] = Array(3)
              .fill()
              .map(() => THREE.MathUtils.randFloatSpread(100));
          
            star.position.set(x, y, z);
            scene.add(star);
          }
          
          Array(200).fill().forEach(addStar);



    
    

     


 


