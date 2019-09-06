import * as graphql from 'graphql';

// Base types
const {
	GraphQLObjectType,
	GraphQLSchema,
} = graphql;

const {
	GraphQLString,
	GraphQLID,
} = graphql;

const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: {
			type: GraphQLID
		},
		name: {
			type: GraphQLString
		}
	})
});

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
	query: RootQuery
});
