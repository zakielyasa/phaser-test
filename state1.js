demo.state1 = function(){}
demo.state1.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#1e6d60'
        console.log('state1')
        addChangeStateEventListener()
    },
    update: function(){}
}