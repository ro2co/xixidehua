import Header from "../components/header"
import Footer from "../components/footer"
import {Box} from "@chakra-ui/react"
import {css} from "@emotion/react"

const style = css`
  min-height: 900px;
  background: url("http://road2code.oss-cn-hangzhou.aliyuncs.com/blog/header_bg.webp") no-repeat;
  background-size: 100%;
  background-position: 0 -24em;
  padding-top: 5rem;
`
function Layout({children}) {
  return <div>
    <Header/>
    <Box css={style}>
      {children}
    </Box>
    <Footer />
  </div>
}
export default Layout
