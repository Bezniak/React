import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            post: [{id: 1, message: 'Hi, how are you?', likesCount: 12}, {
                id: 2, message: 'It is my first post', likesCount: 11
            }, {id: 3, message: 'Bla Bla Bla Bla Bla Bla Bla Bla ,', likesCount: 3}, {
                id: 4, message: 'Bla Bla Bla ', likesCount: 11
            },],
            newPostText: 'it-kamasutra.com',

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych',},
                {id: 2, name: 'Andrey',},
                {id: 3, name: 'Sveta',},
                {id: 4, name: 'Sasha',},
                {id: 5, name: 'Viktor',},
                {id: 6, name: 'Valera',},
            ],
            messages: [
                {id: 1, message: 'Hi',},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Lalalal'},
                {id: 5, message: 'Hi'},
                {id: 6, message: 'Hi'},
            ],
            newMessageBody: ""
        },
        sidebar: {},

    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;

export class updateNewPostText {
}