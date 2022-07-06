import React from "react"

const ImageDisplay = ({path,alt,width,height}: {path: string;alt: string;width?: number;height?: number;}) => {
  console.log(path); 
  
  return (
  
       <img src={require(`../../../assets/${path}`)} 
       alt={alt}
        width={width ? width : 'inherit'}
        height={height ? height : 'inherit'}/>
      
    )
  }
  
  export default ImageDisplay;