// Aliases
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Graphics = PIXI.Graphics,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite,
    Text = PIXI.Text,
    TextStyle = PIXI.TextStyle,
    Anime = PIXI.extras.AnimatedSprite;
//Create a Pixi Application
let app = new Application({
    width: 512,
    height: 512,
    antialiasing: true,
    transparent: false,
    resolution: 1
  }
);
// add the "app" canvas to your document
document.body.appendChild(app.view);
loader
  .add("images/timeflip.json")
  .load(setup); //-------------------> call "setup" function once textures are loaded

//Define variables that might be used in more
//than one function
let state, clock, gameScene, gameOverScene, id;

function setup() {
  gameScene = new Container();
  app.stage.add(gameScene);
  // make Sprites and add them to "gameScene"
  // Create alias for the texture atlas frame ids
  id = resources["images/timeflip.json"].textures;
  clock = new Sprite(id[""])
}
