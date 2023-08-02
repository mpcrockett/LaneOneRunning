import { useRef, useState } from "react";
import { Collapse, Flex, Image, Link, Stack, useColorModeValue, Box, Text, useOutsideClick } from "@chakra-ui/react";
import NavLink from "./NavLink";
import logo from "../../assets/1.png";
import Cart from "../Cart/Cart";
import UserProfile from "../Profile/UserProfile";
import { Category, NavData } from "../../utils/Types";

interface Props {
  navItems: NavData[];
}

function DesktopNav(props: Props) {
  const { navItems } = props;
	const ref = useRef(null);
  const [selectedNavLink, setSelectedNavLink] = useState<NavData | null>(null);

  const handleLinkClick = (item: NavData) => {
		const current = selectedNavLink;
    setSelectedNavLink(current?.label === item.label ? null : item);
  };

	useOutsideClick({
		ref: ref,
		handler: () => setSelectedNavLink(null)
	});

	return (
		<Flex direction='column' align='center' justify='center' ref={ref} w={'100%'}>
			{/* <Image src={logo} alt='Lane One Running' w='300px' /> */}
			<Stack direction={"row"} spacing={40}>
				{navItems.map((navItem) => (
					<NavLink key={navItem.label} navItem={navItem} clickHandler={handleLinkClick} selected={selectedNavLink} />
				))}
        <Stack direction='row' spacing={5}>
          <Cart />
          <UserProfile />
        </Stack>
			</Stack>

			{/* CUSTOM DRAWER COMPONENT */}
			<Collapse in={selectedNavLink !== null}>
				{selectedNavLink && 
          <Box display='flex' flexDirection='row'>
            {selectedNavLink?.children?.map((child) => (
							<DesktopSubNav key={child.sub_name} {...child} />
						))}
          </Box>
        }
			</Collapse>
		</Flex>
	);
}

const DesktopSubNav = ({ sub_name, gender, slug, cat_name }: Category) => {
	return (
		<Link
			href={`/products/${gender}/${cat_name}/${slug}`}
			role={"group"}
			p={2}
			rounded={"md"}
			_hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
		>
			<Stack direction={"row"} align={"left"}>
				<Box>
					<Text
						transition={"all .3s ease"}
						_groupHover={{ color: "pink.400" }}
						textStyle='h2'
					>
						{sub_name}
					</Text>
				</Box>
			</Stack>
		</Link>
	);
};

export default DesktopNav