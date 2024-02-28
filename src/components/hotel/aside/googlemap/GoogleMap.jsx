import React, { useEffect } from 'react'
import "../Asidehotel.css";

function GoogleMap() {
    useEffect(()=>{
         const iframeRef=document.getElementById("googlemap");
         const lat=28.7041;
         const lon=77.1025;
         iframeRef.src=`https://maps.google.com/maps?q=${lat},${lon}&h1=es;&output=embed`;
        
    },[])

    return (
        <div title='Coming Soon'>
            <iframe id="googlemap"></iframe>
        </div>
    )
}

export default GoogleMap
