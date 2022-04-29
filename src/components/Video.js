import React, { useEffect } from "react"

const Video = ({src, current = false, id}) => {

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
   <source src={src} type="video/mp4" />
 </video>
}

export default Video