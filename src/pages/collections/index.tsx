import styled, { css } from 'styled-components';
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
  position: relative;
`;

const FoundWrapper = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const NotFoundWrapper = styled.div`
  text-align: center;
  padding: 90% 0;
`;

const StackedCard = styled(Card)<{
  offset?: number;
  zIndex?: number;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}>`
  position: absolute;
  max-height: 100vh;
  ${(props) =>
    props.offset !== undefined &&
    css`
      top: ${props.offset}px;
      transition: top 0.5s ease;
    `}
  left: 8px;
  z-index: ${(props) => props.zIndex};
  @media screen and (min-width: 768px) {
    left: 30px;
  }
`;

export default function CollectionsPage() {
  const [searchText, setSearchText] = useState('');
  const [filteredCards, setFilteredCards] = useState<Collection[]>([]);
  const [showText, setShowText] = useState(false);

  const {
    data: collectionData,
    isError,
    isLoading,
  } = useQuery({
    queryKey: [KEY.COLLECTION],
    queryFn: getCollection,
  });

  useEffect(() => {
    const filteredData = getFilteredCardList(searchText, collectionData?.data || []);
    setFilteredCards(filteredData);
  }, [searchText, collectionData]);

  const isStacked = collectionData ? collectionData.data.length > 3 : false;
  const [hoveredIndex, setHoveredIndex] = useState(10);

  const handleCardHover = (index: number) => {
    setHoveredIndex(index);
  };

  const handleCardLeave = () => {
    setHoveredIndex(10);
  };

  if (isError) {
    throw new Error('데이터를 가져오는데 실패하였습니다.');
  }

  if (isError) {
    throw new Error('데이터를 가져오는데 실패하였습니다.');
  }

  return (
    <>
      {isLoading ? (
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
                  <Link href={`/cards/${card.encodeId}`} key={card.encodeId}>
                    <Card
                      id={'card'}
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
              collectionData.data.map((card: Collection, index: number) => {
                const offset = isStacked
                  ? index > hoveredIndex
                    ? index * (500 / (collectionData?.data.length - 1)) + 100
                    : index * (500 / (collectionData?.data.length - 1))
                  : index * 200;
                const zIndex = isStacked ? index : 0;

                return (
                  <Link href={`/cards/${card.encodeId}`} key={card.encodeId}>
                    <StackedCard
                      id={'card'}
                      key={card.encodeId}
                      name={card.name}
                      email={card.email}
                      styleTemplate={card.styleTemplate}
                      designTemplate={card.designTemplate}
                      offset={offset}
                      zIndex={zIndex}
                      onMouseEnter={() => handleCardHover(index)}
                      onMouseLeave={() => handleCardLeave()}
                    />
                  </Link>
                );
              })
            )}
          </CollectionContainer>
        </>
      )}
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
