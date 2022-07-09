import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ArtistsModule } from './artists/artists.module';
import { BandsModule } from './bands/bands.module';
import { GenresModule } from './genres/genres.module';
import { AlbumsModule } from './albums/albums.module';
import { TracksModule } from './tracks/tracks.module';
import { FavoritesModule } from './favorites/favorites.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      debug: false,
      playground: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    ArtistsModule,
    BandsModule,
    GenresModule,
    AlbumsModule,
    TracksModule,
    FavoritesModule,
    UsersModule,
  ],
})
export class AppModule {}
