import styled from 'styled-components';
import { Typography } from '@components';

const EmptyWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 70% auto;
  gap: 12px;
`;

interface EmptyTemplateProps {
  pageName: string;
}

const EmptyTemplate: React.FC<EmptyTemplateProps> = ({ pageName }) => {
  return (
    <EmptyWrapper>
      <Typography type="title2" grayColor="white">
        명함이 텅 비어있네요!
      </Typography>
      {pageName === 'cards' ? (
        <Typography type="body2" grayColor="blueGray400">
          플러스 아이콘을 눌러 명함을 만들어보세요!
        </Typography>
      ) : (
        <Typography type="body2" grayColor="blueGray400">
          다른 사람들과 명함을 공유해보세요!
        </Typography>
      )}
    </EmptyWrapper>
  );
};

export default EmptyTemplate;
