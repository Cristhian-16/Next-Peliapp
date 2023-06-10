import { Result } from './interface';

export interface MoviesSearch {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export enum OriginalLanguage {
  En = 'en',
  Ja = 'ja'
}
