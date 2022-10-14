import {
	Model,
	Column,
	Table,
	BelongsTo,
	ForeignKey,
	//HasMany,
	//Scopes,
	// CreatedAt,
	// UpdatedAt,
	IsUUID,
	PrimaryKey,
	DataType,
	//BelongsToMany
} from 'sequelize-typescript';
import { Optional } from 'sequelize';
import { v4 } from 'uuid';
import { User } from './User';

interface ArtistAttributes {
	id: string;
	monthlyListeners: string
	userId: string;
	user?: User;
	// podcasts  :  Podcast[]
	// audiobooks : Audiobook[]
	// Single   :   Single[]
	// Album    :   Album[]

	//createdAt: Date;
	//updatedAt: Date;
	//deletedAt?: Date;
}

export type ArtistCreationAttributes = Optional<
	ArtistAttributes,
	'id'  | 'user'>
	
@Table({
	timestamps: true,
	modelName: 'Artist',
	tableName: 'Artist',
	paranoid: true,
	freezeTableName: true,
})
export class Artist extends Model<Artist> {
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
	monthlyListeners!: string;

	@ForeignKey(() => User)
	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	userId!: string;

	@BelongsTo(() => User, {
		keyType: DataType.UUID,
		targetKey: 'id',
	})
	user!: User 
}
