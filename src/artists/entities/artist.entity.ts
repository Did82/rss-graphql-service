import { Artist } from '../../graphql';

export interface ListArtistsResponse {
  items: Artist[];
  offset: number;
  limit: number;
  total: number;
}
