/* Типы сущности BuyItem */

export type BuyItemProps = {
  title: string;
  longRead: string;
  price: string;
  imageUrl: string;
itemType: string;
backLink: string;
activeModal: boolean;
setActiveModal:  (v: boolean) => void;
}

export enum BuyItemType {
  program = 'Программа тренировок',
  product = 'Товар',
  machine = 'Тренажер',
}

export enum BuyItemLinks {
  programs = 'programs',
  products = 'products',
  machines = 'machines',
}
