import { Box } from '@chakra-ui/react'
import trackPic from "../assets/trackPic.jpg";

interface Props {
  children: React.ReactNode
}

function BackgroundBox(props: Props) {
  return (
    <Box
      height='200vh'
      backgroundImage={trackPic}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      {props.children}
    </Box>
  )
}

export default BackgroundBox