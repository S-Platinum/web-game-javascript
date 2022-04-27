import logo from '../img/logo.png'
import platform from '../img/platform.png'
import platformSmallTall from '../img/platformSmallTall.png'
import platformBigTall from '../img/platformBigTall.png'
import platformEnd from '../img/platformEnd.png'
import stackStone from '../img/stackstones.png'
import background from '../img/background.png'
import palacebase from '../img/palacebase.png'
import palacelevel1 from '../img/palacelevel1.png'
import palacelevel2 from '../img/palacelevel2.png'
import palaceroof from '../img/palaceroof.png'
import roooftop from '../img/roooftop.png'
import trees from '../img/trees.png'
import shop from '../img/shop.png'
import idle from '../img/idle.png'
import run from '../img/Run.png'
import runl from '../img/Runl.png'
import jump from '../img/Jump.png'
import fall from '../img/Fall.png'
import coin from '../img/coin.png'
import singlecoin from '../img/singlecoin.png'
import btnU from '../img/btnUp.png'
import btnL from '../img/btnLeft.png'
import btnR from '../img/btnRigh.png'
// import iljimae from '../img/iljimae.png'
import { create } from 'domain'

// console.log(platform)

//Create Canvas
const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d');

canvas.width = 1024
canvas.height = 576

c.fillRect(0,0,canvas.width,canvas.height)

const gravity = 1.5



//Create Player
class Player {
  constructor({image , frame =1, scale = 1}){
      this.speed = 10
      this.position ={
          x:150,
          y:100
      }
      this.velocity = {
          x:0,
          y:1
      }
      this.image = image
      this.width = image.width
      this.height= image.height
      this.frame = frame
      this.scale = scale
      this.frameCurrent =0
      this.frameElapsed =0
      this.frameHold = 5
  }
  draw() {
    c.drawImage(
      this.image,
      (this.frameCurrent * (this.image.width /this.frame))+80,
      69,
      ((this.image.width /this.frame))-162,
      this.image.height-137,
      this.position.x ,
      this.position.y ,
      40,
      80
      //(this.image.width / this.frame) *this.scale,
      //this.image.height* this.scale
      )
  }

  update() {
      this.draw()
      this.frameElapsed++

    if(this.frameElapsed % this.frameHold === 0){
      if(this.frameCurrent < this.frame -1){
        this.frameCurrent++
      } else this.frameCurrent=0
    }
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
      
      if(this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity
      
  }
}

//Create Coin
class Coin {
  constructor({x,y,image , frame =8, scale = 1}){
     
      this.position ={
          x,
          y
      }
      this.image = image
      this.width = image.width
      this.height= image.height
      this.frame = frame
      this.scale = scale
      this.frameCurrent =0
      this.frameElapsed =0
      this.frameHold = 5
  }
  draw() {
    c.drawImage(
      this.image,
      (this.frameCurrent * (this.image.width /this.frame)),
      0,
      ((this.image.width /this.frame)),
      this.image.height,
      this.position.x,
      this.position.y,
      30,
      30
      )
  }

  update() {
      this.draw()
      this.frameElapsed++

    if(this.frameElapsed % this.frameHold === 0){
      if(this.frameCurrent < this.frame -1){
        this.frameCurrent++
      } else this.frameCurrent=0
    }
  }
}

//Create Platform
class Platform{
    constructor({x,y,image , frame =1, scale = 1}){
        this.position={
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height= image.height
        this.frame = frame
        this.scale = scale
        this.frameCurrent =0 
        
    }

    //Draw Platform
    draw() {
        c.drawImage(
          this.image,
          this.position.x,
          this.position.y
          )
    }

}

//Create Decorative Background
class GenericObject{
  constructor({x,y,image , frame =1, scale = 1}){
      this.position={
          x,
          y
      }
      this.image = image
      this.width = image.width
      this.height= image.height
      this.frame = frame
      this.scale = scale
      this.frameCurrent =0 
      this.frameElapsed = 0
      this.frameHold = 1
  }

