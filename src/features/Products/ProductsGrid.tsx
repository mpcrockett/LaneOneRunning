import { Center, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import ProductsCard from "./ProductCard";
import { Products } from "../../utils/Types";

interface Props {
  data: Products
}

function ProductsGrid(props: Props) {
  const [isDesktop, isMobileScreen] = useMediaQuery([
    "(min-width: 1000px)",
    "(max-width: 999px)",
  ]);

  return (
    <Center padding='3'>
      <SimpleGrid columns={isDesktop ? 3 : 2} spacing={5}>
        {props.data.map((product) => {
          return <ProductsCard key={product.product_id} {...product} />;
        })}
      </SimpleGrid>
    </Center>
  );
}

export default ProductsGrid;
