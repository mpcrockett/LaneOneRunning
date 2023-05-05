import { Box } from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

function FormItemBox(props: Props) {
  return (
    <Box margin='10px'>
      {props.children}
    </Box>
  )
}

export default FormItemBox