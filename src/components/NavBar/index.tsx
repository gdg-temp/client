import Link from 'next/link';

const NavBar = () => {
  return (
    <div>
      <Link href={'/cards'}>내 명함</Link>
      <Link href={'/collections'}>명함 수집</Link>
      <Link href={'/settings'}>환경 설정</Link>
    </div>
  );
};

export default NavBar;
