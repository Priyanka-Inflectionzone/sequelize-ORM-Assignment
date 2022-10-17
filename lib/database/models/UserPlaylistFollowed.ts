import { Model, Column, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './User';
import { Playlist } from './Playlist';

@Table
export class UserPlaylistFollowed extends Model<UserPlaylistFollowed> {
	@ForeignKey(() => User)
	@Column
	UserId!: string;
	@BelongsTo(()=> User, 'UserId')
	users! : User;

	@ForeignKey(() => Playlist)
	@Column
	PlaylistId!: string;
	@BelongsTo(()=> Playlist, 'PlaylistId')
	playlists! : Playlist;
}
