import { StyleType } from '@types';

type StyleObject = {
  designTemplate: number;
  title: string;
};

export const CARD_DESIGN_STYLE_MAPPER: { [key in StyleType]: StyleObject[] } = {
  default: [
    { designTemplate: 1, title: '화이트' },
    { designTemplate: 2, title: '그레이' },
    { designTemplate: 3, title: '시그니쳐' },
  ],
  character: [
    { designTemplate: 1, title: '멍멍이와 사람' },
    { designTemplate: 2, title: '공중부양' },
    { designTemplate: 3, title: '명상' },
    { designTemplate: 4, title: '리듬 속으로' },
  ],
  city: [
    { designTemplate: 1, title: '???' }, // TODO: 작명 필요
    { designTemplate: 2, title: '강인한' },
    { designTemplate: 3, title: '신뢰감있는' },
    { designTemplate: 4, title: '열정적인' },
    { designTemplate: 5, title: '글로벌한' },
    { designTemplate: 6, title: '다채로운' },
  ],
  soft: [
    { designTemplate: 1, title: '핑크' },
    { designTemplate: 2, title: '퍼플' },
    { designTemplate: 3, title: '하트' },
    { designTemplate: 4, title: '더블 하트' },
  ],
  line: [
    { designTemplate: 1, title: '점진적인' },
    { designTemplate: 2, title: '활발한' },
    { designTemplate: 3, title: '???' }, // TODO: 작명 필요
    { designTemplate: 4, title: '귀여운' },
  ],
  future: [
    { designTemplate: 1, title: '시원한' },
    { designTemplate: 2, title: '홀로그램' },
    { designTemplate: 3, title: '노이즈 핑크' },
    { designTemplate: 4, title: '노이즈 레드' },
    { designTemplate: 5, title: '노이즈 오렌지' },
    { designTemplate: 6, title: '???' }, // TODO: 작명 필요
  ],
};

export const CARD_STYLE_MAPPER: { [key in StyleType]: string } = {
  default: '기본',
  character: '힙한 캐릭터',
  city: '도시적인',
  soft: '몽글몽글',
  line: '도형 그래픽',
  future: '미래지향적인',
};
