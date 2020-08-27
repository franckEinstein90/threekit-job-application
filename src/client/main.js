"use strict"

const scene = require('./scene').scene

$(function(){
   scene.init()
   scene.render()

/*   let logData = function(){
    navigator.sendBeacon("/left", {id:'0dsds'})
   }
   window.addEventlistener("unload", logData, false)*/
   

   const socket = io(); 
   const user = {

   }; 

   socket.on('welcome', function(welcomePackage){
      if('id' in user && 'clientSocketId' in user) { //already been initialized
         socket.emit("replace",{user}); 
         user.clientSocketId = welcomePackage.playerInfo.clientSocketId; 
      } else {
         user.id = welcomePackage.playerInfo.id; 
         user.clientSocketId = welcomePackage.playerInfo.clientSocketId; 
      }
  })

   socket.on('new player', function(playerInfo){
       let $playerList = $('#user-list')
       $playerList.empty()
       playerInfo.updatedList.forEach(
            p => {
               if(p.status === "on"){
                 $('#user-list').append(`<li style="color:red">Player ${p.id}</li>`)
               }
               else{
                 $('#user-list').append(`<li style="color:grey">Player ${p.id}</li>`)
               }
            })
   })
    
   socket.on('player limit', function( players ){
      const $loginPage = $('#welcome' )
      $loginPage.html(`<H1>There are already 4 players</H1> <H2>Please try again later</H2>`)
   })

/*    let onWindowResize = function(){
        camera.aspect = container.clientWidth / container.clientHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( container.clientWidth, container.clientHeight )
    }
    window.addEventListener( 'resize', onWindowResize )*/


   

}); 
