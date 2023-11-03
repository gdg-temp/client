import styled from 'styled-components';

import type { CardProps } from './types';

const Card = styled.div<CardProps>`
  width: 319px;
  height: ${({ size }) => (size === 'full' ? '472px;' : '178px;')};
  display: flex;
  flex-direction: column;
`;

const CardFront = styled.div`
  width: 319px;
  height: 178px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 20px;
`;

const CardFrontTop = styled.div`
  display: flex;
  justify-content: space-between;
  :first-child {
    display: flex;
    align-items: center;
    gap: 8px;
    height: 28px;
  }
`;
const CardFrontName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colorGray.black};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  vertical-align: middle;
`;
const CardFrontPosition = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colorGray.blueGray200};
  font-size: ${({ theme }) => theme.fontSize.body3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
const CardFrontEmail = styled.div`
  display: flex;
  align-items: center;
  bottom: 0;
  gap: 4px;
  color: ${({ theme }) => theme.colorGray.black};
  font-size: ${({ theme }) => theme.fontSize.body3};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const CardLinkWrapper = styled.div`
  width: 319px;
  height: 284px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colorGray.blueGray700};
`;

const CardBack = styled.div`
  width: 319px;
  height: 472px;
  border-radius: 8px;
  background-color: #ffffff;
`;

export default {
  Card,
  CardFront,
  CardFrontTop,
  CardFrontName,
  CardFrontEmail,
  CardFrontPosition,
  CardLinkWrapper,
  CardBack,
};
