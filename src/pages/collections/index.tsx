import { useState, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';
import { getServerSideUserProps } from '@utils';
import { useQuery } from '@tanstack/react-query';
import { KEY } from '@static';
import { getCollection } from '@api';
import { Loading, Card } from '@components';
import Link from 'next/link';
import { Collection } from '@types';
import { NavLayout } from '@layouts';

const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-height: 100vh;
`;

export default function CollectionsPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [KEY.COLLECTION],
    queryFn: getCollection,
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Collection[]>([]);

  const handleSearchIconClick = () => {
    if (searchResults.length > 0) {
      console.log('검색 결과: ', searchResults);
    } else {
      console.log('찾으시는 명함이 존재하지 않습니다.');
    }
  };

  return (
    <>
      {isError ? (
        <div>ERROR</div>
      ) : isLoading ? (
        <Loading />
      ) : (
        <>
          <NavLayout onClickSearch={handleSearchIconClick} />
          <CollectionContainer>
            {data.data.map((card) => {
              return (
                <Link href={`/cards/[id]`} as={`/cards/${card.cardId}`} key={card.encodeId}>
                  <Card
                    key={card.encodeId}
                    name={card.name}
                    email={card.email}
                    styleTemplate={card.styleTemplate}
                    designTemplate={card.designTemplate}
                  />
                </Link>
              );
            })}
          </CollectionContainer>
        </>
      )}
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
