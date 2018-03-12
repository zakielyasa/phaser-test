demo.state5 = function(){}
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#a1d82b"
        console.log('state5')
        addChangeStateEventListener()
    },
    update: function(){}
}