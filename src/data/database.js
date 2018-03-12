export class User{
    constructor(id, name, avatar){
        this.id = id;
        this.name = name;
        this.avatar = avatar;
    }
}

export class Message{
    constructor(id, ts, text){
        this.id = id;
        this.ts = Math.floor((+ ts) / 1000);
        this.text = text;
    }
}

// Mock data
const USER_ID = 0;
const user = new User(
    USER_ID,
    'Test korisnik',
    'https://s3.amazonaws.com/siegrs/avatars/avatar_59d05ae60bd8b.png'
);

const messagesById = {};

let messageId = 0;

export function createMessage(text){
    const id = messageId++;
    const message = new Message(id, new Date(), text);
    messagesById[id] = message;
    return id;
}

export function updateMessage(id, text){
    const message = getMessage(id);
    message.text = text;
}

export function deleteMessage(id){
    delete messagesById[id];
}

export function getMessage(id){
    return messagesById[id];
}

export function getMessages(){
    return Object.keys(messagesById).map(id => messagesById[id]);
}

export function getCurrentUser(){
    return user;
}

createMessage('Hello React World!');
createMessage('Kaj ima lima?');