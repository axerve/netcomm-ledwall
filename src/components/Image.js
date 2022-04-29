import React from "react"

const Image = ({src}) => {
  return <div style={{backgroundImage: `url('${src}')`, backgroundSize: "100% 100%"}} className="w-full h-full relative" />
}

export default Image