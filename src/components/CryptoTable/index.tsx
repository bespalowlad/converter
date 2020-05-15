import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { TCoin } from '../../types'
import { TRootState } from '../../store'
import { fetchCoins } from '../../store/currencyReducer'

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

type TStateProps = {
    coins: TCoin[]
}

type TDispatchProps = {
    fetchCoins: () => void
}

type TOwnProps = {
    classes: any
}

type TProps = TStateProps & TDispatchProps & TOwnProps


const mapStateToProps = (state: TRootState) => ({
    coins: state.currency.coins
})

const mapDispatchToProps = { fetchCoins }

const CryptoTable: React.FC<TProps> = ({ coins, fetchCoins, classes }) => {
    useEffect(() => {
        fetchCoins()
    }, [])

    return <TableContainer component={Paper} elevation={3}>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="left">FullName</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Price</TableCell>
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
                            <TableCell align="left">${(coin.price).toFixed(3)}</TableCell>
                            <TableCell align="left">${(coin.volume24Hour).toFixed(3)}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>
    </TableContainer>
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoTable)
