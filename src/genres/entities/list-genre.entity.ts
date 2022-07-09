import { Genre } from '../../graphql';

export class ListGenreResponse {
  items: Genre[];
  limit: number;
  offset: number;
  total: number;
}
