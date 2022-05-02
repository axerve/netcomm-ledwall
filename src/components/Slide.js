import React, { useEffect, useState } from "react"
import cx from "classnames"
import Donation from "./Donation"
import Video from "./Video"
import Image from "./Image"

import video1 from "../images/axerve-payment-orchestra-1.mp4"
import videoUramaki from "../images/axerve-payment-orchestra-2.mp4"
import videoHero from "../images/video-hero.mp4"

import videoTikTok from "../images/tiktok-netcomm.mp4"

import imagePartner from "../images/partner.png"
import imageAgenda1 from "../images/agenda-1.png"
import imageAgenda2 from "../images/agenda-2.png"

const Slider = ({children}) => {
  const [current,setCurrent] = useState(0)


  useEffect(() => {
    setTimeout(() => {
      setCurrent(old => {
        if(old + 1 === slideNumber) {
          return 0
        } else {
          return old + 1
        }
      })
    }, timing[current])
  }, [current]) 
  

  return <div className="relative">
    {/* VIDEO PAYMENT ORCHESTRA */}
    <Slide color="black" current={current} index={0}><Video src={video1} current={current === 0} id="video-0"/></Slide>


    {/* CONTATORE DONAZIONI */}
    <Slide  current={current} index={1} ><Donation load={current === 1}/></Slide>


    {/* VIDEO HERO */}
    <Slide  color="black" current={current} index={2} >
      <Video src={videoHero} current={current === 2} id="video-2"/>
    </Slide>


    {/* PARTNER IMAGE */}
    <Slide  current={current} index={3} > <Image src={imagePartner} />  </Slide>


    {/* VIDEO URAMAKI */}
    <Slide color="black"  current={current} index={4} ><Video src={videoUramaki} current={current === 4} id="video-4"/></Slide>


    {/* CONTATORE DONAZIONI */}
    <Slide current={current} index={5} ><Donation load={current === 5}/></Slide>


    {/* VIDEO TIKTOK */}
    <Slide color="black"  current={current} index={6} ><Video src={videoTikTok} current={current === 6} id="video-6"/></Slide>


    {/* AGENDA 1 E AGENDA 2 */}
    <Slide current={current} index={7} ><Image src={imageAgenda1} /></Slide>
    <Slide current={current} index={8} ><Image src={imageAgenda2} /></Slide>
  </div>
}


export const Slide = ({children, color, className = "", index = 0, current = 0}) => {
  return <div className={cx("u-full-screen slide absolute top-0 left-0", className, {"current": index === current, "prev": index === current - 1})} style={{backgroundColor: color}}>
    {children}
  </div>
}

const slideNumber = 9;

const timing = {
  0: 71000, //video po
  1: 12000, // schermata punteggio
  2: 59000, //video hero
  3: 12000, //loghi partner
  4: 114000, //video urumaki
  5: 12000, // schermata punteggio
  6: 45000, //video tiktok
  7: 12000, //agenda giorno 1
  8: 12000, //agenda giorno 2
}

const timigVeloce = {
  0: 1500,
  1: 1500,
  2: 1500,
  3: 1500,
  4: 1500,
  5: 1500,
  6: 1500,
  7: 1500,
  8: 1500,
  9: 1500,
  10: 1500,
  11: 1500,
  12: 1500,
  13: 1500,
}



export default Slider