import { postImage } from '@api';
import { Button, Input, Profile, Typography } from '@components';
import { CardLink, DefaultCardInfo } from '@types';
import { ChangeEvent, useRef, useState } from 'react';
import LinkForm from './form/LinkForm';

interface DefaultTemplateProps {
  cardInfo: DefaultCardInfo;
  cardLinks: CardLink[];
  changeCardInfo: (info: Partial<DefaultCardInfo>) => void;
  removeCardLinkByIndex: (index: number) => void;
  addCardLink: () => void;
  changeCardLink: (index: number, obj: Partial<CardLink>) => void;
}

const DefaultTemplate = ({
  addCardLink,
  cardInfo,
  cardLinks,
  changeCardInfo,
  changeCardLink,
  removeCardLinkByIndex,
}: DefaultTemplateProps) => {
  const [imageUrl, setImageUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await postImage({ file: formData });
      setImageUrl(response.imageUrl);
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      uploadImage(files[0]);
    }
  };

  return (
    <>
      <Typography type="caption1">프로필 사진</Typography>
      <Typography type="caption1" systemColor="main">
        *최근 6개월 이내 찍은 사진을 업로드해주세요.
      </Typography>
      <div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <Profile src={imageUrl} cameraBtn onClick={() => fileInputRef.current?.click()} />
      </div>
      <Input
        id="name"
        type="text"
        placeholder="이름을 입력해주세요"
        label="이름"
        value={cardInfo.name}
        onChange={(e) => changeCardInfo({ name: e.target.value })}
      />
      <Input
        id="email"
        type="text"
        placeholder="이메일을 입력해주세요"
        label="이메일"
        value={cardInfo.email}
        onChange={(e) => changeCardInfo({ email: e.target.value })}
      />
      <Input
        id="introduction"
        type="text"
        placeholder="한 줄 소개를 입력해주세요"
        label="한 줄 소개"
        value={cardInfo.introduction}
        onChange={(e) => changeCardInfo({ introduction: e.target.value })}
      />
      <Typography type="body2">링크</Typography>
      <Typography type="caption1" systemColor="main">
        *최대 5개 까지 생성할 수 있어요.
      </Typography>
      {cardLinks.map((cardLink, i) => (
        <LinkForm
          key={i}
          cardLink={cardLink}
          index={i}
          changeCardLink={changeCardLink}
          removeCardLinkByIndex={removeCardLinkByIndex}
        />
      ))}
      <Button color="primary" size="small" disabled={cardLinks.length >= 5} onClick={addCardLink}>
        링크추가
      </Button>
    </>
  );
};

export default DefaultTemplate;
