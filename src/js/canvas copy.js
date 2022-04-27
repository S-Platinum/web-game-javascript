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
import jump from '../img/Jump.png'
import fall from '../img/Fall.png'
import coin from '../img/coin.png'
import { create } from 'domain'

console.log(platform)

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
      (this.frameCurrent * (this.image.width /this.frame)),
      0,
      ((this.image.width /this.frame)),
      this.image.height-5,
      this.position.x -80,
      this.position.y +20,
      200,
      300
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
let jumps = createImage(jump)
let falls = createImage(fall)
let coinsImage = createImage(coin)

let player = new Player({
  x:150,
  y:100,
  image: idles,
  frame:8,
  scale:2.5
}

  )
let coins =[]
let platforms = []
let genericObjects = []


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
  jumps = createImage(jump)
  falls = createImage(fall)
  coinsImage = createImage(coin)
 
  player = new Player({
    x:150,
    y:100,
    image: idles,
    frame:8,
    scale:2.5
  }
  
    )

  coins =[
    new Coin ({
          x:250,
          y:440,
          image :coinsImage,
          frame:8,
          scale:1
    })
    ,
    new Coin ({
      x:250,
      y:270,
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
      y:440,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:530,
      y:440,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:750,
      y:440,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:880,
      y:440,
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
      y:250,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:1180,
      y:440,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:1310,
      y:440,
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
      y:250,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:1810,
      y:440,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:1940,
      y:440,
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
      y:440,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:2590,
      y:440,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:2620,
      y:340,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:2710,
      y:340,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:2800,
      y:340,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:2900,
      y:340,
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
      x:3530,
      y:470,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3640,
      y:470,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3735,
      y:470,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3835,
      y:470,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3935,
      y:470,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4035,
      y:470,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4130,
      y:470,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4245,
      y:470,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    
    new Coin ({
      x:3640,
      y:280,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3735,
      y:280,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3835,
      y:280,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3935,
      y:280,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4035,
      y:280,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4130,
      y:280,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3640,
      y:150,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3735,
      y:150,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3835,
      y:150,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3935,
      y:150,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4035,
      y:150,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4130,
      y:150,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3735,
      y:40,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3835,
      y:40,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:3935,
      y:40,
      image :coinsImage,
      frame:8,
      scale:1
    })
    ,
    new Coin ({
      x:4035,
      y:40,
      image :coinsImage,
      frame:8,
      scale:1
    })
   
  ]
  platforms = [
      new Platform ({
          x:0,
          y:500,
          image :platformImage,
          frame:1,
          scale:1

      }),
      new Platform ({
          x:platformImage.width,
          y:500,
          image :platformImage,
          frame:1,
          scale:1
      }),
      new Platform ({
          x:(platformImage.width *2)+100,
          y:500,
          image :platformImage,
          frame:1,
          scale:1
      }),
      new Platform ({
          x:(platformImage.width *3 )+300,
          y:500,
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
          y:500,
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
          y:500,
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
          y:500,
          image :platformImage,
          frame:1,
          scale:1
      }),
      new Platform ({
        x:(platformImage.width *8)+ (platformSmallTallImage.width *2)+ (stackStones.width) + 1200,
        y:400,
        image :platformBigTallImage,
        frame:1,
        scale:1
      }),
      new Platform ({
        x:(platformImage.width *9)+ (platformSmallTallImage.width *2)+ (stackStones.width) + 1200,
        y:400,
        image :platformBigTallImage,
        frame:1,
        scale:1
       }),

       //Palace
       new Platform ({
        x:3400,
        y:520,
        image :palacebases
      }),
      new Platform ({
        x:3480,
        y:330,
        image :palacelevel1s
      }),
      new Platform ({
        x:3530,
        y:198,
        image :palacelevel2s
      }),
      new Platform ({
        x:3680,
        y:90,
        image :roooftops
      }), 
      new Platform ({
        x:3630,
        y:92,
        image :palaceroofs
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
    ,
    new GenericObject({
      x:3250,
      y:380,
      image :shops,
      frame:6,
      scale:1.5
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

    coins.forEach(coin =>{
      coin.update()
    })
    player.update()
    c.drawImage(createImage(logo),0,0)

    console.log( player.position.x,player.position.y,platformImage.width)
    

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
            genericObjects.forEach((genericObject) => {
              genericObject.position.x += player.speed *.66
            })
            
        } 
    }

    console.log (scrollOffset)
    //Collision detection
    platforms.forEach(platform =>{
        if ((player.position.y) + (player.height) < platform.position.y  && 
            (player.position.y) + (player.height) + player.velocity.y >= platform.position.y &&
            (player.position.x) + (50) >= platform.position.x &&
            (player.position.x) <= platform.position.x + platform.width){
            player.velocity.y = 0
            player.image = idles
            player.frame = 8
            player.scale=2.5
        }
    })

    if (keys.up.pressed ||keys.left.pressed||keys.right.pressed){
      if (keys.right.pressed ){
        player.image = runs
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
    if (scrollOffset >4000){
        console.log('You Win')
    }



    //Lose Condition
    if (player.position.y > canvas.height){
      console.log('You Lose')
      init()
    }
}

init()
animate()

//
addEventListener('keydown',({keyCode}) =>{
    switch (keyCode) {
        //Left Handed Player Keyboard AWSD
        case 65:
            console.log('left')
            keys.left.pressed = true
            break

        case 68:
            console.log('right')
            keys.right.pressed = true
            break
        case 87:
            console.log('up')
            keys.up.pressed = true
            player.velocity.y -= 20
            break
        //Right Handed Player Arrow Keyboard 
        case 37:
            console.log('left')
            keys.left.pressed = true
            break

        case 39:
            console.log('right')
            keys.right.pressed = true
            break
        case 38:
            console.log('up')
            keys.up.pressed = true
            player.velocity.y -= 20
            break

    }
})
    addEventListener('keyup',({keyCode}) =>{
        switch (keyCode) {
            //Left Handed Player Keyboard AWSD
            case 65:
                console.log('left')
                keys.left.pressed = false
                player.speed = 5
                break

            case 68:
                console.log('right')
                keys.right.pressed = false
                player.speed = 5
                break
            case 87:
                console.log('up')
                keys.up.pressed = false
                break
            //Right Handed Player Arrow Keyboard 
            case 37:
                console.log('left')
                keys.left.pressed = false
                player.speed = 5
                break

            case 39:
                console.log('right')
                keys.right.pressed = false
                player.speed = 5
                break
            case 38:
                console.log('up')
                keys.up.pressed = false
                break
    
        }

})