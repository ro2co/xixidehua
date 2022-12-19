import {useEffect,useState} from "react"
import {Box, Container, Flex} from "@chakra-ui/react"
import {css} from "@emotion/react"
import Link from "next/link"
import Image from "next/image"

const style = css`
  background: #fff;
  line-height: 4rem;
  width: 100%;
  position: fixed;
  top: 0;
  color:#333;
`

const modalStyle = css`
  transition: height 0.6s cubic-bezier(.1,.7,.1,1), background-color 1s;
  a {
    display: block;
    float: left;
    margin-top: 6rem;
    width: 16rem;
    text-align: center;
    font-size: 1.6rem;
    color: #666
  }
`

function Header() {
  const [open, setOpen] = useState(false)
  const handleClick=function() {
    console.log("clicked")
    setOpen(!open)
  }
  const handleClose = function() {
    setOpen(close)
  }
  useEffect(()=>{
    setOpen(false)
  },[])
  return (
    <Box css={style}>
      <Container display="flex" justifyContent="space-between">
        <Flex height="6rem" lineHeight="6rem"  alignItems="center">
          <Link href="/">
            <Image src="http://road2code.oss-cn-hangzhou.aliyuncs.com/blog/logo-1.png" width="180" height="90" />
          </Link>
        </Flex>
        <Flex onClick={handleClick}> menu </Flex>
      </Container>
      <Box css={modalStyle}  height={open ? "60vh": '0'} background={open? "#ebebeb":"white"}>
        <Container display={open ? "block":"none"} >
        <Flex justifyContent="space-between">
          <Link href="/" onClick={handleClose}>主页</Link>
          <Link href="/painting" onClick={handleClose}>我的涂鸦</Link>
          <Link href="/monster" onClick={handleClose}>怪兽星球</Link>
          <Link href="/about">关于我</Link>
      </Flex>
    </Container>
      </Box>
      
    </Box>
  )
}
  export default Header
