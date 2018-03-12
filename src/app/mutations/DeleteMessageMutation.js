import {
    commitMutation,
    graphql,
} from 'react-relay'
import {ConnectionHandler} from 'relay-runtime';

const mutation = graphql`
    mutation DeleteMessageMutation($input: DeleteMessageInput!){
        deleteMessage(input: $input){
            deletedMessageId,
            user{
                totalCount,
            },
        }
    }
`;

function sharedUpdater(store, user, deletedId){
    const userProxy = store.get(user.id);
    const conn = ConnectionHandler.getConnection(
        userProxy,
        'MessageList_messages',
    );
    ConnectionHandler.deletedNode(
        conn,
        deletedId,
    );
}

function commit(
    environment,
    message,
    user,
){
    return commitMutation(
        environment,
        {
            mutation,
            variables: {
                input: {id: message.id},
            },
            updater: (store) => {
                const payload = store.getRootField('deleteMessage');
                sharedUpdater(store, user, payload.getValue('deletedMessageId'));
            },
            optimisticUpdater: (store) => {
                sharedUpdater(store, user, message.id);
            },
        }
    );
}

export default {commit};