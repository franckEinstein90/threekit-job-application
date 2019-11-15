"use strict"
const THREE = require('three')


let initGrid = function(scene){
    let gridHelper = new THREE.GridHelper(1000, 200)
    scene.add(gridHelper)
}
let initLights = function(scene){
    let ambientLight = new THREE.AmbientLight( 0x606060 )
    scene.add( ambientLight )
    let directionalLight = new THREE.DirectionalLight(0xffffff)
    scene.add( directionalLight)
}

$(function(){

    let socket = io()


    let scene, camera, container, renderer, geometry, material, mesh

    container = document.querySelector('#scene-container')

    camera = new THREE.PerspectiveCamera( 45, container.clientWidth / container.clientHeight, 1, 10000)
    camera.position.set( 200, 800, 1300)
    camera.lookAt(0,0,0)


    scene = new THREE.Scene()
    scene.background = new THREE.Color( 'skyblue' )

    initGrid(scene)
    initLights(scene)

    renderer = new THREE.WebGLRenderer( {antialias: true} )
    renderer.setSize( container.clientWidth, container.clientHeight)
    renderer.setPixelRatio( window.devicePixelRatio ) 

    container.appendChild( renderer.domElement )
    renderer.render( scene, camera )
}); 
