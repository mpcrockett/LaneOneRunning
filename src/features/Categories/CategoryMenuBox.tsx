import { Box, Heading } from "@chakra-ui/react";
import { Category } from "../../utils/Types";
import NavButton from "../../components/NavButton";

interface Props {
  label: string;
  data: Category[];
  clickHandler: (category: Category) => void;
}

function CategoryMenuBox(props: Props) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Heading size="md" textTransform="capitalize" marginBottom='10px'>
        {props.data[0].cat_name}
      </Heading>
      {props.data.map((sub) => {
        return (
          <NavButton
            label={sub.sub_name}
            clickHandler={() => props.clickHandler(sub)}
            key={sub.subcategory_id}
          />
        );
      })}
    </Box>
  );
}

export default CategoryMenuBox;
