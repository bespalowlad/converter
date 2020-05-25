import {
    TOGGLE_PROGRESS,
    RECEIVE_COINS,
    CHANGE_SORTING_PARAM,
    SEARCH_BY_STRING,
    SELECT_CURRENCY,
    EXCHANGE_CURRENCY
} from '../constants'

export type TCoin = {
    name: string
    fullName: string
    imageUrl: string
    price: number
    volume24Hour: number,
    changeHour: number
}

export type TToggleProgressAction = {
    type: typeof TOGGLE_PROGRESS,
    payload: boolean
}

export type TReceiveCoinsAction = {
    type: typeof RECEIVE_COINS,
    payload: TCoin[]
}

export type TSortParamsByPrice = 'FROM_EXPENSIVE' | 'FROM_CHEAP'

export type TChangeSortingParamAction = {
    type: typeof CHANGE_SORTING_PARAM
}

export type TSearchByStringAction = {
    type: typeof SEARCH_BY_STRING,
    searchParam: string
}

export type TSelectCurrencyAction = {
    type: typeof SELECT_CURRENCY,
    currency: TCoin
}

export type TExchangeCurrencyAction = {
    type: typeof EXCHANGE_CURRENCY,
    amount: number
}

