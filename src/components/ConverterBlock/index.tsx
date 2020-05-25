import React from 'react'
import { connect } from 'react-redux'

import { TRootState } from '../../store'
import { TCoin, TSelectCurrencyAction, TExchangeCurrencyAction } from '../../types'
import { selectCurrency, exchangeCurrency } from '../../store/currencyReducer'
import { getValueExchangedCurrencies } from '../../selectors'

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

type TStateProps = {
    coins: TCoin[],
    selectedCurrency: TCoin,
    amountSelectedCurrency: number
}

type TDispatchProps = {
    selectCurrencyHandler: (currency: TCoin) => TSelectCurrencyAction,
    exchangeCurrencyHandler: (amount: number) => TExchangeCurrencyAction
}

type TOwnProps = {
    classes: any
}

const mapStateToProps = (state: TRootState) => ({
    coins: state.currency.coins,
    selectedCurrency: state.currency.selectedCurrency,
    amountSelectedCurrency: getValueExchangedCurrencies(state)
})

const mapDispatchToProps = {
    selectCurrencyHandler: selectCurrency,
    exchangeCurrencyHandler: exchangeCurrency
}

type TProps = TStateProps & TDispatchProps & TOwnProps

const ConverterBlock: React.FC<TProps> = ({ coins, selectedCurrency, selectCurrencyHandler, exchangeCurrencyHandler, amountSelectedCurrency, classes }) => {

    const changeCurrencyHandler = (e: React.ChangeEvent<{ value: unknown }>) => {
        const coin: TCoin | undefined = coins.find((coin: TCoin) => coin.name === e.target.value)

        if (coin) {
            selectCurrencyHandler(coin)
        }
    }

    const changeAmountHandler = (e: React.ChangeEvent<{ value: unknown }>) => {
        const amount: number = e.target.value as number
        exchangeCurrencyHandler(amount)
    }

    return (
        <Paper className={classes.paper} elevation={3}>
            <div className={classes.inputBox}>
                <FormControl className={classes.currencyValue}>
                    <TextField onChange={changeAmountHandler} id="standard-basic" label="Сумма" />
                </FormControl>

                <FormControl className={classes.currencyType}>
                    <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={changeCurrencyHandler}
                        value={selectedCurrency.name ? selectedCurrency.name : ''}
                    >
                        {coins.map((coin) => (
                            <MenuItem key={coin.name} value={coin.name}>{coin.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <div className={classes.inputBox}>
                <FormControl className={classes.outputValue}>
                    <TextField value={amountSelectedCurrency} disabled id="filled-disabled" label="Сумма" variant="filled" />
                </FormControl>
            </div>
        </Paper>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ConverterBlock)