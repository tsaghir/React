import React, {Component} from 'react';
import {
    createFragmentContainer,
    graphql
} from 'react-relay'
import './css/index.css';
import Message from '../Message'

class MessageList extends Component{
    renderList(){
        const {user, onEditMessage, currentMessage, onDeleteEditedMessage} = this.props
        const {avatar, messages} = user
        return messages.edges.map(edge =>
            <Message
                key={edge.node.id}
                message={edge.node}
                user={user}
                onEditMessage={onEditMessage}
                onDeleteEditedMessage={onDeleteEditedMessage}
                beingEdited={edge.node.id === (currentMessage && currentMessage.id)}
            />
        );
    }

    render(){
        return(
            <div className="messageList">
                <div className="messageList__container">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

export default createFragmentContainer(MessageList, {
    user: graphql`
        fragment MessageList_user on User{
            messages(
                first: 2147483647 # max GraphQLInt
            ) @connection(key: "MessageList_messages"){
                edges{
                    node{
                        id,
                        text,
                        ts,
                        ...Message_message
                    },
                },
            },
            id,
            totalCount,
            avatar,
            ...Message_user
        }
    `}
)