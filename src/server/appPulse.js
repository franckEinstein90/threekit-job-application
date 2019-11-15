"use strict"

const appPulse = (function(){

    let minutesAlive = 0

    return{
        echo: function(){
            minutesAlive += 1
            console.log(`Alive for ${minutesAlive} minutes`)
        }
    }

})()

module.exports = {
    appPulse
}
