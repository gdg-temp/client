import styled from 'styled-components';
import { Typography } from '@components';

const EmptyWrapper = styled.div`
  text-align: center;
  margin: 90% auto;
`;

interface EmptyTemplateProps {
  pageName: string;
}

const EmptyTemplate: React.FC<EmptyTemplateProps> = ({ pageName }) => {
  return (
    <EmptyWrapper>
      {pageName === 'cards' ? (
        <Typography type="title2" grayColor="blueGray400">
          플러스 아이콘을 눌러
          <br />
          명함을 만들어보세요!
        </Typography>
      ) : (
        <Typography type="title2" grayColor="blueGray400">
          첫 번째 명함 공유를
          <br />
          시작해보세요!
        </Typography>
      )}
    </EmptyWrapper>
  );
};

export default EmptyTemplate;
