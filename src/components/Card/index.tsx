import S from './Card.styled';

import type { CardProps } from './types';

import Profile from '../Profile/index';

const Card = ({
  name,
  company,
  position,
  email,
  profile,
  linkInfo,
  reasons,
  isFront = true,
  size = 'default',
  designTemplate,
  styleTemplate,
  ...args
}: CardProps) => {
  return (
    <>
      <S.Card
        name={name}
        company={company}
        position={position}
        email={email}
        profile={profile}
        linkInfo={linkInfo}
        reasons={reasons}
        isFront={isFront}
        size={size}
        designTemplate={designTemplate}
        styleTemplate={styleTemplate}
        {...args}
      >
        {isFront ? (
          <>
            <S.CardFront
              style={{ background: `url('/card_design/${designTemplate}/${styleTemplate}')` }}
            >
              <S.CardFrontTop>
                <div>
                  <S.CardFrontName>{name}</S.CardFrontName>
                  <S.CardFrontPosition>{position}</S.CardFrontPosition>
                </div>
                {profile ? <Profile size="small" /> : <div style={{ height: '84px' }}></div>}
              </S.CardFrontTop>
              <S.CardFrontEmail>
                <img src="/icons/Email.svg" alt="email" />
                {email}
              </S.CardFrontEmail>
            </S.CardFront>
            {size === 'full' ? <S.CardLinkWrapper></S.CardLinkWrapper> : null}
          </>
        ) : (
          <S.CardBack></S.CardBack>
        )}
      </S.Card>
    </>
  );
};

export default Card;
