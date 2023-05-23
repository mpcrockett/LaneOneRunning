import { Grid, GridItem, Image } from "@chakra-ui/react";

interface Props {
  url: string
  alt: string
}

function PhotoGrid(props: Props) {
  const { url, alt } = props;
  return (
    <Grid
      templateAreas={`"photoOne photoTwo"
                  "photoThree photoThree"
                  "photoThree photoThree"`}
      gridTemplateRows={"200px 200px 200px"}
      gridTemplateColumns={"300px 300px"}
      h="200px"
      gap="1"
    >
      <GridItem pl="2" area={"photoOne"}>
        <Image src={url} alt={alt} boxSize="100%" objectFit="cover" />
      </GridItem>
      <GridItem pl="2" area={"photoTwo"}>
        <Image src={url} alt={alt} boxSize="100%" objectFit="cover" />
      </GridItem>
      <GridItem pl="2" area={"photoThree"}>
        <Image src={url} alt={alt} boxSize="100%" objectFit="cover" />
      </GridItem>
    </Grid>
  );
}

export default PhotoGrid