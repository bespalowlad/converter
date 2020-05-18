import { createSelector } from 'reselect'

import { TRootState } from '../store'
import { TCoin, TSortParamsByPrice } from '../types'

const getCoins = (state: TRootState) => state.currency.coins
const getSortingParam = (state: TRootState) => state.currency.sortingParam

export const getSortedCoinsByPrice = createSelector(
    [getCoins, getSortingParam],
    (coins: TCoin[], param: TSortParamsByPrice) => {
        switch (param) {
            case 'FROM_EXPENSIVE':
                return coins.sort((a: TCoin, b: TCoin): number => {
                    if (a.price > b.price) {
                        return 1;
                    }

                    if (a.price < b.price) {
                        return -1;
                    }

                    return 0;
                })

            case 'FROM_CHEAP':
                return coins.sort((a: TCoin, b: TCoin): number => {
                    if (a.price > b.price) {
                        return -1;
                    }

                    if (a.price < b.price) {
                        return 1;
                    }

                    return 0;
                })

            default:
                return coins
        }
    }
) 