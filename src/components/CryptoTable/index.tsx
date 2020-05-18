import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { TCoin, TSortParamsByPrice, TChangeSortingParamAction } from '../../types'
import { TRootState } from '../../store'
import { fetchCoins, changeSortingParam } from '../../store/currencyReducer'
import { getSortedCoinsByPrice } from '../../selectors'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

type TStateProps = {
    coins: TCoin[],
    sortingParam: TSortParamsByPrice
}

type TDispatchProps = {
    fetchCoins: () => void
    changeSortingParam: () => TChangeSortingParamAction
}

type TOwnProps = {
    classes: any
}

type TProps = TStateProps & TDispatchProps & TOwnProps


const mapStateToProps = (state: TRootState) => ({
    coins: getSortedCoinsByPrice(state),
    sortingParam: state.currency.sortingParam
})

const mapDispatchToProps = { fetchCoins, changeSortingParam }

const CryptoTable: React.FC<TProps> = ({ coins, sortingParam, fetchCoins, changeSortingParam, classes }) => {
    console.log('rendeer')

    useEffect(() => {
        fetchCoins()

        const interval = window.setInterval(() => {
            fetchCoins()
        }, 5000)

        return () => window.clearInterval(interval)
    }, [])

    return <TableContainer component={Paper} elevation={3}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="left">FullName</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell onClick={changeSortingParam} align="left">Price</TableCell>
                    <TableCell align="left">Volume24hour</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {!coins.length ?
                    'Загрузка...' :
                    coins.map((coin) => (
                        <TableRow key={coin.name}>
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
            </TableBody>
        </Table>
    </TableContainer>
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoTable)
