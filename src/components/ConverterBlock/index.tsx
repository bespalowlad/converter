import React from 'react'

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';

type TConverterBlock = {
    classes: any
}

const ConverterBlock: React.FC<TConverterBlock> = ({ classes }) => {
    return (
        <Paper className={classes.paper} elevation={3}>
            <div className={classes.inputBox}>
                <FormControl className={classes.currencyValue}>
                    <TextField id="standard-basic" label="Сумма" />
                </FormControl>

                <FormControl className={classes.currencyType}>
                    <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className={classes.inputBox}>
                <FormControl className={classes.currencyValue}>
                    <TextField id="standard-basic" label="Сумма" />
                </FormControl>

                <FormControl className={classes.currencyType}>
                    <InputLabel id="demo-simple-select-label">Валюта</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </Paper>
    )
}

export default ConverterBlock