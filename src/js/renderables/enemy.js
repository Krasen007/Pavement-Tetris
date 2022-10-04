import * as me from 'melonjs/dist/melonjs.module.js';
//import { Entity } from 'melonjs/dist/melonjs.module.js';

class EnemyEntity extends me.Sprite {

    /**
     * constructor
     */
    constructor(x,y) {
        //let a = new Entity();
        //a.game
        //let image = me.loader.getImage("player");
        // call the parent constructor
        super(x, y, { 
            image: "ships", framewidth: 32, frameheight: 32
        });

        this.body = new me.Body(this);
        this.body.addShape(new me.Rect(0, 0, this.width, this.height));

        this.body.ignoreGravity = true;

        this.chooseImage();
    }

    chooseImage() {
        let frame = me.Math.random(0,4); // Count the objects in the picture

        this.addAnimation("idle", [frame],1);
        this.setCurrentAnimation("idle");
    }

    /**
     * update the entity
     */
    update(dt) {
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

export default EnemyEntity;
