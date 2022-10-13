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
import { IntegerDataType } from 'sequelize';
import {Single} from './Single'
import {Studio} from './Studio'


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
	numberOfSingles!:IntegerDataType;

	@BelongsTo(() => Single)
	songs! : Single;

	@ForeignKey(() => Studio)
	@Column
	studioId!: string;
}