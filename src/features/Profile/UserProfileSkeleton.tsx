import { Box, DrawerBody, Skeleton, Stack, StackDivider } from "@chakra-ui/react";

function UserProfileSkeleton() {
  return (
      <DrawerBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Box>
          <Box>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Box>
          <Box>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Box>
        </Stack>
      </DrawerBody>
  );
}

export default UserProfileSkeleton;
