import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;
const LinkWrapper = styled.div`
  width: 319px;
  height: 284px;
  border-radius: 8px;
  padding: 20px 16px 72px;
  background-color: ${({ theme }) => theme.colorGray.blueGray700};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const LinkItem = styled.a`
  width: 100%;
  height: 32px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CardDetailBack = styled.div`
  width: 319px;
  height: 472px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colorGray.blueGray700};
  /* padding: 0 20px; */
`;
const CardDetailIntro = styled.div`
  width: 100%;
  height: 120px;
  padding: 32px 20px 20px;
`;
const CardDetailReasons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 64px;
  padding: 0 20px 0;
`;
const CardDetailInfo = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colorGray.blueGray600};
  padding: 24px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const CardDetailInfoItem = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DeleteButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  font-size: 14px;
  font-weight: 500;
`;
const DeleteButton = styled.button`
  color: ${({ theme }) => theme.colorGray.blueGray400};
`;

export default {
  Container,
  ButtonWrapper,
  CardWrapper,
  LinkWrapper,
  LinkItem,
  CardDetailBack,
  CardDetailIntro,
  CardDetailReasons,
  CardDetailInfo,
  CardDetailInfoItem,
  DeleteButtonWrapper,
  DeleteButton,
};
