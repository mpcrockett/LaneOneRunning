import {
	Stack,
	useDisclosure,
	useColorModeValue,
	Text,
	Link,
	Flex,
	Icon,
	Collapse,
	Divider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { NavData } from "../../utils/Types";

interface Props {
  navItems: NavData[];
}

function MobileNav(props: Props) {
  const { navItems } = props;

	return (
		<Stack
			bg={useColorModeValue("white", "gray.800")}
			p={4}
			display={{ lg: "none" }}
		>
			{navItems.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
			<Divider />
			
		</Stack>
	);
}

function MobileNavItem({ label, children }: NavData) {
	
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={onToggle}>
			<Flex
				py={2}
				as={Link}
				// href={`/products/${gender}/${cat_name}/${slug}`}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}
			>
				<Text
					textStyle='h2'
					color={useColorModeValue("gray.600", "gray.200")}
				>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						transition={"all .25s ease-in-out"}
						transform={isOpen ? "rotate(180deg)" : ""}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={"solid"}
					borderColor={useColorModeValue("gray.200", "gray.700")}
					align={"start"}
				>
					{children &&
						children.map((child) => (
							<Link key={child.subcategory_id} textStyle='h2' py={2} href={`/products/${child.gender}/${child.cat_name}/${child.slug}`}>
								{child.sub_name}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
}

export default MobileNav;
