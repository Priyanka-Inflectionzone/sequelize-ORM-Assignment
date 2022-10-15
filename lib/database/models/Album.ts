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
import{ Single } from './Single';
import { Studio } from './Studio';

@Table
export class Album extends Model<Album> {
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
	name!: string;

    @Column
	releaseDate! : Date;

	@ForeignKey(()=> Artist)
	artistId! : string;

	@BelongsTo(() => Artist, {
		keyType: DataType.UUID,
		targetKey: 'id',
	})
	artistInfo!: Artist

	@ForeignKey(()=> Studio)
	studioId! : string;

	@BelongsTo(() => Studio, {
		keyType: DataType.UUID,
		targetKey: 'id',
	})
	studioInfo!: Studio

    @Column
    singlesNumber!: string;

	@HasMany(()=> Single)
	singles? : Single[];

	@CreatedAt
	@Column
	createdAt!: Date;

	@UpdatedAt
	@Column
	updatedAt!: Date;

}