import Head from 'next/head';
import { getServerSideCardProps } from '@utils';
import { useRouter } from 'next/router';
import { InferGetServerSidePropsType } from 'next';
import { useModal, useToast } from '@hooks';
import { Button, Card, Chip, NavBar, Typography } from '@components';
import S from 'src/templates/card/Card.styled';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import deleteCard from 'src/api/deleteCard';
import saveCard from 'src/api/postSaveCard';
import { DeleteCardRequest, SaveCardRequest } from 'src/api/types';
import ReactCardFlip from 'react-card-flip';

export default function CardDetailPage({
  card,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { open, close } = useModal();
  const {
    query: { id },
    push,
  } = useRouter();

  useEffect(() => {
    // TODO: 추후 삭제되어야 할 로직
    const cookies = document.cookie;
    if (!cookies?.includes('QA_TEST_TOKEN=TEST')) throw new Error('점검중');
  }, []);

  const { showToast } = useToast();
  const [isFlipped, setIsFlipped] = useState(false);
  const { mutateAsync: mutateDeleteCard } = useMutation<null, AxiosError, DeleteCardRequest>({
    mutationFn: deleteCard,
  });
  const { mutateAsync: mutateSaveCard } = useMutation<null, AxiosError, SaveCardRequest>({
    mutationFn: saveCard,
  });

  const handleEditButton = () => {
    push(`/cards/${id}/edit`);
  };
  const handleBackButton = () => {
    push(`/cards/`);
  };
  const handleFlipButton = () => {
    setIsFlipped(!isFlipped);
  };
  const handleDeleteButton = () => {
    open({
      content: (
        <div style={{ textAlign: 'center' }}>
          정말 이 명함을 삭제하시나요?
          <br />
          타인의 수집함에서도 지워집니다.
        </div>
      ),
      buttonType: 'twoButton',
      buttonTitle: '삭제',
      onClick: deleteRequest,
      onClose: close,
    });
  };

  const deleteRequest = async () => {
    try {
      await mutateDeleteCard({ encodedId: id as string });
      close();
      showToast('명함을 삭제하였습니다.');
      push(`/cards/`);
    } catch (err) {
      showToast('명함 삭제에 실패하였습니다.');
    }
  };

  const handleShareButton = async () => {
    if (navigator.share === undefined) {
      try {
        await navigator.clipboard.writeText(location.href);
        open({
          content: '링크가 복사되었습니다.',
          buttonType: 'oneButton',
          buttonTitle: '확인',
          onClick: close,
          onClose: close,
        });
      } catch (error) {
        open({
          content: '오류입니다.',
          buttonType: 'oneButton',
          buttonTitle: '확인',
          onClick: close,
          onClose: close,
        });
      }
    } else {
      navigator.share({
        title: document.title,
        text: card.introduction,
        url: location.href,
      });
    }
  };

  const handleSaveButton = async () => {
    if (!card) {
      push(`/`);
    }
    try {
      await mutateSaveCard({ encodedId: id as string });
      showToast('명함을 저장하였습니다.');
    } catch (err) {
      showToast('명함 저장에 실패하였습니다.');
    }
  };

  return (
    <>
      <Head>
        <meta property="og:url" content="LinkYourLink" />
        <meta property="og:title" content={card.name} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={card.introduction} />
        {/* <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_API_URL}/card_design/${card.styleTemplate}/${card.designTemplate}.png`}
        /> */}
        <meta
          property="og:image"
          content={`https://dev-linkyourlink.vercel.app/card_design/${card.styleTemplate}/${card.designTemplate}.png`}
        />
        <title>{card.name}</title>
      </Head>
      <NavBar
        leadingButton={'back'}
        trailingButton={'flip'}
        onClickLeft={handleBackButton}
        onClickRight={handleFlipButton}
      />
      <S.Container>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <S.CardWrapper>
            <Card
              id={'card'}
              name={card.name}
              company={card.companyName}
              position={card.position}
              email={card.email}
              profileUrl={card.profileImage}
              size={'default'}
              designTemplate={card.designTemplate}
              styleTemplate={card.styleTemplate}
            />
            <S.LinkWrapper>
              {card.linkInfoVOList
                ? card.linkInfoVOList.map((el) => {
                    return (
                      <S.LinkItem key={el.id} href={el.linkUrl}>
                        <img src={`/icons/${el.linkType}.svg`} />
                        {el.linkText}
                      </S.LinkItem>
                    );
                  })
                : null}
            </S.LinkWrapper>
          </S.CardWrapper>

          <S.CardDetailBack>
            <S.CardDetailIntro>
              <Typography type={'title2'}>{card.introduction}</Typography>
            </S.CardDetailIntro>
            <S.CardDetailReasons>
              {card.reasonTexts?.map((el, index) => {
                return <Chip key={index} isClicked={false} value={el}></Chip>;
              })}
            </S.CardDetailReasons>

            <S.CardDetailInfo>
              <S.CardDetailInfoItem>
                <img src="/icons/Map_pin.svg" />
                <div>{card.companyName}</div>
              </S.CardDetailInfoItem>
              <S.CardDetailInfoItem>
                <img src="/icons/Setting.svg" />
                <div>{card.position}</div>
              </S.CardDetailInfoItem>
            </S.CardDetailInfo>
          </S.CardDetailBack>
        </ReactCardFlip>
        <S.ButtonWrapper>
          {card.isMine ? (
            <>
              <Button size={'large'} color={'primary'} onClick={() => handleShareButton()}>
                링크 공유하기
              </Button>
              <Button size={'large'} color={'secondary'} onClick={handleEditButton}>
                수정하기
              </Button>
            </>
          ) : (
            <Button size={'large'} color={'primary'} onClick={() => handleSaveButton()}>
              명함 저장하기
            </Button>
          )}
        </S.ButtonWrapper>
        {card.isMine ? (
          <S.DeleteButtonWrapper>
            <S.DeleteButton onClick={handleDeleteButton}>삭제하기</S.DeleteButton>
          </S.DeleteButtonWrapper>
        ) : null}
      </S.Container>
    </>
  );
}

export const getServerSideProps = getServerSideCardProps;
