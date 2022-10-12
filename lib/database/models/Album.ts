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
import { studio } from './studio';

// @Scopes(() => ({
// 	movies: {
// 		include: [
// 			{
// 				model: Movie,
// 				through: { attributes: [] },
// 			},
// 		],
// 	},
// }))
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
	numberOfSingles!: number;

	@Column
	releaseDate! : Date;

	@ForeignKey(()=> Artist)
	artistId! : string;

	@BelongsTo(() => Artist)
	artistInfo?: Artist;

	@ForeignKey(()=> studio)
	studioId! : string;

	@BelongsTo(() => studio)
	studioInfo?: studio;

	@HasMany(()=> Single)
	singles! : Single[];

	@CreatedAt
	@Column
	createdAt!: Date;

	@UpdatedAt
	@Column
	updatedAt!: Date;
}