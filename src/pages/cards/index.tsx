import React, { useState } from 'react';
import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';
import styled, { css } from 'styled-components';
import Link from 'next/link';

import { NavLayout } from '@layouts';
import { getServerSideUserProps } from '@utils';
import { KEY } from '@static';
import { getCards } from '@api';
import { Loading, Card } from '@components';
import { Card as CardType } from '@types';
import { EmptyTemplate } from '@templates';

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  position: relative;
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

export default function CardsListPage() {
  const {
    data: cardsData,
    isLoading,
    isError,
  } = useQuery<{ data: CardType[] }, unknown>({
    queryKey: [KEY.CARDS],
    queryFn: getCards,
  });

  const isStacked = cardsData ? cardsData.data.length > 3 : false;
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

  return (
    <>
      <Head>
        <title>Card List</title>
      </Head>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavLayout cardLength={cardsData.data.length} />
          {!cardsData.data.length ? (
            <EmptyTemplate pageName="cards" />
          ) : (
            <CardListContainer>
              {Array.isArray(cardsData?.data) &&
                cardsData.data.map((card: CardType, index: number) => {
                  const offset = isStacked
                    ? index > hoveredIndex
                      ? index * (340 / (cardsData?.data.length - 1)) + 100
                      : index * (340 / (cardsData?.data.length - 1))
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
                        profileUrl={card.profileImage}
                        offset={offset}
                        zIndex={zIndex}
                        onMouseEnter={() => handleCardHover(index)}
                        onMouseLeave={() => handleCardLeave()}
                      />
                    </Link>
                  );
                })}
            </CardListContainer>
          )}
        </>
      )}
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
