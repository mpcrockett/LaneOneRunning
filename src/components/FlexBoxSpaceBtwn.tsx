import { Box } from '@chakra-ui/react'

interface Props {
  width?: string,
  bg?: string,
  children: React.ReactNode
  alignItems?: string
}

function FlexBoxSpaceBtwn(props: Props) {
  return (
    <Box
        display="flex"
        flexDirection={"row"}
        width={props?.width}
        justifyContent={"space-around"}
        bg={props?.bg}
        alignItems={props?.alignItems}
    >
      {props.children}
    </Box>
  )
}

export default FlexBoxSpaceBtwn