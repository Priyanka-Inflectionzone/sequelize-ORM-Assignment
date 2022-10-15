import {
	BelongsTo,
	DataType,
	Column,
	//CreatedAt,
	Model,
	ForeignKey,
	//Scopes,
	Table,
	//UpdatedAt,
	IsUUID,
	PrimaryKey,
	//HasMany
} from 'sequelize-typescript';
//import { Optional } from 'sequelize';
import { v4 } from 'uuid';
//import { User } from './User';
//import { Artist } from './Artist';
import {Single} from './Single'
import { User } from './User';
import { UserPlaylistFollowed } from './UserPlaylistFollowed';

@Table
export class Playlist extends Model<Playlist> {
	
	@IsUUID(4)
	@PrimaryKey
	@Column({
		type: DataType.UUID,
		defaultValue: () => {
			return v4();
		},
		allowNull: false,
		primaryKey: true,
	})
	id!: string;

	@ForeignKey(() => Single)
	@Column
	songsNumber!: string;

	@BelongsTo(() => Single)
	songs! : Single[];

	@ForeignKey(() => User)
	@Column
	createdBy!: string;

	@BelongsTo(() => User)
	userInfo! : User;

	@ForeignKey(() => UserPlaylistFollowed)
	@Column
	followers!: string;

	@BelongsTo(() => UserPlaylistFollowed)
	userIdInfo! : UserPlaylistFollowed;

}
