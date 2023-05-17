import { Center, Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Icon, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { IconType } from "react-icons";

interface Props {
  children?: React.ReactNode;
  icon: IconType;
  label: string;
}

function SideDrawer(props: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Center width="16px" height="16px" m="10px">
        <div ref={btnRef}>
          <Icon
            as={props.icon}
            boxSize={6}
            onClick={onOpen}
            color="brand.gray.900"
          />
        </div>
      </Center>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="brand.cream.50">
          <DrawerCloseButton variant="ghost" />
            <DrawerHeader
              fontFamily={`'Playfair Display', serif`}
              fontSize="lg"
              fontWeight="400"
            >
              Your Account
            </DrawerHeader>
          {props.children}
        </DrawerContent>
      </Drawer>
    </>
  );
}


export default SideDrawer