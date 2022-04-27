import React from 'react';
import ReactDOM from 'react-dom';


class Player extends React.Component {
  
    constructor({image , frame =1, scale = 1}){
        this.speed = 10
        this.position ={
            x:150,
            y:100
        };
        this.velocity = {
            x:0,
            y:1
        };
        this.image = image
        this.width = image.width
        this.height= image.height
        this.frame = frame
        this.scale = scale
        this.frameCurrent =0
        this.frameElapsed =0
        this.frameHold = 5
    };
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
    };
  
    update() {
        this.draw()
        this.frameElapsed++
  
      if(this.frameElapsed % this.frameHold === 0){
        if(this.frameCurrent < this.frame -1){
          this.frameCurrent++
        } else this.frameCurrent=0
      };
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        
        if(this.position.y + this.height + this.velocity.y <= canvas.height)
        this.velocity.y += gravity
        
    };
  };

  ReactDOM.render(
      <Player />,
      document.getElementById('app')
  );
  