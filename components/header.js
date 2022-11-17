import {Box, Container} from "@chakra-ui/react"
import Link from "next/link"
import Image from "next/image"

function Header() {
  return (
    <Container>
      <Box>
        <Image src="http://road2code.oss-cn-hangzhou.aliyuncs.com/blog/logo-1.png" width="180" height="90" />
      </Box>
      <Link href="/">home</Link>
      <Link href="/about">about</Link>
      <Link href="/about">about</Link>
    </Container>
  )
}
export default Header
