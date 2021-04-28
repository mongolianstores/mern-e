import React from 'react';
import Loader from "react-loader-spinner";


const LoadingBox = () => {
    return (
        <div style={{display: "flex", flexDirection:"column", justifyContent: "center", minHeight:"50vh"}}>
            <Loader
                type="Rings"
                color="#C097F2"
                height={300}
                width="100%" 

            />
        </div>
    )
}

export default LoadingBox
