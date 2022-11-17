import {Button} from "@chakra-ui/react"
import SingleLayout from "../layouts/single"
import Layout from "../layouts"
import {useState,useEffect} from "react"
import Pocketbase from "pocketbase"

const client = new Pocketbase("http://127.0.0.1:8090")
export default function About() {

  const [counter, setCounter] = useState(0)
  const handleClick= async() =>{
    const result = await client.records.getList("posts")
    console.log({result})
  }
  useEffect(()=>{
    console.log("rerender")
  },[counter])
  return (
    <div>
      <main>
        <div>
          Hello about
          {counter}
        </div>
        <div>
          <Button onClick={handleClick}>add</Button>
        </div>
      </main>
    </div>
  )
}

About.getLayout = function getLayoutPage(page) {
  return <Layout>{page}</Layout>
}
