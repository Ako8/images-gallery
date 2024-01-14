import React from "react";


function Images({image}){

    const imageStyle = {
        width: '200px',
        marginTop: '20px',
    } 

    return(
        <img src={image} style={imageStyle}/>
    );
}



export default Images;