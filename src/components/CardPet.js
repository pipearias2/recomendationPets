import React from 'react';
import { Card } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { makeStyles,withStyles } from '@material-ui/core/styles';

export default function CardPet(props){
    function currencyFormat(num) {
        return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    function getColor(colorCode){
        if (colorCode==100){
            return "Tricolor"
        }else if(colorCode==200){
            return "Cafe";
        }else if(colorCode==300){
            return "Blanco";
        }else if(colorCode==400){
            return "Negro";
        }else if(colorCode==500){
            return "Cualquiera";
        }
    }
    function like(id){
        props.likePet(id);
    }
    
    const useStyles = makeStyles((theme) => ({
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
    }));
    const classes = useStyles();
    return(
        <Paper id={props.id} key={props.id} >
            <Card>
                <CardHeader
                    title={props.pet.name}
                />
                <CardMedia
                    className={classes.media}
                    image={props.pet.path}
                    title={props.pet.name}
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                   <b> Area :</b>{props.pet.area} <br></br>
                   <b> Precio :</b> {currencyFormat(props.pet.price)}<br></br>
                   <b> Color: </b> {getColor(props.pet.color)}<br></br>
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={props.pet.clients.length==0 ? () => like(props.pet.id) : console.log("nada")}>
                    {props.pet.clients.length>0 ? (
                        <FavoriteIcon/>
                    ) : (
                        <FavoriteBorderIcon/>
                    )}                   
                </IconButton>
                </CardActions>
            </Card>
        </Paper>
    );
}