import axios from 'axios'
import Dispatch from 'redux'
import { ThunkAction } from 'redux-thunk'
import { TCoin } from '../types'

// constants
export const RECEIVE_COINS = 'ADD_COIN'

// type state
type TcurrencyState = {
    coins: TCoin[]
}

// type action
type TActionType = TReceiveCoinsAction

const initialState: TcurrencyState = {
    coins: []
}

export const currencyReducer = (state = initialState, action: TActionType): TcurrencyState => {
    switch (action.type) {
        case RECEIVE_COINS:
            return {
                coins: [...action.payload]
            }

        default:
            return state
    }
}

export type TReceiveCoinsAction = {
    type: typeof RECEIVE_COINS,
    payload: TCoin[]
}

export const receiveCoins = (coins: TCoin[]): TReceiveCoinsAction => {
    return {
        type: RECEIVE_COINS,
        payload: coins
    }
}

export const fetchCoins = (): ThunkAction<Promise<void>, TcurrencyState, unknown, TActionType> => {
    return async (dispatch) => {
        const API_KEY: string = `3a06d412960b4f017361f492d59765a72c8cd3266d7e0ac360df95b1d3aae70d`;

        const { data } = await axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=${API_KEY}`)

        const coins: TCoin[] = data.Data.map((coin: any) => {
            const coinItem: TCoin = {
                name: coin.CoinInfo.Name,
                fullName: coin.CoinInfo.FullName,
                imageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                price: coin.RAW.USD.PRICE,
                volume24Hour: coin.RAW.USD.VOLUME24HOUR
            }

            return coinItem
        })

        dispatch(receiveCoins(coins))
    }
}