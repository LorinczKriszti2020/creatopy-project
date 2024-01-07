import {useEffect, useRef} from 'react';

interface Props {
  title: string,
  description: string,
  CTA: string,
  image: string,
}


const Canvas = ({title, description, CTA, image}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvas = canvasRef.current;
  useEffect(() => {
    if(!canvas){
      return;
    }
    var img = new Image();
    img.src = image
    console.log(img)
    canvas.width = 700
    canvas.height = 700
    const context = canvas.getContext('2d');
    if(!context){
      return;
    }
    let dimension = 1080
    switch(dimension){
      case 500:
        context.drawImage(img, 50, 50, 600, 600);
        break;
      case 1000:
        context.drawImage(img, 0, 0, 700, 700);
        break;
      case 1080:
        context.drawImage(img, 153, 0, 394, 700);
        break;
    }
  })
  return <canvas ref={canvasRef} />;
}

export default Canvas