declare global {
  namespace NodeJS {
    interface ProcessEnv {
      RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: 'true' | 'false';
      NEXT_PUBLIC_API_URL: string;
      NEXT_PUBLIC_REDIRECT_URI: string;
      NEXT_PUBLIC_CLIENT_ID_KAKAO: string;
      NEXT_PUBLIC_CLIENT_ID_NAVER: string;
      NEXT_PUBLIC_CLIENT_ID_GOOGLE: string;
      NEXT_PUBLIC_ENV: string;
    }
  }
}

export {};
