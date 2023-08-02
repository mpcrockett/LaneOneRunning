import { Center, SimpleGrid } from "@chakra-ui/react";
import ProductsCard from "./ProductCard";
import { Products } from "../../utils/Types";

interface Props {
  data: Products
}

function ProductsGrid(props: Props) {
  return (
    <Center padding='3'>
      <SimpleGrid columns={[1, 2, 2, 3]} spacing={5}>
        {props.data.map((product) => {
          return <ProductsCard key={product.product_id} {...product} />;
        })}
      </SimpleGrid>
    </Center>
  );
}

export default ProductsGrid;
