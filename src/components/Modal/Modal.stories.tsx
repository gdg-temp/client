import Modal from './index';
import { action } from '@storybook/addon-actions';

import type { StoryObj, Meta } from '@storybook/react';

import Button from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'components/Modal',
  component: Modal,
  argTypes: {
    buttonType: {
      description: '버튼의 갯수를 조절합니다.',
    },
    buttonTitle: {
      description: '메인 버튼에 들어갈 텍스트입니다.',
    },
    content: {
      description: '모달에 들어가는 컨텐츠이며 React Node입니다.',
    },
    isLoading: {
      description: '로딩을 보여줄지 여부를 선택합니다.',
    },
    isOpened: {
      description: '모달이 열려있는지 여부를 선택합니다.',
    },
    size: {
      description: '모달의 사이즈를 나타냅니다.',
    },
    onClick: {
      description: '클릭시 실행될 함수입니다.',
    },
    onClose: {
      description: '모달을 닫을 수 있는 함수를 넣습니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    buttonType: 'oneButton',
    buttonTitle: 'CONFIRM',
    content: 'TEST MODAL',
    isLoading: false,
    isOpened: true,
    size: 'small',
    onClick: () => action('onClick Triggered')('test'),
    onClose: () => action('onClose Triggered')('test'),
  },
};

const iconList = [
  ['custom.svg', '직접입력'],
  ['github.svg', 'GitHub'],
  ['behance.svg', 'Behance'],
  ['tistory.svg', 'Tistory'],
  ['linkedin.svg', 'LinkedIn'],
  ['naverblog.svg', 'Naver Blog'],
  ['instagram.svg', 'Instagram'],
  ['notion.svg', 'Notion'],
  ['medium.svg', 'Medium'],
  ['x.svg', 'X'],
  ['threads.svg', 'Thread'],
  ['youtube.svg', 'Youtube'],
  ['tiktok.svg', 'Tiktok'],
].map((ele, index) => (
  <Button key={index} size={'addLinkItem'} color={'addLinkItem'}>
    <img src={`/icons/${ele[0]}`} alt="" />
    {ele[1]}
  </Button>
));

export const AddLink: Story = {
  args: {
    buttonType: 'noneButton',
    buttonTitle: 'Add Link',
    content: iconList,
    isLoading: false,
    isOpened: true,
    size: 'addLink',
    onClick: () => action('onClick Triggered')('test'),
    onClose: () => action('onClose Triggered')('test'),
  },
};
