import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { getServerSideUserProps } from '@utils';
import { useQuery } from '@tanstack/react-query';
import { KEY } from '@static';
import { getCollection } from '@api';
import { Loading, Card, Typography } from '@components';
import Link from 'next/link';
import { Collection } from '@types';
import { NavLayout } from '@layouts';
import { getFilteredCardList } from '@utils';

const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-height: 100vh;
`;

const FoundWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const NotFoundWrapper = styled.div`
  text-align: center;
  padding: 90% 0;
`;

export default function CollectionsPage() {
  const [searchText, setSearchText] = useState('');
  const [filteredCards, setFilteredCards] = useState<Collection[]>([]);
  const [showText, setShowText] = useState(false);

  const { data, isError, isLoading } = useQuery({
    queryKey: [KEY.COLLECTION],
    queryFn: getCollection,
  });

  useEffect(() => {
    const filteredData = getFilteredCardList(searchText, data?.data || []);
    setFilteredCards(filteredData);
  }, [searchText, data]);

  return (
    <>
      {isError ? (
        <div>ERROR</div>
      ) : isLoading ? (
        <Loading />
      ) : (
        <>
          <NavLayout
            searchText={searchText}
            onSearchTextChange={setSearchText}
            onShowTextChange={setShowText}
          />
          {showText && filteredCards.length > 0 && (
            <FoundWrapper>
              <Typography type="title2" systemColor="main">
                {filteredCards.length}
              </Typography>
              <Typography type="title2" grayColor="white">
                개의 명함을 찾았어요!
              </Typography>
            </FoundWrapper>
          )}
          <CollectionContainer>
            {searchText ? (
              filteredCards.length > 0 ? (
                filteredCards.map((card) => (
                  <Link href={`/cards/[id]`} as={`/cards/${card.cardId}`} key={card.encodeId}>
                    <Card
                      key={card.encodeId}
                      name={card.name}
                      email={card.email}
                      styleTemplate={card.styleTemplate}
                      designTemplate={card.designTemplate}
                    />
                  </Link>
                ))
              ) : (
                <NotFoundWrapper>
                  <Typography type="title2" grayColor="blueGray400">
                    찾으시는 명함이
                    <br />
                    존재하지 않습니다.
                  </Typography>
                </NotFoundWrapper>
              )
            ) : (
              data.data.map((card) => (
                <Link href={`/cards/[id]`} as={`/cards/${card.cardId}`} key={card.encodeId}>
                  <Card
                    key={card.encodeId}
                    name={card.name}
                    email={card.email}
                    styleTemplate={card.styleTemplate}
                    designTemplate={card.designTemplate}
                  />
                </Link>
              ))
            )}
          </CollectionContainer>
        </>
      )}
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
