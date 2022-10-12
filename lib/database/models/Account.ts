import { Optional } from 'sequelize';
import {
	BelongsTo,
	Column,
	//CreatedAt,
	DataType,
	//DeletedAt,
	ForeignKey,
	IsUUID,
	Model,
	PrimaryKey,
	Table,
	//UpdatedAt,
} from 'sequelize-typescript';
import { v4 } from 'uuid';
//import { UserRoleEnum } from '../../common.ts';
//import { USER_ROLE_TABLE_NAME } from '../constants';
import { User } from './User';

interface AccountAttributes {
	id: string;
	password: string;
	gmailAuth: string
	userId: string;
	user?: User;
	//createdAt: Date;
	//updatedAt: Date;
	//deletedAt?: Date;
}

export type AccountCreationAttributes = Optional<
	AccountAttributes,
	'id'  | 'user'
>;

@Table({
	timestamps: true,
	modelName: 'Account',
	tableName: 'accounts',
	paranoid: true,
	freezeTableName: true,
})
export class Account extends Model<
	AccountAttributes,
	AccountCreationAttributes
> {
	@IsUUID(4)
	@PrimaryKey
	@Column({
		type: DataType.UUID,
		defaultValue: () => {
			return v4();
		},
		allowNull: false,
	})
	id!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	password!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	gmailAuth!: string;

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
	user: User = new User();

	// @Column
	// @CreatedAt
	// createdAt!: Date;

	// @UpdatedAt
	// updatedAt!: Date;

	// @DeletedAt
	// deletedAt!: Date;
}
