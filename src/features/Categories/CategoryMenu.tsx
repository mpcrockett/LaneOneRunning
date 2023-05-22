import { Category } from "../../utils/Types"
import CategoryMenuBox from "./CategoryMenuBox"
import { useNavigate } from "react-router-dom"

interface Props {
  data: Category[]
}

function CategoryMenu(props: Props) {
  const navigate = useNavigate();

  const handleMenuButtonClick = (category: Category) => {
    navigate(`/products/${category.gender}/${category.cat_name}/${category.slug}`)
  };

  return (
    <CategoryMenuBox
      label={props.data[0].cat_name}
      data={props.data}
      clickHandler={handleMenuButtonClick}
    />
  );
}

export default CategoryMenu