// @flow
export type Id = number;
export type Name = string;
export type Race = string;
export type Age = number;
export type Sex = string;
export type Image = string;
export type Status = number;

export type Dog = {
  id: Id,
  name: Name,
  race: Race,
  age: Age,
  sex: Sex,
  image: Image,
  status: Status,
};

export type Dogs = Array<Dog>;

export type IsFetchingDogs = boolean;

export type DogsState = {
  dogs: Dogs,
  isFetchingDogs: IsFetchingDogs,
};

export type DogsAction =
  | { type: 'FETCH_DOGS' }
  | { type: 'REQUEST_DOGS' }
  | { type: 'RECEIVED_DOGS', payload: Dogs };
