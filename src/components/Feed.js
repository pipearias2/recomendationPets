import React from 'react';
import CardPet from './CardPet';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import _ from 'lodash';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));



class Feed extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pets:[]
    }   
  }
  
  componentDidMount(){
    axios.get(`http://localhost:1337/api/client/pets-by-clients`)
    .then(res => {
      if(res.status == 200){
        this.setState({pets: _.orderBy(res.data, ['index'], ['desc'])});
      }else
        console.log('ups');
    });
  }
  componentWillMount(){

  }

  handleLikePet = (id) =>{
    axios.post("http://localhost:1337/api/client/like",{"dogId":id})
    .then(res => {
      if(res.status == 200){
        window.location.reload(false);
      }else
        console.log('ups');
    });
  }
  render(){
    return(
      <Container component="main" maxWidth="lg" spacing={2}>
        <Typography component="h1" variant="h5">
        Recomendation Pets Mascotas para ti
        </Typography>
          <Grid container justify="center" spacing={1}>
            <Grid item lg={12} lx={12}>
              <Grid container justify="center" spacing={1}>
                {this.state.pets.map((value)=>(
                  <React.Fragment>
                    <Grid item lg={4} lx={4}>
                        <CardPet id={value.id} pet={value} likePet={this.handleLikePet}/>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>      
    );
  }
}

export default Feed;





// export default function Feed(){   
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
//     function FormRow() {
//       return (
//         <React.Fragment>
//           <Grid item ms={12}>
//             <Paper>
//             <Card className={classes.root}>
//               <CardHeader
//                 title="Julian"
//               />
//               <CardMedia
//                 className={classes.media}
//                 image="https://i.guim.co.uk/img/media/03734ee186eba543fb3d0e35db2a90a14a5d79e3/0_173_5200_3120/master/5200.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=9c30ed97ea8731f3e2a155467201afe3"
//                 title="Paella dish"
//               />
//               <CardContent>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                   This impressive paella is a perfect party dish and a fun meal to cook together with your
//                   guests. Add 1 cup of frozen peas along with the mussels, if you like.
//                 </Typography>
//               </CardContent>
//               <CardActions disableSpacing>
//                 <IconButton aria-label="add to favorites">
//                   <FavoriteIcon />
//                 </IconButton>
//               </CardActions>
//             </Card>
//             </Paper>
//           </Grid>
//         </React.Fragment>
//       );
//     }
//     return(
        // <Container component="main" maxWidth="lg" spaceing={2}>
        //     <div className={classes.paper}>
        //         <Typography component="h1" variant="h5">
        //         Recomendation Pets Mascotas para ti
        //         </Typography>
        //           <Grid container justify="center" spacing={1}>
        //             <Grid item xs={12}>
        //               <Grid container justify="center" spacing={1}>
        //                 {[0, 1, 2].map((value) => (
        //                   // <Grid key={value} item>
        //                   //   <Paper className={classes.paper} />
        //                   // </Grid>
        //                   <FormRow />
        //                 ))}
        //               </Grid>
        //               <Grid container justify="center" spacing={1}>
        //                 {[0, 1, 2].map((value) => (
        //                   // <Grid key={value} item>
        //                   //   <Paper className={classes.paper} />
        //                   // </Grid>
        //                   <FormRow />
        //                 ))}
        //               </Grid>
        //               <Grid container justify="center" spacing={1}>
        //                 {[0, 1, 2].map((value) => (
        //                   // <Grid key={value} item>
        //                   //   <Paper className={classes.paper} />
        //                   // </Grid>
        //                   <FormRow />
        //                 ))}
        //               </Grid>
        //             </Grid>
        //           </Grid>
        //     </div>
        // </Container>
//     );
// }