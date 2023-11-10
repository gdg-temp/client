import { getNavLayout, getServerSideUserProps } from '@utils';

const CardEditPage = () => {
  return <div>수정페이지</div>;
};

export default CardEditPage;

CardEditPage.getLayout = getNavLayout;
export const getServerSideProps = getServerSideUserProps;
