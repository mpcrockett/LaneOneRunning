import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
	Slide,
	useDisclosure,
	useMediaQuery,
} from "@chakra-ui/react";

function Categories() {
	const isDesktopScreen = useMediaQuery("(min-width: 996px");

	return (
    <div>
      {!isDesktopScreen && <Accordion allowToggle>
			<AccordionItem>
				<h2>
					<AccordionButton>
						<Box as='span' flex='1' textAlign='left'>
							Section 1 title
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</AccordionPanel>
			</AccordionItem>

			<AccordionItem>
				<h2>
					<AccordionButton>
						<Box as='span' flex='1' textAlign='left'>
							Section 2 title
						</Box>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</AccordionPanel>
			</AccordionItem>
		</Accordion>}
    </div>
		
	);
}

export default Categories;
