import {
	BelongsTo,
	DataType,
	Column,
	//CreatedAt,
	Model,
	ForeignKey,
	Scopes,
	Table,
	//UpdatedAt,
	IsUUID,
	PrimaryKey,
	HasMany
} from 'sequelize-typescript';
//import { Optional } from 'sequelize';
import { v4 } from 'uuid';
import { Artist } from './Artist';
import { Studio } from './Studio';
import { PodcastEpisode } from './PodcastEpisode';
//import { MovieGenre } from './MovieGenre';

@Scopes(() => ({
	PodcastEpisode: {
		include: [
			{
				model: PodcastEpisode,
				through: { attributes: [] },
			},
		],
	}
}))
// 	genre: {
// 		include: [
// 			{
// 				model: Genre,
// 				through: { attributes: [] },
// 			},
// 		],
// 	},
// 	full: {
// 		include: [
// 			{
// 				model: Actor,
// 				through: { attributes: [] },
// 			},
// 			{
// 				model: Genre,
// 				through: { attributes: [] },
// 			},
// 		],
// 	},
// }))

// interface PodcastAttributes {
// 	id: string;
// 	name: string;
// 	episode : string;
// 	artistId: string;
// 	artist?: Artist;
// 	studioId : string;
// 	studio? : Studio;
// 	podcastEpisodes: PodcastEpisode[];
// 	//createdAt: Date;
// 	//updatedAt: Date;
// 	//deletedAt?: Date;
// }
// export type PodcastCreationAttributes = Optional<
// 	PodcastAttributes,
// 	'id'  | 'artist' | 'studio'
@Table
export class Podcast extends Model<Podcast> {

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

	@Column({
		type: DataType.STRING,
		allowNull : false
	})
	name!: string;

	
	@Column({
		type: DataType.STRING,
		allowNull : false
	})
	episode!: string;

	
	@ForeignKey(() => Artist)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	artistId!: string;

	@BelongsTo(() => Artist, {
		keyType: DataType.UUID,
		targetKey: 'id',
	})
	artist: Artist = new Artist();


	@ForeignKey(() => Studio)
	@Column
	studioId!: string;

	@BelongsTo(() => Studio)
	studio!: Studio;

	@HasMany(() => PodcastEpisode)
	podcastEpisodes!: PodcastEpisode[];



	
}
