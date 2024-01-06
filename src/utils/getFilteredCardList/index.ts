import { Collection } from '@types';

const getFilteredCardList = (searchText: string, cardList: Collection[]): Collection[] => {
  if (!searchText.trim()) {
    return cardList;
  }

  const filteredList = cardList.filter((card) =>
    card.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return filteredList;
};

export default getFilteredCardList;
