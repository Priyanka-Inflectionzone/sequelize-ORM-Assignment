import {
	Model,
	DataType,
	IsUUID,
	Column,
	Table,
	BelongsTo,
	//Scopes,
	PrimaryKey,
	CreatedAt,
	UpdatedAt,
	ForeignKey,
	HasMany,
} from 'sequelize-typescript';
// import { Podcast } from './Podcast';
import { v4 } from 'uuid';
import { Artist } from './Artist';
import{ Album } from './Album';
import { Playlist } from './Playlist';

@Table
export class Single extends Model<Single> {
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

	@Column
	singlename!: string;

	@Column
	releaseDate! : Date;

	@ForeignKey(()=> Artist)
	artistId! : string;

	@BelongsTo(() => Artist, {
		keyType: DataType.UUID,
		targetKey: 'id',
	})
	user!: Artist

	@ForeignKey(()=> Album)
	@Column ({
		allowNull: true
	})
	albumId? : string;

	@BelongsTo(() => Album, {
		keyType: DataType.UUID,
		targetKey: 'id',
	})
	album?: Album;

	@HasMany(()=> Playlist)
	playlists! : Playlist[];

	@CreatedAt
	@Column
	createdAt!: Date;

	@UpdatedAt
	@Column
	updatedAt!: Date;
}
