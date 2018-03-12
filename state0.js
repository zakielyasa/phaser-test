var demo = {}
var centerX = 1500/2
var centerY = 1000/2
var char1 = ""
demo.state0 = function(){}
demo.state0.prototype = {
    preload: function(){
        game.load.image('char1', 'assets/sprites/testing.png')
    },
    create: function(){
        game.stage.backgroundColor = "#6a8260"
        console.log('state0')
        addChangeStateEventListener()

        // responsive game screen
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL

        char1 = game.add.sprite(centerX, centerY, 'char1')
        char1.anchor.setTo(0.5, 0.5)
    },
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            char1.x += 4
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            char1.x -= 4
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            char1.y -= 4
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            char1.y += 4
        }
    }
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