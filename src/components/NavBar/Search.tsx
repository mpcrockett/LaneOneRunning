import { SearchIcon } from '@chakra-ui/icons'
import { Box, Input, useOutsideClick } from '@chakra-ui/react'
import { RefObject, SetStateAction, useEffect, useRef, useState } from 'react';

function Search() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const ref: RefObject<HTMLDivElement> = useRef(null);

  const handleSearchChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchQuery(e.target.value)
  };

  const handleClick = () => {
    setShowSearch(showSearch ? false : true );
  }

  useOutsideClick({
    ref: ref,
    handler: () => {
      setShowSearch(false);
      setSearchQuery('');
    },
  });

  return (
    <Box ref={ref} display="flex" alignItems="center">
      {showSearch && (
        <Input
          variant="flushed"
          focusBorderColor="brand.gray.900"
          placeholder="Search"
          _placeholder={{ opacity: 1, color: "brand.gray.900" }}
          onChange={handleSearchChange}
        />
      )}
      <SearchIcon
        as="button"
        boxSize={4}
        color="brand.gray.900"
        ml="14px"
        onClick={handleClick}
      />
    </Box>
  );
}

export default Search