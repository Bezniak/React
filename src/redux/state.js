let store = {
    _state: {
        profilePage: {
            post: [{id: 1, message: 'Hi, how are you?', likesCount: 12}, {
                id: 2,
                message: 'It is my first post',
                likesCount: 11
            }, {id: 3, message: 'Bla Bla Bla Bla Bla Bla Bla Bla ,', likesCount: 3}, {
                id: 4,
                message: 'Bla Bla Bla ',
                likesCount: 11
            },], newPostText: 'it-kamasutra.com',

        }, dialogsPage: {
            dialogs: [{id: 1, name: 'Dimych',}, {id: 2, name: 'Andrey',}, {id: 3, name: 'Sveta',}, {
                id: 4,
                name: 'Sasha',
            }, {id: 5, name: 'Viktor',}, {id: 6, name: 'Valera',},],
            messages: [{id: 1, message: 'Hi',}, {id: 2, message: 'Hi'}, {id: 3, message: 'Yo'}, {
                id: 4,
                message: 'Lalalal'
            }, {id: 5, message: 'Hi'}, {id: 6, message: 'Hi'},],
        }, sidebar: {},

    }, getState() {
        return this._state;
    },

_callSubscriber() {
    console.log('State changed');
},

addPost() {
    let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
    }
    this._state.profilePage.post.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);

},

updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);

},

subscribe(observer) {
    this._callSubscriber = observer;
},
}

export default store;
window.store = store;

