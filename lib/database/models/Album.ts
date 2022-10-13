//import {  DataTypes } from 'sequelize';
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
	numberOfSingles!: string;

	@Column
	releaseDate! : Date;

	@ForeignKey(()=> Artist)
	artistId! : string;

	@BelongsTo(() => Artist)
	artistInfo?: Artist;

	@ForeignKey(()=> Studio)
	studioId! : string;

	@BelongsTo(() => Studio)
	studioInfo?: Studio;

	@HasMany(()=> Single)
	singles! : Single[];

	@CreatedAt
	@Column
	createdAt!: Date;

	@UpdatedAt
	@Column
	updatedAt!: Date;
}
