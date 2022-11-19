import {Box} from "@chakra-ui/react"
import {css} from "@emotion/react"

const  style = css`
  height: 200px;
  background: url('http://road2code.oss-cn-hangzhou.aliyuncs.com/blog/footer_bg.png');
  background-size: 100%;
`

function Footer() {
  return <Box css={style} >footer</Box>
}
export default Footer 
