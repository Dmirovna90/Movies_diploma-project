export interface IActiveContext {
    isActive: boolean;
    SetIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ITitle {
    logo?: string;
    title?: string;
}
export interface IMovie {
    nameRu: string,
    nameOriginal?:string | null,
    countries?: [],
    genres?: [],
    year?: number,
    type?: string,
    kinopoiskId: number,
    posterUrl?: string,
}