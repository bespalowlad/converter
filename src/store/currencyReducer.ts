import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import {
    TCoin,
    TToggleProgressAction,
    TReceiveCoinsAction,
    TSortParamsByPrice,
    TChangeSortingParamAction,
    TSearchByStringAction,
    TSelectCurrencyAction,
    TExchangeCurrencyAction
} from '../types'
import {
    TOGGLE_PROGRESS,
    RECEIVE_COINS,
    CHANGE_SORTING_PARAM,
    SEARCH_BY_STRING,
    SELECT_CURRENCY,
    EXCHANGE_CURRENCY
} from '../constants'

// type state
type TcurrencyState = {
    coins: TCoin[],
    sortingParam: TSortParamsByPrice,
    searchParam: string,
    isVisibleProgress: boolean,
    selectedCurrency: TCoin,
    amountSelectedCurrency: number
}

const initialState: TcurrencyState = {
    coins: [],
    sortingParam: 'FROM_EXPENSIVE',
    searchParam: '',
    isVisibleProgress: false,
    selectedCurrency: {} as TCoin,
    amountSelectedCurrency: 0
}

// type action
type TActionType = TToggleProgressAction | TReceiveCoinsAction | TChangeSortingParamAction | TSearchByStringAction | TSelectCurrencyAction | TExchangeCurrencyAction

export const currencyReducer = (state = initialState, action: TActionType): TcurrencyState => {
    switch (action.type) {
        case TOGGLE_PROGRESS:
            return {
                ...state,
                isVisibleProgress: action.payload
            }

        case RECEIVE_COINS:
            return {
                ...state,
                coins: [...action.payload]
            }

        case CHANGE_SORTING_PARAM:
            return {
                ...state,
                sortingParam: state.sortingParam === 'FROM_EXPENSIVE' ? 'FROM_CHEAP' : 'FROM_EXPENSIVE'
            }

        case SEARCH_BY_STRING:
            return {
                ...state,
                searchParam: action.searchParam
            }

        case SELECT_CURRENCY:
            return {
                ...state,
                selectedCurrency: action.currency
            }

        case EXCHANGE_CURRENCY:
            return {
                ...state,
                amountSelectedCurrency: action.amount
            }

        default:
            return state
    }
}

//action creator
export const toggleProgress = (payload: boolean): TToggleProgressAction => {
    return {
        type: TOGGLE_PROGRESS,
        payload
    }
}

export const receiveCoins = (coins: TCoin[]): TReceiveCoinsAction => {
    return {
        type: RECEIVE_COINS,
        payload: coins
    }
}

export const changeSortingParam = (): TChangeSortingParamAction => {
    return {
        type: CHANGE_SORTING_PARAM
    }
}

export const searchByString = (searchParam: string): TSearchByStringAction => {
    return {
        type: SEARCH_BY_STRING,
        searchParam
    }
}

export const selectCurrency = (currency: TCoin): TSelectCurrencyAction => {
    return {
        type: SELECT_CURRENCY,
        currency
    }
}

export const exchangeCurrency = (amount: number): TExchangeCurrencyAction => {
    return {
        type: EXCHANGE_CURRENCY,
        amount
    }
}

//thunks
export const fetchCoins = (): ThunkAction<Promise<void>, TcurrencyState, unknown, TActionType> => {
    return async (dispatch) => {
        const API_KEY: string = `3a06d412960b4f017361f492d59765a72c8cd3266d7e0ac360df95b1d3aae70d`;

        dispatch(toggleProgress(true))
        const { data } = await axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=${API_KEY}`)

        const coins: TCoin[] = data.Data.map((coin: any) => {
            const coinItem: TCoin = {
                name: coin.CoinInfo.Name,
                fullName: coin.CoinInfo.FullName,
                imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                price: coin.RAW.USD.PRICE,
                volume24Hour: coin.RAW.USD.VOLUME24HOUR,
                changeHour: coin.RAW.USD.CHANGEHOUR
            }

            return coinItem
        })

        console.log(coins)
        dispatch(toggleProgress(false))
        dispatch(receiveCoins(coins))
        dispatch(selectCurrency(coins[0]))
    }
}