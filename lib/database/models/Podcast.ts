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
	HasMany
} from 'sequelize-typescript';
//import { Optional } from 'sequelize';
import { v4 } from 'uuid';
import { Artist } from './Artist';
import { PodcastEpisode } from './PodcastEpisode';

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

	@BelongsTo(() => Artist)
	artist!: Artist

	@HasMany(() => PodcastEpisode)
	podcastEpisodes!: PodcastEpisode[];

}
