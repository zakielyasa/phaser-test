demo.state4 = function(){}
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#a54c0d"
        console.log('state4')
        addChangeStateEventListener()
    },
    update: function(){}
}