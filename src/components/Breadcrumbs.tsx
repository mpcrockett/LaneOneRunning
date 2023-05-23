import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function Breadcrumbs() {
  const params = useParams();
  const keys = Object.keys(params);

  const getUrlFromKey = (x: string) => {
    let url;
    if (x === "gender") {
      url = `/products/${params.gender}`;
    } else if (x === "category") {
      url = `/products/${params.gender}/${params.category}`;
    } else if (x === "subcategory") {
      url = `/products/${params.gender}/${params.category}/${params.subcategory}`;
    } else if (x === "id") {
      url = `/products/${params.gender}/${params.category}/${params.subcategory}`;
    }

    return url;
  };

  return (
    <Center>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="gray.500" />}
      >
        {keys.map((x, index) => {
          return (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink
                href={getUrlFromKey(x)}
                textTransform="capitalize"
              >
                {params[x]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </Center>
  );
}

export default Breadcrumbs;
