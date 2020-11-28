import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Questions extends React.Component{
  constructor(props){
    super(props);
    this.state = {}   
  }
  redirectFeed(){

  }
  
  componentDidMount(){

  }
  componentWillMount(){

  }
  render(){
    return(
      <FormQuestions/>
    );
  }
}


export default Questions;


function FormQuestions(props){
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

    const classes = useStyles();

    const [sizePet,setSizePet] = React.useState(0);
    const [colorPet,setColorPet] = React.useState(0);
    const [areaPet,setAreaPet] = React.useState(0);
    const [redirect,setRedirect] = React.useState(0);

    const handleChangeSizePet = (event) =>{
      setSizePet(event.target.value);
    };
    const handleChangeColorPet = (event) =>{
      setColorPet(event.target.value);
    };
    const handleChangeAreaPet = (event) =>{
      setAreaPet(event.target.value);
    };
    const handleSubmit = (event) =>{
      event.preventDefault();
      if(sizePet>0 && colorPet > 0 && areaPet > 0){

        axios.put(`http://localhost:1337/api/client/preferences`,{"size":sizePet, "color":colorPet, "area":areaPet})
        .then(res => {
          if(res.status == 200){
            setRedirect(true);
          }
        });
      }else{
        alert("Falta completar el formulario");
      }
    }
    if(redirect){
      return <Redirect push to="/feed"/>
    }else{
      return(
          <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                  <Typography component="h1" variant="h5">
                  Recomendation Pets
                  </Typography>
                  <FormLabel component="legend">En esta encuesta queremos conocer tus gustos y preferencias con respecto a las mascotas que quieras tener</FormLabel>
                  <form className={classes.form} onSubmit={handleSubmit} noValidate>
                    <FormControl component="fieldset" className={classes.form}>
                      <FormLabel component="legend">1. ¿Qué tamaño de mascota estás buscando?</FormLabel>
                      <RadioGroup
                        aria-label="sizePet"
                        name="sizePet"
                        value={sizePet}
                        onChange={handleChangeSizePet}
                        required
                      >
                        <FormControlLabel value="5" control={<Radio />} label="Muy grande" />
                        <FormControlLabel value="4" control={<Radio />} label="Grande" />
                        <FormControlLabel value="3" control={<Radio />} label="Mediano" />
                        <FormControlLabel value="2" control={<Radio />} label="Pequeño" />
                        <FormControlLabel value="1" control={<Radio />} label="Muy Pequeño" />
                      </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset" className={classes.form}>
                      <FormLabel component="legend">2. ¿Qué color prefieres en una mascota?</FormLabel>
                      <RadioGroup
                        aria-label="colorPet"
                        name="colorPet"
                        value={colorPet}
                        onChange={handleChangeColorPet}
                        required
                        >
                        <FormControlLabel value="1" control={<Radio />} label="Tricolor" />
                        <FormControlLabel value="2" control={<Radio />} label="Cafe" />
                        <FormControlLabel value="3" control={<Radio />} label="Blanco" />
                        <FormControlLabel value="4" control={<Radio />} label="Negro" />
                        <FormControlLabel value="5" control={<Radio />} label="Cualquiera" />
                      </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset" className={classes.form}>
                      <FormLabel component="legend">3. ¿Área de la ubicación final de la mascota?</FormLabel>
                      <TextField
                          onChange={handleChangeAreaPet}
                          value={areaPet}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          name="area"
                          label="Área"
                          type="number"
                          id="area"
                        />
                    </FormControl>

                    <Typography component="h4" variant="h4">
                      Muchas gracias
                    </Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}>
                        Enviar
                    </Button>
                  </form>
              </div>
          </Container>
      );
    }
}