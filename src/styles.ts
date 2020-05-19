import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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

        header: {
            padding: 40
        },

        search: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
        },

        searchInput: {
            flex: 1
        },

        searchButton: {
            padding: 10
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
        },

        cellGreen: {
            background: '#c4feb5'
        },

        cellRed: {
            background: '#ffb1b1'
        },

        sortable: {
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between'
        },

        pointerDown: {
            transform: 'scale(-1, -1)'
        }
    }),
);

export default useStyles