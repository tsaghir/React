import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
} from 'graphql';

import {
    connectionArgs,
    connectionDefinitions,
    connectionFromArray,
    cursorForObjectInConnection,
    fromGlobalId,
    globalIdField,
    mutationWithClientMutationId,
    nodeDefinitions,
    toGlobalId,
} from 'graphql-relay';

import {
    Message,
    User,
    createMessage,
    renameMessage,
    updateMessage,
    deleteMessage,
    getMessages,
    getMessage,
    getCurrentUser
} from './database';

const { nodeInterface, nodeField } = nodeDefinitions(
    globalId => {
        const { type, id } = fromGlobalId(globalId);
        if (type === 'Message') {
            return getMessage(id);
        } else if (type === 'User') {
            return getCurrentUser();
        }
    },
    obj => {
        if(obj instanceof Message){
            return GraphQLMessage;
        }else if (obj instanceof User){
            return GraphQLUser;
        }
        return null;
    }
);

const GraphQLMessage = new GraphQLObjectType({
    name: 'Message',
    fields: {
        id: globalIdField('Message'),
        text: {
            type: GraphQLString,
            resolve: obj => obj.text,
        },
        ts: {
            type: GraphQLInt,
            resolbe: obj => obj.ts,
        }
    },
    interfaces: [nodeInterface],
});

const {
    connectionType: MessagesConnection,
    edgeType: GraphQLMessageEdge,
  } = connectionDefinitions({
    name: 'Message',
    nodeType: GraphQLMessage,
  });
  
  const GraphQLUser = new GraphQLObjectType({
    name: 'User',
    fields: {
      id: globalIdField('User'),
      messages: {
        type: MessagesConnection,
        args: {
          status: {
            type: GraphQLString,
            defaultValue: 'any',
          },
          ...connectionArgs,
        },
        resolve: (obj, ...args) =>
          connectionFromArray(getMessages(), args),
      },
      totalCount: {
        type: GraphQLInt,
        resolve: () => getMessages().length,
      },
      avatar: {
        type: GraphQLString,
        resolve: () => getCurrentUser().avatar
      },
      name: {
        type: GraphQLString,
        resolve: () => getCurrentUser().name
      }
    },
    interfaces: [nodeInterface],
  });
  
  const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
      user: {
        type: GraphQLUser,
        resolve: () => getCurrentUser(),
      },
      node: nodeField,
    },
  });
  
  const GraphQLCreateMessageMutation = mutationWithClientMutationId({
    name: 'CreateMessage',
    inputFields: {
      text: { type: new GraphQLNonNull(GraphQLString) },
    },
    outputFields: {
      messageEdge: {
        type: GraphQLMessageEdge,
        resolve: ({localMessageId}) => {
          const message = getMessage(localMessageId);
          return {
            cursor: cursorForObjectInConnection(getMessages(), message),
            node: message,
          };
        },
      },
      user: {
        type: GraphQLUser,
        resolve: () => getCurrentUser(),
      },
    },
    mutateAndGetPayload: ({text}) => {
      const localMessageId = createMessage(text);
      return {localMessageId};
    },
  });
  
  const GraphQLDeleteMessageMutation = mutationWithClientMutationId({
    name: 'DeleteMessage',
    inputFields: {
      id: { type: new GraphQLNonNull(GraphQLID) },
    },
    outputFields: {
      deletedMessageId: {
        type: GraphQLID,
        resolve: ({id}) => id,
      },
      user: {
        type: GraphQLUser,
        resolve: () => getCurrentUser(),
      },
    },
    mutateAndGetPayload: ({id}) => {
      const localMessageId = fromGlobalId(id).id;
      deleteMessage(localMessageId);
      return {id};
    },
  });
  
  const GraphQLUpdateMessageMutation = mutationWithClientMutationId({
    name: 'UpdateMessage',
    inputFields: {
      id: { type: new GraphQLNonNull(GraphQLID) },
      text: { type: new GraphQLNonNull(GraphQLString) },
    },
    outputFields: {
      message: {
        type: GraphQLMessage,
        resolve: ({localMessageId}) => getMessage(localMessageId),
      },
    },
    mutateAndGetPayload: ({id, text}) => {
      const localMessageId = fromGlobalId(id).id;
      updateMessage(localMessageId, text);
      return {localMessageId};
    },
  });
  
  const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
      createMessage: GraphQLCreateMessageMutation,
      deleteMessage: GraphQLDeleteMessageMutation,
      updateMessage: GraphQLUpdateMessageMutation,
    },
  });
  
  export const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation,
  });
