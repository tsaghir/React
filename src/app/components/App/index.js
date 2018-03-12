import React, { Component } from 'react';
import {
  createFragmentContainer,
  graphql
} from 'react-relay'
import './css/index.css';
import MessageCounter from '../MessageCounter'
import MessageList from '../MessageList'
import MessageTextInput from '../MessageTextInput'
import CreateMessageMutation from '../../mutations/CreateMessageMutation';
import UpdateMessageMutation from '../../mutations/UpdateMessageMutation';

class App extends Component{
  state = {
    text: '',
    currentMessage: undefined
  };

  onSubmit = () =>{
    if(typeof this.state.currentMessage ==='undefined'){
      CreateMessageMutation.commit(
        this.props.relay.environment,
        this.state.text.trim(),
        this.props.user,
      );
    }else{
      UpdateMessageMutation.commit(
        this.props.relay.environment,
        this.state.text.trim(),
        this.state.currentMessage,
      );
    }

    this.setState({
      text: '',
      currrentMessage: undefined
    })
  }

  onChange = e =>{
    this.setState({text: e.target.value});
  };

  onEditMessage = message => {
    this.setState({
      currentMessage: message,
      text: message.text
    });
  }

  onDeleteEditedMessage = () => {
    this.setState({
      currentMessage: undefined,
      text:''
    });
  }

  render(){
    const {user} = this.props
    const{totalCount} = user;
    const {onSubmit, onChange, onEditMessage, onDeleteEditedMessage} = this;
    const {text,currentMessage} = this.state
    return(
      <div className="app">
        <div className="app__container">
          <MessageCounter totalCount={totalCount}/>
          <MessageList
            user={user}
            onEditMessage = {onEditMessage}
            onDeleteEditedMessage={onDeleteEditedMessage}
            currentMessage={currentMessage}
          />
          <MessageTextInput
            text={text}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    );
  }
}

export default createFragmentContainer(App,
  graphql`
    fragment App_user on User{
      id,
      totalCount,
      avatar,
      messages(
        first: 2147483647  # max GraphQLInt
      ) @connection(key: "MessageList_messages"){
        edges{
          node{
            id,
            text,
            ts
          },
        },
      },
      ...MessageList_user
    }
`)