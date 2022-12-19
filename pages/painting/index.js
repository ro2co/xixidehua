import { useRef, useEffect } from "react"
import {Box, Container, Button} from "@chakra-ui/react"
import {css} from "@emotion/react"
import Layout from "../../layouts/index"
import InnerBanner from '../../components/innerBanner'

export default function Page() {

  return (
    <Box>
      <Container display="flex" flexWrap="nowrap">
        <InnerBanner />
      </Container>
      <Container display="flex" justifyContent="space-between">
        <Box h="400px" w="30%" bg="white" borderRadius="1em">
          left
        </Box>
        <Box h="900px" w="68%" bg="white" borderRadius="1em">
          right
        </Box>
      </Container>

    </Box>
  )
}
Page.getLayout = function(page) {
  return <Layout>{page}</Layout>
}
