import {
	Model,
	DataType,
	IsUUID,
	Column,
	Table,
	//BelongsTo,
	//Scopes,
	PrimaryKey,
	//CreatedAt,
	//UpdatedAt,
	//ForeignKey,
	HasMany,
} from 'sequelize-typescript';
// import { Podcast } from './Podcast';
import { v4 } from 'uuid';
//import { Artist } from './Artist';
//import{ Album } from './Album';
//import { Podcast } from './Podcast';
import { Audiobook } from './Audiobook';

@Table
export class Studio extends Model<Studio> {
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
	email! : string;

	@Column
	phone! : string;

	@HasMany(()=> Audiobook)
	audiobooks! : Audiobook;

}

