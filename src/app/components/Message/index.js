import React, {Component} from 'react';
import {
    createFragmentContainer,
    graphql
} from 'react-relay'

import './css/index.css';
import classNames from 'classnames';
import moment from 'moment';
import DeleteMessageMutation from '../../mutations/DeleteMessageMutation'

class Message extends Component{
    onDelete = () => {
        if(this.props.beingEdited){
            this.props.onDeleteEditedMessage(this.props.message)
        }
        DeleteMessageMutation.commit(
            this.props.relay.environment,
            this.props.message,
            this.props.user,
        );
    }

    onEditMessage = () => {
        if(!this.props.beingEdited){
            this.props.onEditMessage(this.props.message)
        }
    }

    render(){
        const {user, message, beingEdited} = this.props;
        const {onDelete, onEditMessage} = this;
        return(
            <div className= {classNames('message')}>
                <img
                    className="message__avatar"
                    src={user.avatar}
                />
                <div className={classNames('message__textContainer', {'message__textContainer--backgroundGray': beingEdited})}>
                    <span className="message__textContainer__content">{message.text}</span>
                    <div>
                        <span className="message__editButton" onClick={onEditMessage}>Edit</span>
                        <span className="message__deleteButton" onClick={onDelete}>Delete</span>
                    </div>
                </div>
                <div className="message__dateContainer">
                    {moment.unix(message.ts).format('D/M/YYYY H:mm')}
                </div> 
            </div>
        );
    }
}

export default createFragmentContainer(Message,
    {
        message: graphql`
            fragment Message_message on Message{
                id,
                text,
                ts
            }
        `,
        user: graphql`
            fragment Message_user on User{
                id,
                avatar,
                totalCount,
            }
        `,
    }
)