import styled from 'styled-components';

const sizes = {
  small: '84px',
  large: '120px',
};

const badgeSizes = {
  small: '20px',
  large: '32px',
};

const defaultImgHeight = {
  small: '40px',
  large: '58px',
};

const ProfileWrapper = styled.div<{ size: 'small' | 'large' }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colorGray.blueGray700};
  width: ${(props) => sizes[props.size]};
  height: ${(props) => sizes[props.size]};
  border-radius: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;

const DefaultImage = styled.img<{ size: 'small' | 'large' }>`
  width: auto;
  height: ${(props) => defaultImgHeight[props.size]};
`;

const Badge = styled.div<{ size: 'small' | 'large' }>`
  position: absolute;
  right: 0;
  bottom: 0;
  width: ${(props) => badgeSizes[props.size]};
  height: ${(props) => badgeSizes[props.size]};
  background-color: ${({ theme }) => theme.colorGray.white};
  border-radius: 50%;
  padding: 4px;
  cursor: pointer;
`;

export default {
  ProfileWrapper,
  Image,
  Badge,
  DefaultImage,
};
