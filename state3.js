demo.state3 = function(){}
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#9b755a"
        console.log('state3')
        addChangeStateEventListener()
    },
    update: function(){}
}