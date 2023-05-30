import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
import { Product } from "../../utils/Types";
import { useNavigate } from "react-router-dom";

function ProductsCard(props: Product) {
  const product = props;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(`/products/${product.gender}/${product.cat_name}/${product.slug}/${product.product_id}`);
  };

  return (
    <Card maxW="sm" maxH="md" bg="brand.cream.50" onClick={handleButtonClick}>
      <CardBody alignItems="center">
        <Box height="150px" width="100%">
          <Image
            height="100%"
            width="100%"
            objectFit="cover"
            src={product.url}
            alt={`${product.gender} ${product.brand} ${product.name}`}
            borderRadius="md"
          />
        </Box>
        <Stack mt="3" spacing="1">
          <Heading size="sm">{product.name + " by " + product.brand}</Heading>
          <Text fontSize="xs" textTransform="capitalize">
            {product.gender}
          </Text>
          <Text color="brand.teal.600" fontSize="xs">
            {`$${product.price}`}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default ProductsCard;
