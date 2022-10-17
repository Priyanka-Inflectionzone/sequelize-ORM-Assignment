//import { Optional } from 'sequelize';
import {
	Column,
	CreatedAt,
	DataType,
	DeletedAt,
	//HasMany,
    // BelongsTo,
    // ForeignKey,
	IsUUID,
	Model,
	PrimaryKey,
	Scopes,
	Table,
	UpdatedAt,
	BelongsToMany,
    HasMany
} from 'sequelize-typescript';
import { v4 } from 'uuid';
import { UserPlaylistFollowed } from './UserPlaylistFollowed';
import { Playlist} from './Playlist';


// interface UserAttributes {
// 	id: string;
// 	firstName: string;
// 	lastName: string;
// 	email: string;
// 	phone: string;
// 	createdAt: Date;
// 	updatedAt: Date;
// 	deletedAt?: Date;
	// account? : Account;
	// artist? : Artist;
	// playlistsCreated :  Playlist[];
	// playlistsFollowed : Playlist[];
// }

// type UserCreationAttributes = Optional<
// 	UserAttributes,
// 	'id' | 'createdAt' | 'updatedAt' | 'deletedAt' >

    @Scopes(() => ({
        playlists: {
            include: [
                {
                    model: Playlist,
                    through: { attributes: [] },
                },
            ],
        },
    }))
    

    @Table({
        timestamps: true,
        modelName: 'User',
        tableName: 'User',
        paranoid: true,
        freezeTableName: true,
    })
    export class User extends Model<User> {
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

        
        @BelongsToMany(()=> Playlist, ()=> UserPlaylistFollowed,) 
        playlistsFollowed? : Playlist[];
    
        @HasMany(()=> Playlist, 'createdBy')
        playlists? : Playlist[];


        @Column
        @CreatedAt
        createdAt!: Date;
    
        @Column
        @UpdatedAt
        updatedAt!: Date;
    
        @Column
        @DeletedAt
        deletedAt!: Date;

    }