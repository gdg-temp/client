import { ReasonType } from '@types';

export const REASON_TEXT: { [key in ReasonType]: string } = {
  share: '프로필 링크를 공유하고 싶어요',
  image: '예쁜 명함 이미지를 갖고 싶어요',
  contact: '고객에게 연락처를 보내고 싶어요',
  introduce: '그냥 나라는 사람을 자랑하고 싶어요',
  coworker: '마음이 맞는 동료를 찾고 싶어요',
  communication: '다양한 업계 사람들과 소통하고 싶어요',
  nothing: '딱히 용도는 없어요',
};
