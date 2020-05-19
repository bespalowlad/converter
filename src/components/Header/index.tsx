import React from 'react'
import { connect } from 'react-redux'

import { searchByString } from '../../store/currencyReducer'
import { TRootState } from '../../store'
import { TSearchByStringAction } from '../../types'

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

type TStateProps = {
    searchParam: string
}

type TDispatchProps = {
    searchByString: (searchParam: string) => TSearchByStringAction
}

type TOwnProps = {
    classes: any
}

type TProps = TStateProps & TDispatchProps & TOwnProps


const mapStateToProps = (state: TRootState) => ({
    searchParam: state.currency.searchParam
})

const mapDispatchToProps = {
    searchByString
}

const HeaderBlock: React.FC<TProps> = ({ searchParam, searchByString, classes }) => {
    return (
        <Paper elevation={3} className={classes.header} >
            <Paper component="form" className={classes.search} elevation={1} >
                <InputBase value={searchParam} onChange={e => searchByString(e.target.value)} className={classes.searchInput} placeholder="Search by fullname..." />
                <IconButton type="button" className={classes.searchButton} >
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Paper>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBlock)