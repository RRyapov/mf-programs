export type ProgramType = {
  id: number;
  imageUrl: string;
  name: string;
  shortText: string;
  longText: string;
  price: number;
  gender: number;
  age: string;
  level: string;
  result: number;
  onLearnMore: () => void
};

export type ProgramTypes = ProgramType[];

export enum filtersEnum {
  GENDER = "gender",
}