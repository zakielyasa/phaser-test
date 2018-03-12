demo.state2 = function(){}
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#DDDDDD"
        console.log('state2')
        addChangeStateEventListener()
    },
    update: function(){}
}