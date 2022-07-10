import { Track } from '../../graphql';

export class ListTracksResponse {
  items: Track[];
  limit: number;
  offset: number;
  total: number;
}
