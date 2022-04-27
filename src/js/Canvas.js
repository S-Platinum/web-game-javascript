import React,{useRef, useEffect} from 'react'

const Canvas = props => {

    
    const canvas = document.querySelector('canvas')
    // const canvasRef = useRef(null)
    // const canvas = canvasRef.current
    const context = canvas.getContext('2d')
  
    canvas.width = 1024
    canvas.height = 576
   
    canvas.fillRect(0,0,canvas.width,canvas.height)

    

    // return <canvas ref= {canvasRef}{...props} />
    return <Canvas />
}

export default Canvas