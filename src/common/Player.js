"use strict"; 

let ctr = 0; 
const newPlayerId = function(){
   ctr++; 
   return ctr; 
}

const Player = function( options ){
    this.id = newPlayerId(); 
    this.clientSocketId = options.clientSocketId; 
}

module.exports = {
    Player
}