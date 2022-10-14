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
import { Artist } from './Artist';
import { Studio } from './Studio';

@Table
export class Audiobook extends Model<Audiobook> {
	
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
		type : DataType.STRING,
		allowNull : false,
	})
	name! : string;

	@Column
	releaseDate! : Date;

	@ForeignKey(() => Artist)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	artistId!: string;

	@BelongsTo(() => Artist)
	artistInfo! : Artist;

    @ForeignKey(() => Studio)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	studioId!: string;

	@BelongsTo(() => Studio)
	studioInfo! : Studio;


}
