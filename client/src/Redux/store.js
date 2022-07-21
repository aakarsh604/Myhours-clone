

import { legacy_createStore as createStore,combineReducers,compose } from "redux";


const rootReducer = combineReducers({
    
})

export const store = createStore(rootReducer,compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
