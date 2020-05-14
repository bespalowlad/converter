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

export default useStyles