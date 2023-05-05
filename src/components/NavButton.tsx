import { Button } from '@chakra-ui/react';

interface Props {
  label: string,
  clickHandler: () => void,
}

function NavButton(props: Props) {
  return (
    <Button variant="navButton" onClick={props.clickHandler}>
      {props.label}
    </Button>
  );
}

export default NavButton