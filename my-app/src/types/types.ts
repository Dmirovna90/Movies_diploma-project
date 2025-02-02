import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

export interface ITitle {
  logo?: string;
  title?: string;
}
export interface IMovie {
  nameRu?: string;
  nameOriginal?: string | null;
  countries?: { country: string }[];
  genres?: { genre: string }[];
  year?: number;
  type?: string;
  kinopoiskId?: number;
  posterUrl?: string;
  coverURL?: string;
  filmLength?: number;
  ratingKinopoisk?: number;
  ratingKinopoiskVoteCount?: number;
  reviewsCount?: number;
  country?: string;
  genre?: string;
  description?: string;
  slogan?: string;
  serial?: boolean;
}
export interface ISearch {
  results: IMovie[];
  loading: boolean;
  error: null | string;
  type: string;
  total: number;
  searchQuery: string;
}
export interface IObjectFromSearch {
  keyword: string;
}
export interface IObjectFromFilter {
  genre: number | string;
  country: number | string;
  order: string;
  type: string;
  yearFrom: number;
  yearTo: number;
  page: number;
}
export interface IFilterSlice {
  results: IMovie[];
  loading: boolean;
  error: null | string;
  type: string;
  totalItems: number;
  currentPage: number;
  order: string;
  countryId: string;
  genreId: string;
  yearTo: number;
  yearFrom: number;
  currentSlider: number;
}
export interface IMovieSlice {
  movieInfo: IMovie;
  loading: boolean;
  error: string | null;
}
export interface IInput {
  placeholder?: string;
  type: string;
  name?: string;
  value?: string;
  onChange?: any;
}
export interface IButton {
  children: React.ReactNode;
  isDisabled?: boolean;
  click?: (() => void) | undefined;
  type?: "submit" | "reset" | "button" | undefined;
}
export interface IOrdering {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  key?: number | string;
  children?: any;
  disabled?: boolean;
}
export interface IPoint {
  topic: string | null;
  point: string | number | any[];
}
export interface IStore {
  currentPage: number;
  totalItems: number;
  setPage: (() => void) | any;
}
export interface IFilter {
  loading: boolean;
  error: string | null;
  countries?: { country: string }[];
  genres?: { genre: string }[];
}
export interface IChildren {
  children?:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | null
    | undefined;
}
