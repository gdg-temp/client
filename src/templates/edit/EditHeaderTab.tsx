import S from './Edit.styled';

interface EditHeaderTabProps {
  currentTab: 'infoEdit' | 'showCard';
  onClickInfoTab: () => void;
  onClickStyleTab: () => void;
}

const EditHeaderTab = ({ currentTab, onClickInfoTab, onClickStyleTab }: EditHeaderTabProps) => {
  return (
    <S.EditHeaderWrapper>
      <S.EditTab isActive={currentTab === 'infoEdit'} onClick={onClickInfoTab}>
        정보 수정
      </S.EditTab>
      <S.EditTab isActive={currentTab === 'showCard'} onClick={onClickStyleTab}>
        명함 커스텀
      </S.EditTab>
    </S.EditHeaderWrapper>
  );
};

export default EditHeaderTab;
