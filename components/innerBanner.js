import {gsap} from 'gsap'
import {useRef, useEffect} from "react"
import {Box} from "@chakra-ui/react"

export default function Component() {
  const box = useRef(null)
  const q = gsap.utils.selector(box);
  useEffect(()=>{
    console.log({MorphSVGPlugin})
    gsap.registerPlugin(MorphSVGPlugin)
    gsap.to(
      q(".from"), 4, {
        duration: 1,
        morphSVG: q(".to"),
        ease: "Power1.easeInOut",
        repeat: -1,
        yoyo: true
      }
    )

  },[])

  return (
    <Box h="400px" w="100%">
      <figure ref={box} className="c-blockimage c-lower-head01__image" style={{width: "100%",height: "400px"}}>
        <svg className="js-morphing d-b-spmin" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink
  ="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1420 467" style={{enableBackground:"new 0 0 1420 467"}} xmlSpace="preserve">
          <image xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="http://road2code.oss-cn-hangzhou.aliyuncs.com/blog/074905.jpg" width="100%" height="100%" mask="url(#lower-image)"></image>
          <mask maskUnits="objectBoundingBox" id="lower-image">
            <path className="from" fill="#ffffff" d="M1244.19 465.8 C1044.33 465.8 1044.33 458.21 844.47 458.21 644.62 458.21 644.71 460.45 444.85 460.45 267.06 460.45 255.5 442.08 90.17 430.2 42.25 423.41 1.78 390.01 1.78 335.23 1.79 235.71 10.69 230.51 14.71 133.31 18.73 65.85 72.83 21.8 142.81 21.8 345.53 21.8 345.53 0.34 548.17 0.34 750.8 0.34 750.89 14.98 953.73 14.98 1134.28 14.98 1141.94 20.59 1310.05 32.48 1367.8 39.27 1412.88 86.32 1412.88 150.84 1412.87 224.1 1417.4 229.81 1413.26 301.26 1409.12 388.53 1333.42 465.8 1244.19 465.8 " data-original="M1244,466.6c-190,0-190-9.7-380.1-9.7s-190,7.5-380.1,7.5s-190-12.5-380.1-12.5
  C48.6,451.9,0,413.5,0,358.3c0-107.6,7.4-107.6,7.4-215.1c0-73.3,55.8-121.4,129.1-121.4c193.4,0,193.4-21.4,386.7-21.4
  S716.6,13.3,910,13.3s193.4-3.1,386.7-3.1c66.4,0,115.1,54.1,115.1,120.5c0,77.4,8.2,77.4,8.2,154.7
  C1420,380.9,1339.5,466.6,1244,466.6z"></path>
          </mask>
          <path className="to" fill="#ffffff" d="M1245.5,460.5c-265.7,0-265.7,6.5-530.7,6.5c-264.9,0-264.9-32.9-529.9-32.9c-95.6,0-185-57.5-185-148.7
  c0-52.1,13.8-52.1,13.8-104.1C13.8,90.1,89.3,21.8,185,21.8c264.9,0,264.9-21.8,529.9-21.8c264.9,0,264.9,26.2,530.7,26.2
  c94.8,0,153.6,63.8,153.6,155c0,52.1,20.9,52.1,20.9,104.1C1420,376.6,1340.3,460.5,1245.5,460.5z" style={{visibility: "hidden"}}></path>
        </svg>
      </figure>
    </Box>
  )
}
