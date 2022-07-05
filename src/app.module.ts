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
import { ArtistsAPI } from './datasources/artists.api';
import { BandsAPI } from './datasources/bands.api';
import { GenresAPI } from './datasources/genres.api';
import { AlbumsAPI } from './datasources/albums.api';
import { TracksAPI } from './datasources/tracks.api';

class FavoritesAPI {}

class UsersAPI {}

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
      dataSources: () => ({
        ArtistsAPI: new ArtistsAPI(),
        BandsAPI: new BandsAPI(),
        GenresAPI: new GenresAPI(),
        AlbumsAPI: new AlbumsAPI(),
        TracksAPI: new TracksAPI(),
        FavoritesAPI: new FavoritesAPI(),
        UsersAPI: new UsersAPI(),
      }),
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
