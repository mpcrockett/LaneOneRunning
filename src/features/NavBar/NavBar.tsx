import {
	Box,
	Flex,
	IconButton,
	Collapse,
	useDisclosure,
	Image,
	useMediaQuery,
	Spinner,
	useOutsideClick,
	Center
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../../assets/1.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import useCategories from "../../hooks/useCategories";
import { useEffect, useRef, useState } from "react";
import Cart from "../Cart/Cart";
import './NavBar.css';

export default function NavBar() {
	const ref = useRef(null);
	const { isOpen, onToggle, onClose } = useDisclosure();
	const [isDesktopScreen] = useMediaQuery("(min-width: 996px)");
	const { isLoading, data, error } = useCategories();
	const [isSticky, setIsSticky] = useState<boolean>(false);
	const navRef = useRef<HTMLDivElement>(null);
	const topRef = useRef<HTMLDivElement>(null);

	const handleScroll = () => {
		if (navRef.current && topRef.current) {
			const navHeight = navRef.current.offsetHeight;
      const topHeight = topRef.current.offsetHeight;
      const stickyOffset = topHeight - navHeight;

      setIsSticky(!!(window.scrollY > stickyOffset));
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);

	useOutsideClick({
		ref: ref,
		handler: () => onClose(),
	})

	return (
		<>
			{error && <p>{error}</p>}
			{isLoading && <Spinner />}
			{data !== null && 
			<Box ref={ref} boxShadow='lg' bg='cream.50'>
				<Center className="top-container" ref={topRef}>
					<Image src={logo} alt='Lane One Running' w={[150, 250]} />
				</Center>
				<Flex
					color='black'
					py={{ base: 2 }}
					px={{ base: 4 }}
					borderBottom={1}
					borderStyle={"solid"}
					borderColor='cream.50'
					ref={navRef}
					bg='cream.50'
					className={`nav ${isSticky ? 'sticky' : ''}`}
				>
					{!isDesktopScreen ? (
							<Flex justify={'space-between'} w='100%'>
								<IconButton
									onClick={onToggle}
									icon={
										isOpen ? (
											<CloseIcon w={3} h={3} />
										) : (
											<HamburgerIcon w={5} h={5} />
										)
									}
									variant={"ghost"}
									aria-label={"Toggle Navigation"}
								/>
								<Cart />
							</Flex>
					) : (
						<DesktopNav navItems={data} />
					)}
				</Flex>

				{!isDesktopScreen && (
					<Collapse in={isOpen} animateOpacity>
						<MobileNav navItems={data} />
					</Collapse>
				)}
			</Box>
			}
		</>

	);
}