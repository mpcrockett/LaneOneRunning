import { Box, Heading } from "@chakra-ui/react";
import { Category } from "../../utils/Types";
import NavButton from "../../components/NavButton";

interface Props {
  label: string;
  data: Category[];
}

function CategoryMenuBox(props: Props) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Heading size="md" textTransform="capitalize" marginBottom='10px'>
        {props.data[0].name}
      </Heading>
      {props.data.map((sub) => {
        return (
          <NavButton
            label={sub.sub_name}
            clickHandler={() => console.log(sub.subcategory_id)}
            key={sub.subcategory_id}
          />
        );
      })}
    </Box>
  );
}

export default CategoryMenuBox;
