"use strict"

const scene = require('./scene').scene

$(function(){
   scene.init()
   scene.render()

/*   let logData = function(){
    navigator.sendBeacon("/left", {id:'0dsds'})
   }
   window.addEventlistener("unload", logData, false)*/
   
   //new connection, check if there's an open spot

   let socket = io()

   socket.on('new player', function(playerInfo){
       let $playerList = $('#user-list')

       $playerList.empty()
       playerInfo.players.forEach(
            p => {
               if(p.status === "on"){
                 $('#user-list').append(`<li style="color:red">${p.id}</li>`)
               }
               else{
                 $('#user-list').append(`<li style="color:grey">${p.id}</li>`)
               }
            })
   })
    
   socket.on('player limit', function(){
        let $loginPage = $('#welcome' )
        $loginPage.html(`<H1>There are already 4 players</H1> <H2>Please try again later</H2>`)
   })

/*    let onWindowResize = function(){
        camera.aspect = container.clientWidth / container.clientHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( container.clientWidth, container.clientHeight )
    }
    window.addEventListener( 'resize', onWindowResize )*/


   

}); 
