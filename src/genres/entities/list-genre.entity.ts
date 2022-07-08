import { Genre } from '../../graphql';

export class ListGenreEntity {
  items: Genre[];
  limit: number;
  offset: number;
  total: number;
}
