import styled from 'styled-components';
import { Typography } from '@components';

const ErrorWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 70% auto;
`;

const ErrorImage = styled.div`
  width: 90px;
  height: 81px;
  background-image: url('/error/maintenance.png');
  background-size: cover;
  margin: 30px auto;
`;

const MaintenaceTemplate = () => {
  return (
    <>
      <ErrorWrapper>
        <ErrorImage />
        <Typography type="body2" grayColor="blueGray300">
          서비스 점검 중입니다.
        </Typography>
      </ErrorWrapper>
    </>
  );
};

export default MaintenaceTemplate;
