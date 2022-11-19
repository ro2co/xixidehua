import {Box, Container, Flex} from "@chakra-ui/react"
import {css} from "@chakra-ui/react"
import Link from "next/link"
import Image from "next/image"

const style = css`
  height: 4rem;
  background: rgba(255,255,255, 0.8);
  line-height: 4rem;
  width: 100%;
  position: fixed;
  top: 0;
`

function Header() {
  return (
    <Box css={style}>
      <Container display="flex" justifyContent="space-between">
        <Flex height="4rem" lineHeight="4rem"  alignItems="center">
          <Link href="/">
            <Image src="http://road2code.oss-cn-hangzhou.aliyuncs.com/blog/logo-1.png" width="180" height="90" />
          </Link>
        </Flex>
        <Flex width="30rem" justifyContent="space-between">
          <Link href="/">主页</Link>
          <Link href="/painting">画</Link>
          <Link href="/sketch">涂鸦</Link>
          <Link href="/about">摘抄</Link>
          <Link href="/about">我</Link>
        </Flex>
      </Container>
    </Box>
  )
}
  export default Header
