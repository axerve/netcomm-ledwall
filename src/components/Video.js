import React, { useEffect } from "react"

const Video = ({src, current = false, id, srcWebp}) => {

  useEffect(() => {
    const video = document.getElementById(id);
    if(current) {
      video.currentTime = 0;
      video.play()
    } else {
      video.pause()
    }
  }, [current])

 return <video muted id={id} style={{width: "100%", height: "100%"}}>
   {srcWebp && <source src={srcWebp} type="video/mp4" />}
   <source src={src} type="video/webm" />
 </video>
}

export default Video