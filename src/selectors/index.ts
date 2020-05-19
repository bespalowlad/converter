import { createSelector } from 'reselect'

import { TRootState } from '../store'
import { TCoin, TSortParamsByPrice } from '../types'

const getCoins = (state: TRootState) => state.currency.coins
const getSortingParam = (state: TRootState) => state.currency.sortingParam
const getSearchParam = (state: TRootState) => state.currency.searchParam

export const getSortedCoinsByPrice = createSelector(
    [getCoins, getSortingParam, getSearchParam],
    (coins: TCoin[], sortParam: TSortParamsByPrice, searchParam: string) => {

        const findCoinByString = (coin: TCoin): boolean => coin.fullName.toLowerCase().includes(searchParam.toLowerCase())

        switch (sortParam) {
            case 'FROM_EXPENSIVE':
                return coins
                    .sort((a: TCoin, b: TCoin): number => {
                        if (a.price > b.price) {
                            return 1;
                        }

                        if (a.price < b.price) {
                            return -1;
                        }

                        return 0;
                    })
                    .filter(coin => findCoinByString(coin))

            case 'FROM_CHEAP':
                return coins
                    .sort((a: TCoin, b: TCoin): number => {
                        if (a.price > b.price) {
                            return -1;
                        }

                        if (a.price < b.price) {
                            return 1;
                        }

                        return 0;
                    })
                    .filter(coin => findCoinByString(coin))

            default:
                return coins.filter(coin => findCoinByString(coin))
        }
    }
) 