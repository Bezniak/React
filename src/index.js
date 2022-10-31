import reportWebVitals from "./reportWebVitals";
import {rerenderEntireTree} from "./render";
import state from "./redux/state";




rerenderEntireTree(state);



reportWebVitals();
