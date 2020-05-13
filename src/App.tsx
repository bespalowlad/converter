import React, { useState, useEffect } from 'react';
import axios from 'axios'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(10),
    },

    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

    inputBox: {
      marginTop: 20,
      marginBottom: 20
    },

    currencyValue: {
      width: 'calc(70% - 15px)',
      marginRight: 15
    },

    currencyType: {
      width: '30%'
    },

    currencyImage: {
      width: 18,
      height: 18,
      borderRadius: '50%'
    }
  }),
);

type TCoin = {
  name: string
  fullName: string
  imageUrl: string
  price: number
  volume24Hour: number
}

function App() {
  const [coins, setCoins] = useState<TCoin[]>([])

  useEffect(() => {
    const API_KEY: string = `3a06d412960b4f017361f492d59765a72c8cd3266d7e0ac360df95b1d3aae70d`;

    axios
      .get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=${API_KEY}`)
      .then(({ data }) => {
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

        setCoins(coins)
      })
  }, [])


  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      <div className="App">
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <TableContainer component={Paper} elevation={3}>
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
                  {coins.map((coin) => (
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
          </Grid>
          <Grid item xs={4}>
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

              <Typography variant="h5" component="h5">
                h4. Heading
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default App;
