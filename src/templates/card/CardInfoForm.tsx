import { CardLink, DefaultCardInfo } from '@types';

interface CardInfoFormProps {
  onClickSubmit: () => void;
  btnText: string;
  cardLinks: CardLink[];
  cardInfo: DefaultCardInfo;
  changeCardInfo: (info: Partial<DefaultCardInfo>) => void;
  removeCardLinkByIndex: (index: number) => void;
  addCardLink: () => void;
  changeCardLink: (index: number, obj: Partial<CardLink>) => void;
}

const CardInfoForm = () => {
  return <div>Enter</div>;
};

export default CardInfoForm;