  //Draw Generic Objects
  draw() {
   
      c.drawImage(
        this.image,
        this.frameCurrent * (this.image.width /this.frame),
        0,
        this.image.width /this.frame,
        this.image.height,
        this.position.x,
        this.position.y,
        (this.image.width / this.frame) *this.scale,
        this.image.height* this.scale
        )
        
  }

  update() {
    this.draw()
    this.frameElapsed++

    if(this.frameElapsed % this.frameHold === 0){
      if(this.frameCurrent < this.frame -1){
        this.frameCurrent++
      } else this.frameCurrent=0
    }
  }

}

//Static Structures
class staticStructure {
  constructor({x,y,image , frame =1, scale = 1}){
      this.position={
          x,
          y
      }
      this.image = image
      this.width = image.width
      this.height= image.height
      this.frame = frame
      this.scale = scale
      this.frameCurrent =0 
      this.frameElapsed = 0
      this.frameHold = 5
  }

  //Draw Static Structures
  draw() {
   
      c.drawImage(
        this.image,
        this.frameCurrent * (this.image.width /this.frame),
        0,
        this.image.width /this.frame,
        this.image.height,
        this.position.x,
        this.position.y,
        (this.image.width / this.frame) *this.scale,
        this.image.height* this.scale
        )
        
  }

