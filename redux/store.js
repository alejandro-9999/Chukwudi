import { createStore,combineReducers,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import  productDuck,{getProductsAction} from './productsDuck';
import  categoriesDuck,{getCategoriesAction} from './catoriesDuck';

let rootReducer = combineReducers({
    products:productDuck,
    categories:categoriesDuck
})


let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
export default function generateStore(){
    let store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
    getProductsAction()(store.dispatch,store.getState);
    getCategoriesAction()(store.dispatch,store.getState);
    return store;
}
