import { Category } from "../../utils/Types"
import CategoryMenuBox from "./CategoryMenuBox"
import { useNavigate } from "react-router-dom"

interface Props {
  data: Category[]
}

function CategoryMenu(props: Props) {
  const navigate = useNavigate();

  const handleSubMenuButtonClick = (category: Category) => {
    navigate(`/products/${category.gender}/${category.cat_name}/${category.slug}`)
  };

  const handleCategoryClick = (category: Category) => {
    navigate(`/products/${category.gender}/${category.cat_name}`);
  };

  return (
    <CategoryMenuBox
      label={props.data[0].cat_name}
      data={props.data}
      subClickHandler={handleSubMenuButtonClick}
      catClickHandler={handleCategoryClick}
    />
  );
}

export default CategoryMenu