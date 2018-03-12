demo.state8 = function(){}
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#640f89"
        console.log('state8')
        addChangeStateEventListener()
    },
    update: function(){}
}