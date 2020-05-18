import io from 'socket.io-client'

const API_KEY = '3a06d412960b4f017361f492d59765a72c8cd3266d7e0ac360df95b1d3aae70d'
const socket = io.connect(`wss://streamer.cryptocompare.com/v2?api_key=${API_KEY}`)

const cryptos = [
    '5~CCCAGG~BTC~USD',
    '5~CCCAGG~ETH~USD',
    '5~CCCAGG~XRP~USD',
    '5~CCCAGG~BCH~USD',
    '5~CCCAGG~ADA~USD',
    '5~CCCAGG~XLM~USD',
    '5~CCCAGG~LTC~USD',
]

export const onStartStream = () => {
    socket.emit('SubAdd', { subs: cryptos });
    socket.on('m', (message: any) => {
        console.log('message: ', message)

        // const messageType = message.substring(0, message.indexOf('~'));
        // let res = {};
        // if (messageType === CCC.STATIC.TYPE.CURRENTAGG) {
        //   res = CCC.CURRENT.unpack(message);
        //   that.dataUnpack(res);
    })
}