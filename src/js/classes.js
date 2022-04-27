class Animation{
    constructor({position, imageSrc, scale=1, frame=1}){
        this.position = position
        this.width = 50
        this.height =150
        this.image = new Image()
        this.imageSrc= imageSrc
        this.scale = scale
        this.frame = frame
        this.frameCurrent =0 
        this.frameElapsed =0
        this.frameHold =5
    }

    draw(){
        caches.drawImage(
            this.image,
            this.frameCurrent * (this.image.width / this.frame),
            0,
            this.image.width / this.frame,
            this.image.height,
            this.position.x,
            this.position.y,
            (this.image.width / this.frame) * this.scale,
            this.image.height * this.scale
        )
    }

    update(){
        this.draw()
        this.frameElapsed++

        if(this.frameElapsed % this.frameHold === 0){
            if(this.frameCurrent < this.frame -1){
                this.frameCurrent++
            } else this.frameCurrent=0
        }
    }
}