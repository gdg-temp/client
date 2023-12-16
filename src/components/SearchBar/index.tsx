import S from './Searchbar.styled';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import type { SearchBarProps } from './types';
import { Button } from '@components';
import { Collection } from '@types';
import { getCollection } from '@api';
import { KEY } from '@static';

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState('');
  const [filteredCards, setFilteredCards] = useState<Collection[]>([]);

  const { data } = useQuery({
    queryKey: [KEY.COLLECTION],
    queryFn: getCollection,
  });

  useEffect(() => {
    if (data?.data && searchItem) {
      setFilteredCards(
        data?.data.filter((c: Collection) =>
          c.name.toLowerCase().includes(searchItem.toLowerCase()),
        ),
      );
    }
  }, [searchItem, data]);

  const handleChange = (value: string) => {
    setSearchItem(value);
  };

  const handleDelete = () => {
    setSearchItem('');
  };

  return (
    <>
      <S.SearchBar>
        <S.SearchBarInput
          placeholder="검색어를 입력해주세요."
          onChange={(event) => handleChange(event.target.value)}
          value={searchItem}
        />
        {searchItem && <S.DeleteIcon onClick={handleDelete} />}
        <S.SearchIcon />
      </S.SearchBar>
      <S.SearchDropdownWrapper>
        {searchItem &&
          filteredCards.length > 0 &&
          filteredCards.map((item: Collection) => (
            <Link href={`/collections/${item.cardId}`} key={item.encodeId}>
              <Button color="addLinkItem" size="addLinkItem">
                <S.DropdownProfile src={`/icons/${item.profileImage}`} alt={item.name} />
                <span>{item.name}</span>
              </Button>
            </Link>
          ))}
      </S.SearchDropdownWrapper>
    </>
  );
};

export default SearchBar;
