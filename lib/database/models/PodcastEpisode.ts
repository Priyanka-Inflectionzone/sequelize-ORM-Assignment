import {
	BelongsTo,
	DataType,
	Column,
	CreatedAt,
	Model,
	ForeignKey,
	Table,
	UpdatedAt,
	IsUUID,
	PrimaryKey
} from 'sequelize-typescript';
//import { Optional } from 'sequelize';
import { v4 } from 'uuid';
import {Podcast} from './Podcast'

@Table
export class PodcastEpisode extends Model<PodcastEpisode> {
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
	episodename!: string;

	@ForeignKey(() => Podcast)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	podcastId!: string;


	@BelongsTo(() => Podcast)
	podcastInfo?: Podcast;

	@Column
	releaseDate! : Date;

	@CreatedAt
	@Column
	createdAt!: Date;

	@UpdatedAt
	@Column
	updatedAt!: Date;
}