  update() {
    this.draw()
    this.frameElapsed++

    if(this.frameElapsed % this.frameHold === 0){
      if(this.frameCurrent < this.frame -1){
        this.frameCurrent++
      } else this.frameCurrent=0
    }
  }
}

//Image creation
function createImage(imageSrc){
  const image = new Image()
  image.src= imageSrc
  return image
}
let platformImage = createImage(platform)
let platformSmallTallImage = createImage(platformSmallTall)
let platformBigTallImage = createImage(platformBigTall)
let platformEndImage = createImage(platformEnd)
let stackStones = createImage(stackStone)
let palacebases = createImage(palacebase)
let palacelevel1s = createImage(palacelevel1)
let palacelevel2s = createImage(palacelevel2)
let palaceroofs = createImage(palaceroof)
let roooftops = createImage(roooftop)
let shops = createImage(shop)
let idles = createImage(idle)
let runs = createImage(run)
let runls = createImage(runl)
let jumps = createImage(jump)
let falls = createImage(fall)
let coinsImage = createImage(coin)

let player = new Player({
  x:150,
  y:100,
  image: idles,
  frame:8,
  scale:1
}

  )
let coins =[]
let platforms = []
let genericObjects = []
let staticStructures =[]
let score =0
let mousex =0
let mousey =0

const keys = {
    right:{
        pressed:false
    },
    left:{
        pressed:false
    },
    up:{
        pressed:false
    }
}

let scrollOffset = 0
let isPressed = false





// let btnRight = document.createElement("button");

//   // console.log('up')
  
// document.body.appendChild(btnRight);

//initialization
function init(){
  platformImage = createImage(platform)
  platformSmallTallImage = createImage(platformSmallTall)
  platformBigTallImage = createImage(platformBigTall)
  platformEndImage = createImage(platformEnd)
  palacebases = createImage(palacebase)
  palacelevel1s = createImage(palacelevel1)
  palacelevel2s = createImage(palacelevel2)
  palaceroofs = createImage(palaceroof)
  roooftops = createImage(roooftop)
  stackStones = createImage(stackStone)
  shops = createImage(shop)
  idles = createImage(idle)
  runs = createImage(run)
  runls = createImage(runl)
  jumps = createImage(jump)
  falls = createImage(fall)
  coinsImage = createImage(coin)
  score =0 

  player = new Player({
    x:150,
    y:100,
    image: idles,
    frame:8,
    scale:1
  }
  
    )

  coins =[
    new Coin ({
          x:250,
          y:340,
          image :coinsImage,
          frame:8,
          scale:1
    })
    ,
    new Coin ({
      x:250,
      y:100,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:400,
      y:340,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:530,
      y:340,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:750,
      y:340,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:880,
      y:340,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:1037,
      y:140,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:1037,
      y:300,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:1180,
      y:340,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:1310,
      y:340,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:1567,
      y:140,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:1567,
      y:300,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:1810,
      y:340,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:1940,
      y:340,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:2180,
      y:300,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:2480,
      y:340,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:2590,
      y:340,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:2620,
      y:240,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:2710,
      y:240,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:2800,
      y:140,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:2900,
      y:140,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3000,
      y:300,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3050,
      y:250,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3100,
      y:200,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3150,
      y:250,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3200,
      y:300,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3510,
      y:380,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3609,
      y:380,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3708,
      y:380,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3807,
      y:380,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3906,
      y:380,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4005,
      y:380,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4104,
      y:380,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4203,
      y:380,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    
    new Coin ({
      x:3609,
      y:220,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3708,
      y:220,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3807,
      y:220,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3906,
      y:220,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4005,
      y:220,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4104,
      y:220,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3609,
      y:135,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3708,
      y:135,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3807,
      y:135,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3906,
      y:135,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4005,
      y:135,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4104,
      y:135,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3708,
      y:40,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3807,
      y:40,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3906,
      y:40,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4005,
      y:40,
      image :coinsImage,
      frame:8,
      scale:1
    })
   
  ]
  platforms = [
      new Platform ({
          x:0,
          y:400,
          image :platformImage,
          frame:1,
          scale:1

      }),
      new Platform ({
          x:platformImage.width,
          y:400,
          image :platformImage,
          frame:1,
          scale:1
      }),
      new Platform ({
          x:(platformImage.width *2)+100,
          y:400,
          image :platformImage,
          frame:1,
          scale:1
      }),
      new Platform ({
          x:(platformImage.width *3 )+300,
          y:400,
          image :platformImage,
          frame:1,
          scale:1
      }),
      new Platform ({
          x:(platformImage.width *4)+400,
          y:200,
          image :platformSmallTallImage
      }),
      new Platform ({
          x:(platformImage.width *4)+ platformSmallTallImage.width + 500,
          y:400,
          image :platformImage,
          frame:1,
          scale:1
      }),
      new Platform ({
          x:(platformImage.width *5)+ platformSmallTallImage.width + 700,
          y:200,
          image :platformSmallTallImage
      }),
      new Platform ({
          x:(platformImage.width *5)+ (platformSmallTallImage.width *2) + 900,
          y:400,
          image :platformImage,
          frame:1,
          scale:1
      }),
      new Platform ({
          x:(platformImage.width*6)+ (platformSmallTallImage.width *2) + 1100,
          y:360,
          image :stackStones
      }),
      new Platform ({
          x:(platformImage.width *7)+ (platformSmallTallImage.width *2)+ (stackStones.width) + 1200,
          y:400,
          image :platformImage,
          frame:1,
          scale:1
      }),
      new Platform ({
        x:(platformImage.width *8)+ (platformSmallTallImage.width *2)+ (stackStones.width) + 1200,
        y:300,
        image :platformBigTallImage,
        frame:1,
        scale:1
      }),
      new Platform ({
        x:(platformImage.width *9)+ (platformSmallTallImage.width *2)+ (stackStones.width) + 1200,
        y:200,
        image :platformBigTallImage,
        frame:1,
        scale:1
       }),
       //Palace
       new Platform ({
        x:3470,
        y:430,
        image :palacebases,
        scale:1
      }),
      new Platform ({
        x:3535,
        y:280,
        image :palacelevel1s,
        scale:1
      }),
      new Platform ({
        x:3575,
        y:175,
        image :palacelevel2s,
        scale:1
      }),
      new Platform ({
        x:3695,
        y:90,
        image :roooftops,
        scale:1
      }), 
      new Platform ({
        x:3655,
        y:92,
        image :palaceroofs,
        scale:1
      }),

      //Platform End 
      new Platform ({
        x:4500,
        y:560,
        image :platformEndImage
      }),
      new Platform ({
        x:4750,
        y:560,
        image :platformEndImage
      }),
      new Platform ({
        x:5000,
        y:560,
        image :platformEndImage
      }),

    
    ]

  staticStructures = [ 
      new staticStructure({
        x:5000,
        y:370,
        image :shops,
        frame:6,
        scale:1.5
      })
    ]

 
  genericObjects = [ 
    new GenericObject({
      x:0,
      y:0,
      image :createImage(background),
      frame:1,
      scale:1
    }) 
    , 
    
    new GenericObject({
      x:9146,
      y:0,
      image :createImage(background)
    })
    ,
      new GenericObject({
        x:400,
        y:80,
        image :createImage(trees)
    })
    
  ]

  

  scrollOffset = 0
}

//Animation loop
function animate(){
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0,0,canvas.width,canvas.height)
    
    genericObjects.forEach((genericObject) =>{
      genericObject.update()
    })

    
    platforms.forEach(platform =>{
        platform.draw()
        
    })

    staticStructures.forEach(staticStructure =>{
      staticStructure.update()
      
   })

    coins.forEach(coin =>{
      coin.update()
      
    })

    
    player.update()
 
    c.drawImage(createImage(logo),0,0)
    c.drawImage(createImage(singlecoin),5,5,20,20)
    c.font = '20px Comic Sans MS'
    c.fillStyle = 'red'
    c.fillText(score, 30,25)
    //console.log( player.position.x,player.position.y,platformImage.width)
    
    
    let upBtn1 = c.drawImage(createImage(btnU),5,415,80,80)
    let upBtn2 = c.drawImage(createImage(btnU),935,415,80,80)
    let leftBtn = c.drawImage(createImage(btnL),5,500,80,80)
    let rightBtn = c.drawImage(createImage(btnR),935,500,80,80)

  

    // Player X Movements
    if (keys.right.pressed && player.position.x < 400){
        player.velocity.x = player.speed 
    }  else if ((keys.left.pressed && player.position.x >140)||
                 (keys.left.pressed && scrollOffset===0 &&
                 player.position.x >0 )){
        player.velocity.x -= player.speed 
    } else  {
        player.velocity.x = 0
        

        if (keys.right.pressed) {
            scrollOffset += player.speed 
            platforms.forEach(platform =>{
                platform.position.x -= player.speed 
            })
            coins.forEach(coin =>{
              coin.position.x -= player.speed 
            })
            staticStructures.forEach(staticStructure =>{
              staticStructure.position.x -= player.speed 
            })

            genericObjects.forEach((genericObject) => {
              genericObject.position.x -= player.speed *.66
            })
            
        } else if (keys.left.pressed && scrollOffset >0){
            scrollOffset -= player.speed 
            platforms.forEach(platform =>{
                platform.position.x += player.speed 
            })
            coins.forEach(coin =>{
              coin.position.x += player.speed 
            })
            staticStructures.forEach(staticStructure =>{
              staticStructure.position.x += player.speed 
            })
            genericObjects.forEach((genericObject) => {
              genericObject.position.x += player.speed *.66
            })
            
        } 
    }
    //Coin collection
    coins.forEach((coin,i) => {
        if (player.position.y +25 >= coin.position.y -30 && player.position.y +25 <= coin.position.y + 30  &&
        player.position.x +20 >= coin.position.x -30 && player.position.x +20 <= coin.position.x + 30 ){
          coins.splice(i,1)
          if(coin.image===coinsImage){
            score++
          }
          
        } 
        // c.fillStyle='red'
        // c.fillRect(player.position.x,player.position.y,40,80)
    })
    // console.log (scrollOffset)
    //Collision detection
    platforms.forEach(platform =>{
        if (player.position.y + 57 <= platform.position.y && 
          player.position.y + 57 + player.velocity.y >= platform.position.y &&
          player.position.x +35 >= platform.position.x &&
          player.position.x <= platform.position.x + platform.width
            ){
            player.velocity.y = 0
            player.image = idles
            player.frame = 8
            player.scale=2.5
        } 
        
        // c.fillStyle ='blue'
        // c.fillRect(platform.position.x,platform.position.y,platform.width,platform.height)
    })

    

    if (keys.up.pressed ||keys.left.pressed||keys.right.pressed){
      if (keys.right.pressed ){
        player.image = runs
        player.frame = 8
        player.scale=2.5
        
      } 
      else if (keys.left.pressed ){
        player.image = runls
        player.frame = 8
        player.scale=2.5
        
      } 
      else if (keys.up.pressed && player.velocity.y <0 ){
        player.image = jumps
        player.frame = 2
        player.scale=2.5
        
      } 
      else if (player.velocity.y >0){
        player.image = falls
        player.frame = 2
        player.scale=2.5
        
      } 

      else {
        player.image = idles
        player.frame = 8
        player.scale=2.5
        
      }

}



    //Win Condition
    if (scrollOffset >4500){
        console.log('You Win')
        $('#winModal').modal('show');
        init()
    }
    
    


    //Lose Condition
    if (player.position.y > canvas.height){
      $(document).ready(function(){
        $('.toast').toast('show');
        setTimeout(() => {console.log('You Lose')
        }, 2000);
      });
      init()
    }
}

init()
animate()

//Mouse controls
window.addEventListener('mousedown', e => {
  mousex = e.offsetX;
  mousey = e.offsetY;
  isPressed = true
  console.log(mousex,mousey)

  if (isPressed){
    if (((mousex >= 5 && mousex<= 85) || (mousex >= 935 && mousex<=1015))&& (mousey >= 415 && mousey<=495) ){
      // console.log('up')
      console.log(mousex,mousey)
      keys.up.pressed = true
      player.velocity.y -= 20;
    } else if ((mousex >= 935 && mousex<= 1015) && (mousey >= 500 && mousey<= 580)){
       //console.log('right')
     
      if (player.position.x < 400){
        player.velocity.x = player.speed }
        else {
                scrollOffset += player.speed 
                platforms.forEach(platform =>{
                    platform.position.x -= player.speed 
                })
                coins.forEach(coin =>{
                  coin.position.x -= player.speed 
                })
                staticStructures.forEach(staticStructure =>{
                  staticStructure.position.x -= player.speed 
                })
    
                genericObjects.forEach((genericObject) => {
                  genericObject.position.x -= player.speed *.66
                })
              }
           }
     else if ((mousex >= 5 && mousex<= 85) && (mousey >= 500 && mousey<= 580)){
        console.log('left')
         
          if  (player.position.x>0){
            player.velocity.x -= player.speed }
            else {

          platforms.forEach(platform =>{
              platform.position.x += player.speed 
          })
          coins.forEach(coin =>{
            coin.position.x += player.speed 
          })
          staticStructures.forEach(staticStructure =>{
            staticStructure.position.x += player.speed 
          })
          genericObjects.forEach((genericObject) => {
            genericObject.position.x += player.speed *.66
          })
          
      }        
    }
  }
})

window.addEventListener('mouseup', e => {
  if (ispressed === true) {
    mousex = 0;
    mousey = 0;
    isPressed = false;
 
  }
});




//
addEventListener('keydown',({keyCode}) =>{
    switch (keyCode) {
        //Left Handed Player Keyboard AWSD
        case 65:
            // console.log('left')
            keys.left.pressed = true
            break

        case 68:
            // console.log('right')
            keys.right.pressed = true
            break
        case 87:
            // console.log('up')
            keys.up.pressed = true
            player.velocity.y -= 20
            break
        //Right Handed Player Arrow Keyboard 
        case 37:
            // console.log('left')
            keys.left.pressed = true
            break

        case 39:
            // console.log('right')
            keys.right.pressed = true
            break
        case 38:
            // console.log('up')
            keys.up.pressed = true
            player.velocity.y -= 20
            break

    }
})
    addEventListener('keyup',({keyCode}) =>{
        switch (keyCode) {
            //Left Handed Player Keyboard AWSD
            case 65:
                // console.log('left')
                keys.left.pressed = false
                player.speed = 5
                break

            case 68:
                // console.log('right')
                keys.right.pressed = false
                player.speed = 5
                break
            case 87:
                // console.log('up')
                keys.up.pressed = false
                break
            //Right Handed Player Arrow Keyboard 
            case 37:
                // console.log('left')
                keys.left.pressed = false
                player.speed = 5
                break

            case 39:
                // console.log('right')
                keys.right.pressed = false
                player.speed = 5
                break
            case 38:
                // console.log('up')
                keys.up.pressed = false
                break
    
        }

})