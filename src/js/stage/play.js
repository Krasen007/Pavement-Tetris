import { Stage, game, ColorLayer, BitmapText } from 'melonjs/dist/melonjs.module.js';
import PlayerEntity from '../renderables/player.js';
import * as me from 'melonjs/dist/melonjs.module.js';
import EnemyEntity from '../renderables/enemy.js';
import EnemyManager from '../managers/enemy-manager.js';

class PlayScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
        // // add a gray background to the default Stage
        // game.world.addChild(new ColorLayer("background", "#202020"));

        // // add a font text display object
        // game.world.addChild(new BitmapText(game.viewport.width / 2, game.viewport.height / 2, {
        //     font: "PressStart2P",
        //     size: 4.0,
        //     textBaseline: "middle",
        //     textAlign: "center",
        //     text: "Krasen!!!"
        // }));
        me.game.world.addChild(new me.ColorLayer("background", "#022000"), 0);

        this.player = new PlayerEntity();
        me.game.world.addChild(this.player, 1);

        this.enemyManager = new EnemyManager();
        this.enemyManager.createEnemies();
        me.game.world.addChild(this.enemyManager, 2);

        //this.enemy = new EnemyEntity(150, 50);
        //this.enemy2 = new EnemyEntity(250, 50);


        //me.game.world.addChild(this.enemy, 2);
        //me.game.world.addChild(this.enemy2, 2);

        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.A, "left");
        me.input.bindKey(me.input.KEY.D, "right");
        me.input.bindKey(me.input.KEY.SPACE, "shoot", true);


    }

    checkIfLoss(y) {
        if (y >= this.player.pos.y) {
            this.reset();
        }
    }

    onDestroyEvent() {
        me.input.unbindKey(me.input.KEY.LEFT);
        me.input.unbindKey(me.input.KEY.RIGHT);
        me.input.unbindKey(me.input.KEY.A);
        me.input.unbindKey(me.input.KEY.D);
        me.input.unbindKey(me.input.KEY.SPACE);

    }
};

export default PlayScreen;
