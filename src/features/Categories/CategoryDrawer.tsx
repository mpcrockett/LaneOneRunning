import { Box, useOutsideClick } from "@chakra-ui/react";
import { RefObject, useRef } from "react";
import CategoryDrawerBox from "./CategoryDrawerBox";
import CategoryMenu from "./CategoryMenu";
import useCategories from "../../hooks/useCategories";

interface Props {
  selectedTab: string;
  setSelectedTab: React.Dispatch<
    React.SetStateAction<"women" | "men" | "unisex" | ''>
  >;
}

function CategoryDrawer(props: Props) {
  const { isLoading, data, error } = useCategories();

  const ref: RefObject<HTMLDivElement> = useRef(null);

  useOutsideClick({
    ref: ref,
    handler: () => props.setSelectedTab(''),
  });

  return (
    <Box>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && props.selectedTab != null && (
        <CategoryDrawerBox ref={ref}>
          {Object.keys(data[props.selectedTab]).map((x: string) => {
            if (x in data[props.selectedTab]) {
              return <CategoryMenu data={data[props.selectedTab][x]} />;
            } else {
              return null; // or any appropriate fallback
            }
          })
          }
        </CategoryDrawerBox>
      )}
    </Box>
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
