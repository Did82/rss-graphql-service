import { CreateFavoriteInput } from './create-favorite.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateFavoriteInput extends PartialType(CreateFavoriteInput) {
  id: number;
}
