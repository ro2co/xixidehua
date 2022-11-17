import {Box} from "@chakra-ui/react"
import Link from "next/link"

function Header() {
  return <Box>
    <Link href="/">home</Link>
    <Link href="/about">about</Link>
    </Box>
}
export default Header
