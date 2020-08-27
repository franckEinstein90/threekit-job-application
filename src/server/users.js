"use strict"
const Player = require('@common/Player').Player;

const addPlayerRegistry = function( app ){

    const maxPlayers = 4;
    const userRegister = new Map(); 

    app.players = {

      list : () => {
          const funcResult = []; 
          userRegister.forEach(v=>funcResult.push(v))
          return funcResult; 
      },

      hasFreeSpot: () => userRegister.size < maxPlayers, 
       
      createNewPlayer: function(clientSocketId){
          const newPlayer = new Player({clientSocketId}) 
          userRegister.set(clientSocketId, newPlayer);
          return newPlayer; 
      }, 
      
    removeByClientConnectionId: function(clientSocketId){
        const playerToRemove = userRegister.get(clientSocketId); 
        userRegister.delete(clientSocketId); 
        return clientSocketId; 
    }

    }
    return app; 
}

module.exports = {
   addPlayerRegistry 
}
