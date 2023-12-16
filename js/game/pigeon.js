// Import the GameObject class from the 'engine' directory
import GameObject from '../engine/gameobject.js';
import Renderer from '../engine/renderer.js';
import Physics from '../engine/physics.js';
import {Images} from '../engine/resources.js';
import Player from './player.js';
import Platform from './platform.js';


class Pigeon extends GameObject {
    
    constructor(x, y, width, height) {
        
        super(x,y);
    // Add a new Renderer component to this collectible. The renderer is responsible for drawing the collectible.
    // It uses the provided color, width, and height.
    this.addComponent(new Renderer("yellow", width, height,Images.pigeon));

    // Add a new Physics component to this collectible. The physics component is responsible for handling the physics
    // (like movement, collision detection, etc.). In this case, the collectible doesn't move,
    // so the initial velocity, acceleration, and friction are all set to zero.
    this.addComponent(new Physics({ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }));

    // Set the 'tag' property of this collectible. The tag is used to identify the type of GameObject
    // (useful when checking collisions, for example)
    this.tag = 'pigeon';

    // Set the 'value' property of this collectible. This could be used to score points when the collectible is collected.
    this.value = 1;
  }
}
// Export the Enemy class as the default export of this module
export default Pigeon;
