import { Album } from '../../graphql';

export class ListAlbumResponse {
  items: Album[];
  limit: number;
  offset: number;
  total: number;
}
