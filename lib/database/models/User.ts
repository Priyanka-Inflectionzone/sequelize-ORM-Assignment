import { Optional } from 'sequelize';
import {
	Column,
	CreatedAt,
	DataType,
	DeletedAt,
	HasMany,
	IsUUID,
	Model,
	PrimaryKey,
	Scopes,
	Table,
	UpdatedAt,
	//BelongsTo
} from 'sequelize-typescript';
import { v4 } from 'uuid';
//import { GenderEnum } from '../../common.ts';
import { USER_TABLE_NAME } from '../constants';
import { Account } from './Account';
import { Artist } from './Artist';
import { Playlist } from './Playlist';


interface UserAttributes {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	createdAt: Date;
	updatedAt: Date;
	deletedAt?: Date;
	account? : Account;
	artist? : Artist;
	playlistsCreated :  Playlist[];
	playlistsFollowed : Playlist[]
}

type UserCreationAttributes = Optional<
	UserAttributes,
	'id' | 'deletedAt'
>;

@Scopes(()=>({
	
}))


@Table({
	timestamps: true,
	modelName: 'User',
	tableName: USER_TABLE_NAME,
	paranoid: true,
	freezeTableName: true,
})
export class User extends Model<UserAttributes, UserCreationAttributes> {
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
		allowNull: false,
	})
	firstName!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	lastName!: string;

	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false,
		validate: {
			isEmail: { msg: 'Invalid Email Address Provided!' },
		},
	})
	email!: string;

	@Column({
		type: DataType.STRING,
		unique: true,
		allowNull: false,
		validate: {
			isNumeric: {
				msg: 'Phone number should not contain any special characters!',
			},
		},
	})
	phone!: string;

	@Column
	@CreatedAt
	createdAt!: Date;

	@Column
	@UpdatedAt
	updatedAt!: Date;

	@Column
	@DeletedAt
	deletedAt!: Date;
	
	@HasMany(() => Playlist)
	playlistsCreated!: Playlist[];

	@HasMany(() => Playlist)
	playlistsFollowed!: Playlist[];
}
