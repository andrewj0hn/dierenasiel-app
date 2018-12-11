// @flow
export type Id = number;
export type Name = string;
export type Race = string;
export type Age = number;
export type Sex = string;
export type Image = string;
export type Status = number;

export type Cat = {
  id: Id,
  name: Name,
  race: Race,
  age: Age,
  sex: Sex,
  image: Image,
  status: Status,
};

export type Cats = Array<Cat>;

export type IsFetchingCats = boolean;

export type CatsState = {
  cats: Cats,
  isFetchingCats: IsFetchingCats,
};

export type CatsAction =
  | { type: 'FETCH_CATS' }
  | { type: 'REQUEST_CATS' }
  | { type: 'RECEIVED_CATS', payload: Cats };
