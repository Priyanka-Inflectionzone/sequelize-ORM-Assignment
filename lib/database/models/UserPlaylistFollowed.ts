import { Model, Column, Table, ForeignKey } from 'sequelize-typescript';
import { User } from './User';
import { Playlist } from './Playlist';

@Table
export class UserPlaylistFollowed extends Model<UserPlaylistFollowed> {
	@ForeignKey(() => User)
	@Column
	UserId!: string;

	@ForeignKey(() => Playlist)
	@Column
	PlaylistId!: string;
}
