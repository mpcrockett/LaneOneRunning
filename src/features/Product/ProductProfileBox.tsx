import { Box, Button, Center, Heading, Select, Text } from "@chakra-ui/react";
import PhotoGrid from './PhotoGrid';
import { ProductById } from "../../utils/Types";

interface Props {
  product: ProductById;
  handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: () => void;
}

function ProductProfileBox({ product, handleSelect, handleSubmit }: Props) {
  return (
    <Center padding="3" display="flex">
      <PhotoGrid url={product.url} alt={`${product.brand} ${product.brand}`} />
      <Box mt='14' paddingLeft="3" display="flex" flexDirection="column" width="40%">
        <Heading size="lg">{product.name}</Heading>
        <Heading size="md" mt="2">
          {product.brand}
        </Heading>
        <Text mt="3" fontSize="xs" align="justify">
          {product.description}
        </Text>

        <Select
          placeholder="Select size and color options"
          variant="filled"
          mt="5"
          size="sm"
          onChange={handleSelect}
        >
        {product?.items && product?.items?.map((item) => {
            return (
              <option key={item.item_id} value={item.item_id}>
                {`${item.size} ${item.color}`}
              </option>
            );
        })}
        </Select>
        <Button m="5" onClick={handleSubmit}>Add To Bag</Button>
      </Box>
    </Center>
  );
}

export default ProductProfileBox