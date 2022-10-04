import * as me from 'melonjs/dist/melonjs.module.js';

class PlayerEntity extends me.Sprite {

    /**
     * constructor
     */
    constructor() {
        let image = me.loader.getImage("player");
        // call the parent constructor
        super(            
            me.game.viewport.width / 2 - image.width / 2,
            me.game.viewport.height - image.height - 20,
            { image: image, width: 32, height: 32 }
        );

        this.velx = 450;
        this.maxX = me.game.viewport.width - this.width;
    }

    /**
     * update the entity
     */
    update(dt) {
        if (me.input.isKeyPressed("left")) {
            this.pos.x -= this.velx * dt / 1000;            
        }

        if (me.input.isKeyPressed("right")) {
            this.pos.x += this.velx * dt / 1000;
        }
    
        this.pos.x = me.Math.clamp(this.pos.x, 32, this.maxX);
        // change body force based on inputs
        //....
        // call the parent method
        return super.update(dt);
    }

    /**
      * colision handler
      * (called when colliding with other objects)
      */
    onCollision(response, other) {
        // Make all other objects solid
        return true;
    }
};

export default PlayerEntity;
