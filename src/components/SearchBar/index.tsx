import S from './Searchbar.styled';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import { Button } from '@components';
import { Collection } from '@types';
import { getCollection } from '@api';
import { KEY } from '@static';
import { getFilteredCardList } from '@utils';
import { SearchBarProps } from './types';

const SearchBar = ({ searchText, onSearchTextChange, onShowTextChange }: SearchBarProps) => {
  const [filteredCards, setFilteredCards] = useState<Collection[]>([]);
  const [isDropdownVisible, setDropdownVisible] = useState(true);

  const { data } = useQuery({
    queryKey: [KEY.COLLECTION],
    queryFn: getCollection,
  });

  useEffect(() => {
    const filteredData = getFilteredCardList(searchText, data?.data || []);
    setFilteredCards(filteredData);
  }, [searchText, data]);

  const handleSearch = () => {
    setDropdownVisible(true);
    onShowTextChange(true);
  };

  const handleChange = (value: string) => {
    onSearchTextChange(value);
    setDropdownVisible(true);
    onShowTextChange(false);
  };

  const handleDelete = () => {
    onSearchTextChange('');
    onShowTextChange(false);
  };

  const searchBarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <S.SearchBar ref={searchBarRef}>
        <S.SearchBarInput
          placeholder="검색어를 입력해주세요."
          onChange={(event) => handleChange(event.target.value)}
          value={searchText}
        />
        {searchText && <S.DeleteIcon onClick={handleDelete} />}
        <S.SearchIcon onClick={handleSearch} />
      </S.SearchBar>
      {isDropdownVisible && (
        <S.SearchDropdownWrapper>
          {searchText &&
            filteredCards.map((item: Collection) => (
              <Link href={`/collections/${item.cardId}`} key={item.encodeId}>
                <Button color="addLinkItem" size="addLinkItem">
                  <S.DropdownProfile src={`/icons/${item.profileImage}`} alt={item.name} />
                  <span>{item.name}</span>
                </Button>
              </Link>
            ))}
        </S.SearchDropdownWrapper>
      )}
    </>
  );
};

export default SearchBar;
