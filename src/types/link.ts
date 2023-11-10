export type CardLink = {
  id?: number;
  linkType: LinkType;
  linkUrl: string;
  linkText: string;
};

export type LinkType =
  | 'custom'
  | 'github'
  | 'behance'
  | 'tistory'
  | 'linkedin'
  | 'naverblog'
  | 'instagram'
  | 'notion'
  | 'medium'
  | 'x'
  | 'thread'
  | 'youtube'
  | 'tiktok';
