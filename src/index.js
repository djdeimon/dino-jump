import Phaser from 'phaser';
import bg from './assets/BG.png';
import dead from './assets/dead.json';
import deadAtlas from './assets/dead.png';
class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('logo', bg,);
        this.load.atlas('dead', deadAtlas,dead);
    }
      
    create () {
        this.add.image(0,0, 'logo')
        const rambo = this.add.sprite(500, 500, 'dead');
        rambo.anims.create({
            key: 'dead',
            frames: rambo.anims.generateFrameNames('dead', {
                prefix: 'dead1',
                start: 0,
                end: 4
            }),
            frameRate: 15,
            repeat: -1,
        });
        rambo.play('dead');
        this.add.sprite('dead',50 , 'dead').play('dead');
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser',
    width: 1280,
    height: 960,
    scene: MyGame
};

const game = new Phaser.Game(config);
