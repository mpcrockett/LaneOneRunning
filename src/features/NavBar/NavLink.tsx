import { Box, Link, Text, useColorModeValue, } from "@chakra-ui/react";
import { NavData } from "../../utils/Types";

interface Props {
  selected: NavData | null;
  navItem: NavData;
  clickHandler: (item: NavData) => void;
}

function NavLink(props: Props) {
  const { selected, navItem, clickHandler } = props;
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const isActive = selected?.label === navItem.label;

	return (
		<Box key={navItem.label}>
			<Text
				p={2}
				textStyle='h2'
				color={isActive ? "pink.400" : linkColor }
				_hover={{
					textDecoration: "none",
					color: "pink.400",
					cursor: 'pointer'
				}}
				onClick={() => clickHandler(navItem)}
			>
				{navItem.label}
			</Text>
		</Box>
	);
}

export default NavLink;