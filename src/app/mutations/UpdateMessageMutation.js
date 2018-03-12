import{
    commitMutation,
    graphql,
}from 'react-relay';

const mutation = graphql`
    mutation UpdateMessageMutation($input: UpdateMessageInput!){
        updateMessage(input: $input){
            message{
                id
                text
            }
        }
    }
`;

function getOptimisticResponse(text, message){
    return{
        updateMessage: {
            message: {
                id: message.id,
                text: text,
            },
        },
    };
}

function commit(
    environment,
    text,
    message
){
    return commitMutation(
        environment,
        {
            mutation,
            variables: {
                input: {text, id: message.id},
            },
            optimisticResponse: getOptimisticResponse(text, message),
        }
    );
}

export default {commit}