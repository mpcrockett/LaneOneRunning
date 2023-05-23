import { useState } from "react";
import { ProductById } from "../../utils/Types";
import ProductProfileBox from "./ProductProfileBox";

function ProductProfile(props: ProductById) {
  const product = props;
  const [productSelection, setProductSelection] = useState('');

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProductSelection(event.target.value);
  };

  const handleAddToBag = () => {
    console.log(productSelection);
  };

  return (
    <ProductProfileBox product={product} handleSelect={handleSelect} handleSubmit={handleAddToBag} />
  );
}

export default ProductProfile;
