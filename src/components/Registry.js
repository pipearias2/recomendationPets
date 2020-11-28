import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Select } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(1, 0, 4),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
  }));

export default function Registry(){
   
    const classes = useStyles();
    const [age, setAge] = React.useState(0);
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                Registro Usuario
                </Typography>
                <form className={classes.form} noValidate>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="document"
                    label="Número de documento de identidad"
                    name="document"
                    autoComplete="off"
                    autoFocus
                />
                <FormControl className={classes.form}>
                    <InputLabel id="demo-customized-select-label">Tipo de Documento</InputLabel>
                    <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    input={<BootstrapInput />}
                    onChange={handleChange}
                    value={age}
                    >
                        <MenuItem value={0}>Tipo de Documento</MenuItem>
                        <MenuItem value={1}>Cédula de Ciudadanía</MenuItem>
                        <MenuItem value={2}>Pasaporte</MenuItem>
                        <MenuItem value={3}>Cédula de Extranjería</MenuItem>
                    </Select>
                </FormControl>
                
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Nombres"
                    name="name"
                    autoComplete="off"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="lastname"
                    label="Apellidos"
                    type="lastname"
                    id="lastname"
                    autoComplete="off"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    label="Correo Eléctronico"
                    type="email"
                    id="email"
                    autoComplete="off"
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Celular o fijo"
                    type="phone"
                    id="phone"
                    autoComplete="off"
                />
                <FormControl className={classes.form}>
                    <InputLabel id="estrato-select-label">Estrato</InputLabel>
                    <Select
                    labelId="estrato-select-label"
                    id="estrato-select"
                    input={<BootstrapInput />}
                    onChange={handleChange}
                    >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>Ud no sabe quién soy yo</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Aceptar
                </Button>
                </form>
            </div>
        </Container>
    );
}