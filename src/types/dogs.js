// @flow
export type Id = number;
export type Name = string;
export type Race = string;
export type Age = number;
export type Sex = string;
export type Image = string;
export type Status = number;
export type Description = string;
export type Color = string;
export type NeuteredSterilized = boolean;
export type Arrived = string;
export type DateOfBirth = string;
export type Images = Array;

export type Dog = {
  id: Id,
  name: Name,
  race: Race,
  age: Age,
  sex: Sex,
  image: Image,
  status: Status,
  description: Description,
  color: Color,
  neutered_sterilized: NeuteredSterilized,
  arrived: Arrived,
  dateOfBirth: DateOfBirth,
  images: Images,
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
