import { RECEIVE_COINS, CHANGE_SORTING_PARAM } from '../constants'

export type TCoin = {
    name: string
    fullName: string
    imageUrl: string
    price: number
    volume24Hour: number,
    changeHour: number
}

export type TReceiveCoinsAction = {
    type: typeof RECEIVE_COINS,
    payload: TCoin[]
}

export type TSortParamsByPrice = 'FROM_EXPENSIVE' | 'FROM_CHEAP'

export type TChangeSortingParamAction = {
    type: typeof CHANGE_SORTING_PARAM
}