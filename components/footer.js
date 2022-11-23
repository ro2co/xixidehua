import {Box} from "@chakra-ui/react"
import {css} from "@emotion/react"

const  style = css`
  height: 180px;
  background: url('http://road2code.oss-cn-hangzhou.aliyuncs.com/blog/footer_bg.png');
  background-size: 100%;
  text-align: center;
  padding-top: 2em;
`

function Footer() {
  return <Box css={style} >footer</Box>
}
export default Footer 
