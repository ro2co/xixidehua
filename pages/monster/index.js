import {useEffect} from "react"
import {gsap} from 'gsap'
import {Container} from "@chakra-ui/react"
import Layout from '../../layouts'
import InnerBanner from '../../components/innerBanner'

export default function MonsterPage() {
  useEffect(()=>{
    console.log({MorphSVGPlugin})
    gsap.registerPlugin(MorphSVGPlugin)
  },[])
  return (
    <div>
      <Container>
        <InnerBanner />
      </Container>
    </div>
  )
}
MonsterPage.getLayout = function(page) {
  return <Layout>{page}</Layout>
}
