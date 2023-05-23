import { Box, Button, Heading } from "@chakra-ui/react";
import { Category } from "../../utils/Types";
import NavButton from "../../components/NavButton";

interface Props {
  label: string;
  data: Category[];
  subClickHandler: (category: Category) => void;
  catClickHandler: (category: Category) => void;
}

function CategoryMenuBox(props: Props) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Button onClick={() => props.catClickHandler(props.data[0])} variant='link' color='black'>
        <Heading size="md" textTransform="capitalize" marginBottom="10px">
          {props.data[0].cat_name}
        </Heading>
      </Button>

      {props.data.map((sub) => {
        return (
          <NavButton
            label={sub.sub_name}
            clickHandler={() => props.subClickHandler(sub)}
            key={sub.subcategory_id}
          />
        );
      })}
    </Box>
  );
}

export default CategoryMenuBox;
