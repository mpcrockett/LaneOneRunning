import { Box } from "@chakra-ui/react"
import NavBar from "../NavBar/NavBar"
import CategoryDrawer from "../Categories/CategoryDrawer"


function Menu() {
  return (
  <Box display='flex' flexDirection={'column'} id="outer-menu-box">
    <NavBar />
    <CategoryDrawer />
  </Box>
  )
}

export default Menu