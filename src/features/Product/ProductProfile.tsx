import { useState } from "react";
import { ProductById } from "../../utils/Types";
import ProductProfileBox from "./ProductProfileBox";
import { useAppDispatch } from "../../store/hooks";
import { addToCart} from "../../store/cartSlice";

function ProductProfile(props: ProductById) {
  const product = props;
  const [productSelection, setProductSelection] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProductSelection(Number(event.target.value));
  };

  const handleAddToBag = () => {
    const item = product.items?.find((item) => item.item_id === productSelection);
    if(item) {
      dispatch(addToCart({
        item_id: item.item_id,
        product_id: item.product_id,
        name: product.name,
        brand: product.brand,
        size: item.size,
        color: item.color,
        quantity: 1,
        url: product.url,
        price: Number(product.price)
      }));
    }
  };

  return (
    <ProductProfileBox product={product} handleSelect={handleSelect} handleSubmit={handleAddToBag} />
  );
}

export default ProductProfile;
