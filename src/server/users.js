"use strict"

const users = (function(){
    let userRegister = [
        {id: 'Player 1', status: 'off'},
        {id: 'Player 2', status: 'off'}, 
        {id: 'Player 3', status: 'off'}, 
        {id: 'Player 4', status: 'off'}
    ]

    return {

      freeSpot: function(){
         return (userRegister
                  .filter ( user => user.status === 'off' ))
                  .length >= 1
        },
 
      newPlayer: function(){
            let freeSpots = userRegister.filter( user => user.status === 'off' )
            if (freeSpots.length === 0) return null
            return freeSpots[0] 
      }  

    }
})()

module.exports = {
    users
}
