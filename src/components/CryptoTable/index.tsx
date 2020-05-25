import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { TCoin, TSortParamsByPrice, TChangeSortingParamAction, TSelectCurrencyAction } from '../../types'
import { TRootState } from '../../store'
import { fetchCoins, changeSortingParam, selectCurrency } from '../../store/currencyReducer'
import { getSortedCoinsByPrice } from '../../selectors'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import ArrowSvg from '../../images/arrow.svg'

type TStateProps = {
    coins: TCoin[],
    sortingParam: TSortParamsByPrice,
    searchParam: string,
    isVisibleProgress: boolean
}

type TDispatchProps = {
    fetchCoins: () => void
    changeSortingParam: () => TChangeSortingParamAction,
    selectCurrencyHandler: (currency: TCoin) => TSelectCurrencyAction
}

type TOwnProps = {
    classes: any
}

type TProps = TStateProps & TDispatchProps & TOwnProps


const mapStateToProps = (state: TRootState) => ({
    coins: getSortedCoinsByPrice(state),
    sortingParam: state.currency.sortingParam,
    searchParam: state.currency.searchParam,
    isVisibleProgress: state.currency.isVisibleProgress
})

const mapDispatchToProps = {
    fetchCoins,
    changeSortingParam,
    selectCurrencyHandler: selectCurrency
}

const CryptoTable: React.FC<TProps> = ({ coins, sortingParam, searchParam, isVisibleProgress, fetchCoins, changeSortingParam, selectCurrencyHandler, classes }) => {
    useEffect(() => {
        fetchCoins()

        // const interval = window.setInterval(() => {
        //     fetchCoins()
        // }, 5000)

        // return () => window.clearInterval(interval)
    }, [])

    return <TableContainer component={Paper} elevation={3}>
        {isVisibleProgress ?
            <div className={classes.progressBox}>
                <CircularProgress color="secondary" />
            </div> :
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="left">FullName</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell onClick={changeSortingParam} className={classes.sortable} align="left">
                            Price
                        <img src={ArrowSvg} className={sortingParam === 'FROM_EXPENSIVE' ? classes.pointerDown : ''} alt="Arrow" />
                        </TableCell>
                        <TableCell align="left">Volume24hour</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {coins.map((coin) => (
                        <TableRow onClick={() => selectCurrencyHandler(coin)} key={coin.name} className={classes.row}>
                            <TableCell component="th" scope="row">
                                <img src={coin.imageUrl} className={classes.currencyImage} alt="Coin icon" />
                            </TableCell>
                            <TableCell align="left">{coin.name}</TableCell>
                            <TableCell align="left">{coin.fullName}</TableCell>
                            <TableCell className={coin.changeHour > 0 ? classes.cellGreen : classes.cellRed} align="left">
                                ${(coin.price)}
                            </TableCell>
                            <TableCell align="left">${(coin.volume24Hour).toFixed(5)}</TableCell>
                        </TableRow>
                    ))}

                    {searchParam && coins.length === 0 && <TableRow>
                        <TableCell component="th" scope="row" align="center">
                            <Typography variant="h5" gutterBottom>No such currency found</Typography>
                        </TableCell>
                    </TableRow>}
                </TableBody>
            </Table>}
    </TableContainer>
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoTable)
