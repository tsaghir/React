import {
    commitMutation,
    graphql,
} from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
    mutation CreateMessageMutation($input: CreateMessageInput!){
        createMessage(input: $input){
            messageEdge{
                __typename
                cursor
                node{
                    id
                    text
                    ts
                }
            }
            user{
                id
                totalCount
            }
        }
    }
`;

function sharedUpdater(store, user, newEdge) {
    const userProxy = store.get(user.id);
    const conn = ConnectionHandler.getConnection(
        userProxy,
        'MessageList_messages',
    );
    ConnectionHandler.insertEdgeAfter(conn, newEdge);
}

let tempId = 0;

function commit(
    environment,
    text,
    user
) {
    return commitMutation(
        environment,
        {
            mutation,
            variables: {
                input: {
                    text,
                    clientMutationId: tempId++,
                },
            },
            updater: (store) => {
                const payload = store.getRootField('createMessage');
                const newEdge = payload.getLinkedRecord('messageEdge');
                sharedUpdater(store, user, newEdge);
            },
            optimisticUpdater: (store) => {
                const id = 'client:newMessage:' + tempId++;
                const node = store.create(id, 'Message');
                node.setValue(text, 'text');
                node.setValue(id, 'id');
                node.setValue(Math.floor((+ new Date()) / 1000), 'ts');
                const newEdge = store.create(
                    'client:newEdge:' + tempId++,
                    'MessageEdge',
                );
                newEdge.setLinkedRecord(node, 'node');
                sharedUpdater(store, user, newEdge);
                const userProxy = store.get(user.id);
                userProxy.setValue(
                    userProxy.getValue('totalCount') + 1,
                    'totalCount',
                );
            },
        }
    );
}

export default { commit };
