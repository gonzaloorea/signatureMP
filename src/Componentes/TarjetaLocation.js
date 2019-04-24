import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    maxWidth: 165,
    margin:2
  },
  media: {
    height: 80,
  },
};

function LocationsInfo(props){

  return (<React.Fragment>
	          <Typography gutterBottom variant="subtitle2" component="subtitle2" style={{fontWeight:'bold'}}>{props.sede.nombresede}</Typography>
	          <Typography variant="caption">{props.sede.direccion1}</Typography>
	          <Typography variant="caption">{props.sede.direccion2}</Typography>
	          <Typography variant="caption">{props.sede.telefono1}</Typography>
            
	        </React.Fragment>);
}


function MediaCard(props) {
  const { classes } = props;
  const handleseleccion = (event)=>{
      const refclonada = Object.assign({}, props.nombre); //clonamos el objeto ubicación 'props.nombre' por que si pasamos directamente este objeto a la funcion de abajo, cunado modifiquemos las propiedades en el estado principal, se reflejará en las tarjetas
  		props.manejaubicacion(refclonada);
  };
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleseleccion}>
        <CardMedia
          className={classes.media}
          image={`./images/${props.nombre.imagensede}`}
          title={`${props.nombre.imagensede}`}
        />
        <CardContent style={{margin:2,padding:2}}>
          <LocationsInfo sede={props.nombre} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);