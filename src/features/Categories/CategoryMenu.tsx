import { Category } from "../../utils/Types"
import CategoryMenuBox from "./CategoryMenuBox"
import { useNavigate } from "react-router-dom"

interface Props {
  data: Category[]
}

function CategoryMenu(props: Props) {
  const navigate = useNavigate();

  const handleMenuButtonClick = (category: Category) => {
    navigate(`/${category.gender}/${category.name}/${category.slug}`)
  };

  return (
    <CategoryMenuBox
      label={props.data[0].name}
      data={props.data}
      clickHandler={handleMenuButtonClick}
    />
  );
}

export default CategoryMenu