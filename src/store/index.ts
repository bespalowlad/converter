import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { currencyReducer } from './currencyReducer'

const rootReducer = combineReducers({
    currency: currencyReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type TRootState = ReturnType<typeof rootReducer>