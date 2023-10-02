export type Card = {
  id: number;
  name: string;
  email: string;
  workType: string;
  job: string;
  position: string;
  companyName: string;
  companyAddress: string;
  birth: string;
  templateURL: string;
  links: [
    {
      id: number;
      linkType: string;
      linkUrl: string;
      linkText: string;
    },
  ];
};
