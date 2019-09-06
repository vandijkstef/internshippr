import * as graphql from 'graphql';
import { Sequelize, Model, DataTypes } from 'sequelize';

// Base types
const {
	GraphQLObjectType,
	GraphQLSchema,
} = graphql;

// Data types
const {
	GraphQLString,
	GraphQLID,
} = graphql;

// Base
interface BaseData {
	id: number | object;
}
const BaseFields = {
	id: {
		type: GraphQLID
	}
}

// User
interface UserData extends BaseData {
	name: string | object;
	email: string | object;
	password: string | object;
}
const UserFields: UserData = Object.assign({}, BaseFields, {
	name: {
		type: GraphQLString
	},
	email: {
		type: GraphQLString,
	},
	password: {
		type: GraphQLString,
		resolve: (user) => null,
	}
});
const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => (UserFields as any)
});

// Log
interface LogData {
	message: object;
}
const LogFields = Object.assign({}, BaseFields, {
	message: {
		type: GraphQLString
	}
});
const LogType = new GraphQLObjectType({
	name: 'Log',
	fields: () => (LogFields)
});

// DB Setup
const sequelize = new Sequelize('postgres', 'postgres', 'docker', {
	dialect: 'postgres',
	define: {
		timestamps: true
	}
});

sequelize.authenticate()
	.then(() => {
		console.log('DB Connection: OK');
	})
	.catch((err: Error) => {
		console.error(err);
		console.log('DB Connection: Failed');
		process.exit(1);
	});

// Setup DB Tables
class User extends Model {};
const UserModel = {
	fields: {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	settings: {
		sequelize,
		modelName: 'user'
	},
}
User.init(UserModel.fields, UserModel.settings);

// Mutations
const Mutation = new GraphQLObjectType<undefined, undefined, any>({
	name: 'Mutation',
	fields: {
		addUser: {
			type: UserType,
			args: UserFields as any,
			resolve(parent: any, args: UserData) {
				// TODO: Save to DB
			}
		},
		addLog: {
			type: LogType,
			args: LogFields as any,
			resolve(parent: any, args: LogData) {
				// TODO: Save to db
				console.log(args.message);
			}
		}
	}
});

// Root
const RootQuery = new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		user: {
			type: UserType,
			args: {
				id: {
					type: GraphQLID
				}
			},
			resolve(parent, args) {
				// TODO: Hook up to DB
				return [];
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});
