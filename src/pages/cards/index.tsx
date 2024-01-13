import React, { useState, useEffect } from 'react';
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

const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-height: 100vh;
  overflow-y: hidden;
`;

const StackedCard = styled(Card)<{ offset?: number; zIndex?: number }>`
  position: relative;
  max-height: 100vh;
  ${(props) =>
    props.offset !== undefined &&
    css`
      transform: translateY(${props.offset}px);
    `}
  z-index: ${(props) => props.zIndex};
  transition: transform 0.2s ease;
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
  const [scrollY, setScrollY] = useState(0);

  const isStacked = cardsData ? cardsData.data.length > 3 : false;

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //console.log(data);

  return (
    <>
      <Head>
        <title>Card List</title>
      </Head>
      {isError ? (
        <div>ERROR</div>
      ) : isLoading ? (
        <Loading />
      ) : (
        <>
          <NavLayout />
          <CardListContainer>
            {Array.isArray(cardsData?.data) &&
              cardsData.data?.map((card: CardType, index: number) => {
                // 카드가 4장 이상이고 스크롤이 0일 때만 겹치도록
                const offset = isStacked ? Math.max(0, index * 30 - scrollY / 3) : 0;
                const zIndex = isStacked ? cardsData.data?.length - index : 0;

                return (
                  <Link href={`/cards/[id]`} as={`/cards/${card.cardId}`} key={card.encodeId}>
                    <StackedCard
                      key={card.encodeId}
                      name={card.name}
                      email={card.email}
                      styleTemplate={card.styleTemplate}
                      designTemplate={card.designTemplate}
                      offset={offset}
                      zIndex={zIndex}
                    />
                  </Link>
                );
              })}
          </CardListContainer>
        </>
      )}
    </>
  );
}

export const getServerSideProps = getServerSideUserProps;
