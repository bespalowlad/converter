import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { currencyReducer } from './currencyReducer'

const rootReducer = combineReducers({
    currency: currencyReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type TRootState = ReturnType<typeof rootReducer>