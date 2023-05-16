import { Skeleton, Stack } from '@chakra-ui/react';

interface Props {
  // stackHeight: number,
  height: string
}

function LoadingSkeleton(props: Props) {
  return (
    <Stack>
      <Skeleton height={props.height} />
      <Skeleton height={props.height} />
      <Skeleton height={props.height} />
    </Stack>
  );
}

export default LoadingSkeleton