"use strict"
const THREE = require('three')

$(function(){
    let scene, camera, container, renderer, geometry, material, mesh

    container = document.querySelector('#scene-container')

    camera = new THREE.PerspectiveCamera( 35, container.clientWidth / container.clientHeight, 0.1, 100)
    camera.position.set( 0, 0, 10)

    geometry = new THREE.BoxBufferGeometry(2, 2, 2)
    material = new THREE.MeshBasicMaterial()
    mesh = new THREE.Mesh( geometry, material ) 

    scene = new THREE.Scene()
    scene.background = new THREE.Color( 'skyblue' )
    scene.add( mesh )
    renderer = new THREE.WebGLRenderer( {antialias: true} )
    renderer.setSize( container.clientWidth, container.clientHeight)
    renderer.setPixelRatio( window.devicePixelRatio ) 

    container.appendChild( renderer.domElement )
    renderer.render( scene, camera )
}); 
