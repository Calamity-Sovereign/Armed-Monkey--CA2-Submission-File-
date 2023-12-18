// Import necessary classes and resources
import Game from '../engine/game.js';
import Player from './player.js';
import Enemy from './enemy.js';
import PlayerUI from './playerUI.js';
import Platform from './platform.js';
import Collectible from './collectible.js';
import Pigeon from './pigeon.js';

// Define a class Level that extends the Game class from the engine
class Level extends Game {
  
  // Define the constructor for this class, which takes one argument for the canvas ID
  constructor(canvasId) {
    // Call the constructor of the superclass (Game) with the canvas ID
    super(canvasId);
    
    // Create a player object and add it to the game
    const player = new Player(0,-70);
    this.addGameObject(player);
    
    // Add the player UI object to the game
    this.addGameObject(new PlayerUI(10, 10));

    // Set the game's camera target to the player
    this.camera.target = player;

    // Define the platform's width and the gap between platforms
    const platformWidth = 200;
    const gap = 165;

    // Create platforms and add them to the game
    const platforms = [

        //new Platform(-5000.0, -500.0, 5000.0, 1000.0, "rgb(128, 64, 64)", "platform"),// back platform
        new Platform(0.0, 21.0, 900.0, 500.0, "rgb(128, 64, 64)", "platform"), // starting platform
        new Platform(1111, 26, 100.0, 100.0, "rgb(128, 64, 64)", "platform"), ///small platform
        new Platform(1387, 26, 100.0, 100.0, "rgb(128, 64, 64)", "platform"),  //small platform
        new Platform(1676.0, 27.0, 700.0, 300.0, "rgb(128, 64, 64)", "platform"),
        new Platform(2474, 183.0, 100, 100, "rgb(128, 64, 64)", "platform"),
        new Platform(2792, 405, 100, 100, "rgb(128, 64, 64)", "platform"),
        new Platform(2569, 694, 100, 100, "rgb(128, 64, 64)", "platform"),
        new Platform(1554, 897, 900, 100, "rgb(128, 64, 64)", "platform"),
    ];
    for (const platform of platforms) {
      this.addGameObject(platform);
    }

    // Create enemies and add them to the game

   
    this.addGameObject(new Enemy(1700, 750 , 50, 60));
    this.addGameObject(new Enemy(2300, 750 , 50, 60));
    this.addGameObject(new Enemy(2200, 750 , 50, 60));



    this.addGameObject(new Enemy(50, this.canvas.height - 90));
    this.addGameObject(new Enemy(platformWidth + gap + 50, this.canvas.height - 90));
    this.addGameObject(new Enemy(2200, this.canvas.height - 800, 50, 20));//seventh

    // Create collectibles and add them to the game
    this.addGameObject(new Collectible(250, this.canvas.height - 800, 50, 20)); //first
    this.addGameObject(new Collectible(450, this.canvas.height - 800, 50, 20));//second
    this.addGameObject(new Collectible(650, this.canvas.height - 800, 50, 20));//third
    this.addGameObject(new Collectible(850, this.canvas.height - 800, 50, 20));//fourth
    this.addGameObject(new Collectible(1280, this.canvas.height - 800, 50, 20));//fifth
    this.addGameObject(new Collectible(1570, this.canvas.height - 800, 50, 20));//sixth
    this.addGameObject(new Collectible(2200, this.canvas.height - 800, 50, 20));//seventh
    this.addGameObject(new Collectible(2550, this.canvas.height - 800, 50, 20));//eight
    this.addGameObject(new Collectible(2950, this.canvas.height - 500, 50, 20));//nine
    this.addGameObject(new Collectible(1800, 750 , 50, 20));//ten

    //Finishes game and restarts the level - Pigeon
    
    this.addGameObject(new Pigeon(1800, 750 , 50, 60));//ten

    

  }
  
}

// Export the Level class as the default export of this module
export default Level;













////////
