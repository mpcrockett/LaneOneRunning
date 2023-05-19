import { Box } from "@chakra-ui/react"
import NavBar from "../NavBar/NavBar"
import CategoryDrawer from "../Categories/CategoryDrawer"
import { useState } from "react";

function Menu() {
  const [selectedTab, setSelectedTab] = useState<'women' | 'men' | 'unisex' | ''>('');

  return (
    <Box display="flex" flexDirection={"column"} id="outer-menu-box">
      <NavBar setSelectedTab={setSelectedTab} />
      {selectedTab && (
        <CategoryDrawer
          setSelectedTab={setSelectedTab}
          selectedTab={selectedTab}
        />
      )}
    </Box>
  );
}

export default Menu



// // example data:
// {
//   "women": {
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
//   "men": {
//     "shoes": [
//       {
//         "subcategory_id": 7,
//         "sub_name": "road shoes",
//         "category_id": 2,
//         "gender": "men",
//         "name": "shoes"
//       },
//       {
//         "subcategory_id": 8,
//         "sub_name": "trail shoes",
//         "category_id": 2,
//         "gender": "men",
//         "name": "shoes"
//       }
//     ],
//     "bottoms": [
//       {
//         "subcategory_id": 9,
//         "sub_name": "long pants & tights",
//         "category_id": 12,
//         "gender": "men",
//         "name": "bottoms"
//       },
//       {
//         "subcategory_id": 11,
//         "sub_name": "shorts",
//         "category_id": 12,
//         "gender": "men",
//         "name": "bottoms"
//       }
//     ],
//     "tops": [
//       {
//         "subcategory_id": 12,
//         "sub_name": "sleeveless",
//         "category_id": 14,
//         "gender": "men",
//         "name": "tops"
//       },
//       {
//         "subcategory_id": 13,
//         "sub_name": "longsleeves",
//         "category_id": 14,
//         "gender": "men",
//         "name": "tops"
//       }
//     ]
//   },
//   "unisex": {
//     "accessories": [
//       {
//         "subcategory_id": 10,
//         "sub_name": "bags",
//         "category_id": 19,
//         "gender": "unisex",
//         "name": "accessories"
//       }
//     ]
//   }
// }