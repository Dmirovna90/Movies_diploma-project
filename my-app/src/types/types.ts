export interface ITitle {
  logo?: string;
  title?: string;
}
export interface IMovie {
  nameRu?: string;
  nameOriginal?: string | null;
  countries?: [];
  genres?: [];
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
  valueSelect?: string | number | undefined;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  key?: number | string;
  children?: any;
  disabled?: boolean;
}
export interface IPoint {
  topic: string | null;
  point?: string | number;
}
export interface IStore {
  currentPage: number;
  totalItems: number;
  setPage: (() => void) | any;
}
export interface IObjectFromFilter {
  genre: string;
  country: string;
  order: string;
  type: string;
  yearFrom: number;
  yearTo: number;
  page: number;
}
export interface IFilterSlice {
  results?: [];
  loading?: boolean;
  error?: string | null;
  type?: string;
  totalItems?: number;
  currentPage?: number;
  order?: string;
  countryId?: string | number;
  genreId?: string | number;
  yearTo?: number;
  yearFrom?: number;
  currentSlider?: number;
}
