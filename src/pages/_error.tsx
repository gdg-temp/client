import { NextPageContext } from 'next';
import { Typography } from '@components';
import styled from 'styled-components';

const ErrorWrapper404 = styled.div`
  text-align: center;
`;

const Error404 = styled.div`
  color: ${({ theme }) => theme.colorGray.blueGray600};
  font-size: 80px;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  margin: 70% auto 0 auto;
  width: 70%;
  height: 180px;
  @media screen and (min-width: 768px) {
    font-size: 90px;
    height: 220px;
  }
`;

const ErrorImage404 = styled.div`
  width: 120px;
  height: 120px;
  background-image: url('/error/error404.gif');
  background-size: cover;
  margin: 20% 0;
  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const ErrorWrapper500 = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 90% auto;
`;

const ErrorImage500 = styled.div`
  width: 90px;
  height: 81px;
  background-image: url('/error/error500.png');
  background-size: cover;
  margin: 30px auto;
`;

const Error = ({ statusCode }: { statusCode: number }) => {
  return (
    <>
      {statusCode === 404 ? (
        <>
          <Error404>
            <p>4</p>
            <ErrorImage404 />
            <p>4</p>
          </Error404>
          <ErrorWrapper404>
            <Typography type="body2" grayColor="blueGray300">
              페이지를 찾을 수 없습니다.
            </Typography>
          </ErrorWrapper404>
        </>
      ) : (
        <>
          <ErrorWrapper500>
            <ErrorImage500 />
            <Typography type="body2" grayColor="blueGray300">
              알 수 없는 오류가 발생하였습니다.
            </Typography>
          </ErrorWrapper500>
        </>
      )}
    </>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
