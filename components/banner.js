import {Box} from "@chakra-ui/react"
import {css} from "@emotion/react"

const style = css`
  margin-top: 120px;
  height: 850px;
  background: url("http://road2code.oss-cn-hangzhou.aliyuncs.com/blog/banner.png");
  background-size: 100% 100%;
`
export default function Banner() {
  return (
    <Box css={style}>
    </Box>
  )
}
