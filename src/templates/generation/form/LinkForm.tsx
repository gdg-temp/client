import { Button, Input, Typography } from '@components';
import { useModal } from '@hooks';
import { SNS_TYPE } from '@static';
import { CardLink, LinkType } from '@types';
import { getNumberText } from '@utils';
import Image from 'next/image';
import S from './LinkForm.styled';

interface LinkFormProps {
  cardLink: CardLink;
  removeCardLinkByIndex: (index: number) => void;
  changeCardLink: (index: number, obj: Partial<CardLink>) => void;
  index: number;
}

const LinkForm = ({ changeCardLink, removeCardLinkByIndex, cardLink, index }: LinkFormProps) => {
  const { open, close } = useModal();
  const iconList = (Object.keys(SNS_TYPE) as LinkType[]).map((sns) => (
    <Button
      key={sns}
      size={'addLinkItem'}
      color={'addLinkItem'}
      onClick={() => handleChangeLinkType(sns)}
    >
      <Image width={32} height={32} src={`/icons/${sns}.svg`} alt={sns} />
      {SNS_TYPE[sns]}
    </Button>
  ));
  const handleLinkDropDown = () => {
    open({
      buttonType: 'noneButton',
      buttonTitle: 'Add Link',
      content: iconList,
      size: 'addLink',
      onClick: () => {},
      onClose: close,
    });
  };
  const handleChangeLinkType = (sns: LinkType) => {
    changeCardLink(index, { linkType: sns, linkText: '', linkUrl: '' });
  };

  return (
    <S.LinkFormWrapper>
      <Typography type="caption1">{getNumberText(index)} 링크</Typography>
      <S.LinkTopWrapper>
        <Input
          id={'linkText'}
          placeholder="링크 타이틀을 입력해주세요."
          type="text"
          value={cardLink.linkText}
          onChange={(e) => changeCardLink(index, { linkText: e.currentTarget.value })}
        />
        <Button size="addLink" color="addLink" onClick={handleLinkDropDown}>
          <Image alt="link-icon" width={32} height={32} src={`/icons/${cardLink.linkType}.svg`} />
          <Image alt="link-drop-down" width={16} height={16} src={'/icons/CaretDown_16px.svg'} />
        </Button>
        <Image
          alt="delete-link-button"
          width={24}
          height={24}
          src={'/icons/Delete_white.svg'}
          onClick={() => removeCardLinkByIndex(index)}
          style={{ cursor: 'pointer' }}
        />
      </S.LinkTopWrapper>
      <Input
        id={'link-url'}
        placeholder="링크를 입력해주세요."
        type="text"
        value={cardLink.linkUrl}
        onChange={(e) => changeCardLink(index, { linkUrl: e.currentTarget.value })}
      />
    </S.LinkFormWrapper>
  );
};

export default LinkForm;
