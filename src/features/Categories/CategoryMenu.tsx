import { Category } from "../../utils/Types"
import CategoryMenuBox from "./CategoryMenuBox"

interface Props {
  data: Category[]
}

function CategoryMenu(props: Props) {
  return (
    <CategoryMenuBox label={props.data[0].name} data={props.data} />
  );
}

export default CategoryMenu