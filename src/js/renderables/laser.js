import * as me from 'melonjs/dist/melonjs.module.js';
import PlayScreen from "../stage/play.js";
import CONSTANTS from '../managers/constants.js';
import EnemyManager from '../managers/enemy-manager.js';

class Laser extends me.Renderable {
    constructor(x, y) {
        super(x, y, CONSTANTS.LASER.WIDTH, CONSTANTS.LASER.HEIGHT);

        this.body = new me.Body(this);
        this.body.addShape(new me.Rect(0, 0, this.width, this.height));
        this.body.vel.set(0, 16);
        this.body.force.set(0, -24);
        this.body.setMaxVelocity(3, 16);
        this.body.collisionType = me.collision.types.PROJECTILE_OBJECT;
        this.body.ignoreGravity = true;
        this.alwaysUpdate = true;
    }

    onResetEvent(x, y) {
        this.pos.set(x, y);
    }

    update(dt) {
        // if the laser is above the screen, remove it from the game world
        if (this.pos.y + this.height <= 0) {
            me.game.world.removeChild(this);
        }
        return super.update(dt);
    }

    draw(renderer) {
        //let color = renderer.getColor();
        renderer.setColor('#5EFF7E');
        renderer.fillRect(this.pos.x, this.pos.y, this.width, this.height);
        //renderer.setColor(color);
    }

    onCollision(response, other) {
        // if (other.body.world.collisionType === me.collision.types.ENEMY_OBJECT) {
        me.game.world.removeChild(this);

        me.state.current().enemyManager.removeChild(other);

        return false;
        // }
    }
}

export default Laser;