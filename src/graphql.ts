
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateAlbumInput {
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<string[]>;
    bands?: Nullable<string[]>;
    tracks?: Nullable<string[]>;
    genres?: Nullable<string[]>;
    image?: Nullable<string>;
}

export class UpdateAlbumInput {
    id: number;
}

export class CreateArtistInput {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class UpdateArtistInput {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class CreateBandInput {
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<string>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<string>[]>;
}

export class UpdateBandInput {
    id: number;
}

export class CreateFavoriteInput {
    userId?: Nullable<string>;
    bands?: Nullable<Nullable<string>[]>;
    genres?: Nullable<Nullable<string>[]>;
    artists?: Nullable<Nullable<string>[]>;
    tracks?: Nullable<Nullable<string>[]>;
}

export class UpdateFavoriteInput {
    id: number;
}

export class CreateGenreInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export class UpdateGenreInput {
    id: number;
}

export class CreateTrackInput {
    title: string;
    album?: Nullable<string>;
    artists?: Nullable<Nullable<string>[]>;
    bands?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<string>[]>;
}

export class UpdateTrackInput {
    id: number;
}

export class CreateUserInput {
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

export class UpdateUserInput {
    id: number;
}

export class Album {
    id: string;
    name?: Nullable<string>;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export abstract class IQuery {
    abstract albums(): Nullable<Album>[] | Promise<Nullable<Album>[]>;

    abstract album(id: number): Nullable<Album> | Promise<Nullable<Album>>;

    abstract artists(): Nullable<Artist>[] | Promise<Nullable<Artist>[]>;

    abstract artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract bands(): Nullable<Band>[] | Promise<Nullable<Band>[]>;

    abstract band(id: number): Nullable<Band> | Promise<Nullable<Band>>;

    abstract favorites(): Nullable<Favorite>[] | Promise<Nullable<Favorite>[]>;

    abstract favorite(id: number): Nullable<Favorite> | Promise<Nullable<Favorite>>;

    abstract genres(): Nullable<Genre>[] | Promise<Nullable<Genre>[]>;

    abstract genre(id: number): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract tracks(): Nullable<Track>[] | Promise<Nullable<Track>[]>;

    abstract track(id: number): Nullable<Track> | Promise<Nullable<Track>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createAlbum(createAlbumInput: CreateAlbumInput): Album | Promise<Album>;

    abstract updateAlbum(updateAlbumInput: UpdateAlbumInput): Album | Promise<Album>;

    abstract removeAlbum(id: number): Nullable<Album> | Promise<Nullable<Album>>;

    abstract createArtist(createArtistInput: CreateArtistInput): Artist | Promise<Artist>;

    abstract updateArtist(updateArtistInput: UpdateArtistInput): Artist | Promise<Artist>;

    abstract removeArtist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;

    abstract createBand(createBandInput: CreateBandInput): Band | Promise<Band>;

    abstract updateBand(updateBandInput: UpdateBandInput): Band | Promise<Band>;

    abstract removeBand(id: number): Nullable<Band> | Promise<Nullable<Band>>;

    abstract createFavorite(createFavoriteInput: CreateFavoriteInput): Favorite | Promise<Favorite>;

    abstract updateFavorite(updateFavoriteInput: UpdateFavoriteInput): Favorite | Promise<Favorite>;

    abstract removeFavorite(id: number): Nullable<Favorite> | Promise<Nullable<Favorite>>;

    abstract createGenre(createGenreInput: CreateGenreInput): Genre | Promise<Genre>;

    abstract updateGenre(updateGenreInput: UpdateGenreInput): Genre | Promise<Genre>;

    abstract removeGenre(id: number): Nullable<Genre> | Promise<Nullable<Genre>>;

    abstract createTrack(createTrackInput: CreateTrackInput): Track | Promise<Track>;

    abstract updateTrack(updateTrackInput: UpdateTrackInput): Track | Promise<Track>;

    abstract removeTrack(id: number): Nullable<Track> | Promise<Nullable<Track>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class Artist {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export class Band {
    id: string;
    name?: Nullable<string>;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Artist>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export class Favorite {
    id: string;
    userId?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
}

export class Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export class Track {
    id: string;
    title: string;
    album?: Nullable<Album>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export class User {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    password?: Nullable<string>;
    email: string;
}

type Nullable<T> = T | null;
