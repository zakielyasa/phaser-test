var demo = {}
demo.state0 = function(){}
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#6a8260"
        console.log('state0')
        addChangeStateEventListener()
    },
    update: function(){}
}

function changeState(i, stateNum){
    // console.log(i);
    game.state.start(`state${stateNum}`)
}

function keyAdd(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args)
}

function addChangeStateEventListener(){
    keyAdd(Phaser.Keyboard.ZERO, changeState, 0)
    keyAdd(Phaser.Keyboard.ONE, changeState, 1)
    keyAdd(Phaser.Keyboard.TWO, changeState, 2)
    keyAdd(Phaser.Keyboard.THREE, changeState, 3)
    keyAdd(Phaser.Keyboard.FOUR, changeState, 4)
    keyAdd(Phaser.Keyboard.FIVE, changeState, 5)
    keyAdd(Phaser.Keyboard.SIX, changeState, 6)
    keyAdd(Phaser.Keyboard.SEVEN, changeState, 7)
    keyAdd(Phaser.Keyboard.EIGHT, changeState, 8)
    keyAdd(Phaser.Keyboard.NINE, changeState, 9)
}