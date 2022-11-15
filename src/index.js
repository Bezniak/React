import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root')); // ВОТ ЭТА СТРОКА
let rerenderEntireTree = (state) => {

    root.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>
    );
}


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


reportWebVitals();
