import React, { useEffect, useState } from "react"
import cx from "classnames"

const Slider = ({children}) => {
  const [current,setCurrent] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCurrent(old => {
        console.log(old)
        if(old + 1 === 4) {
          return 0
        } else {
          return old + 1
        }
      })
    }, timing[current])
  }, [current])
  

  return <div className="relative">
    <Slide color="yellow" className={cx({"current": current === 0, "prev": current === 1})} >0</Slide>
    <Slide color="red" className={cx({"current": current === 1, "prev": current === 2})} >1</Slide>
    <Slide color="blue" className={cx({"current": current === 2, "prev": current === 3})} >2</Slide>
    <Slide color="brown" className={cx({"current": current === 3, "prev": current === 0})} >3</Slide>
  </div>
}


export const Slide = ({children, color, className = ""}) => {
  return <div className={cx("u-full-screen slide absolute top-0 left-0", className)} style={{backgroundColor: color}}>
    {children}
  </div>
}

const timing = {
  0: 2000,
  1: 2000,
  2: 2000,
  3: 2000
}



export default Slider