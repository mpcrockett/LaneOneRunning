import { useOutsideClick } from "@chakra-ui/react";
import { RefObject, useRef } from "react";
import CategoryDrawerBox from "./CategoryDrawerBox";
import { Gender } from "../../utils/Types";
import CategoryMenu from "./CategoryMenu";

interface Props {
  selectedTab: string | null;
  setSelectedTab: React.Dispatch<React.SetStateAction<"women" | "men" | "unisex" | null>>;
  data: Gender;
}

function CategoryDrawer(props: Props) {
  const ref: RefObject<HTMLDivElement> = useRef(null);
  const keys = Object.keys(props.data);

  useOutsideClick({
    ref: ref,
    handler: () => props.setSelectedTab(null),
  });

  return (
    <CategoryDrawerBox ref={ref}>
      {keys.map((x) => {
        return <CategoryMenu data={props.data[x]} />;
      })}
    </CategoryDrawerBox>
  );
}

export default CategoryDrawer;

//example data
// {
//     "shoes": [
//       {
//         "subcategory_id": 1,
//         "sub_name": "road shoes",
//         "category_id": 2,
//         "gender": "women",
//         "name": "shoes"
//       },
//       {
//         "subcategory_id": 2,
//         "sub_name": "trail shoes",
//         "category_id": 2,
//         "gender": "women",
//         "name": "shoes"
//       }
//     ],
//     "bottoms": [
//       {
//         "subcategory_id": 3,
//         "sub_name": "long pants & tights",
//         "category_id": 12,
//         "gender": "women",
//         "name": "bottoms"
//       },
//       {
//         "subcategory_id": 4,
//         "sub_name": "shorts ",
//         "category_id": 12,
//         "gender": "women",
//         "name": "bottoms"
//       }
//     ],
//     "tops": [
//       {
//         "subcategory_id": 5,
//         "sub_name": "sleeveless",
//         "category_id": 14,
//         "gender": "women",
//         "name": "tops"
//       },
//       {
//         "subcategory_id": 6,
//         "sub_name": "longsleeves",
//         "category_id": 14,
//         "gender": "women",
//         "name": "tops"
//       }
//     ]
//   },
