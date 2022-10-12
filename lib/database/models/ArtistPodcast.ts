import { Model, Column, Table, ForeignKey } from 'sequelize-typescript';
import { Podcast } from './Podcast';
import { Artist } from './Artist';

@Table
export class ArtistPodcast extends Model<ArtistPodcast> {
	@ForeignKey(() => Artist)
	@Column
	ArtistId!: string;

	@ForeignKey(() => Podcast)
	@Column
	PodcastrId!: string;
}
