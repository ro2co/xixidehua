import Header from "../components/header"
import Footer from "../components/footer"
import {Box} from "@chakra-ui/react"
import {css} from "@emotion/react"

const style = css`
  min-height: 900px;
  background: url("http://road2code.oss-cn-hangzhou.aliyuncs.com/blog/033124.jpg") no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  padding-top: 5rem;
`
function Layout({children}) {
  return <div>
    <Header/>
    <Box css={style}>
      {children}
    </Box>
  </div>
}
export default Layout
