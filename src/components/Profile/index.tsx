import S from './Profile.styled';

import type { ProfileProps } from './types';

const Profile = ({ size = 'large', cameraBtn = false, src, onClick }: ProfileProps) => {
  return (
    <S.ProfileWrapper size={size}>
      {src ? (
        <S.Image src={src} />
      ) : (
        <S.DefaultImage size={size} src={'icons/default_profile.svg'} />
      )}
      {cameraBtn && (
        <S.Badge size={size} onClick={onClick}>
          <S.Image src={'icons/camera.svg'} />
        </S.Badge>
      )}
    </S.ProfileWrapper>
  );
};

export default Profile;
