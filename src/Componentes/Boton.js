import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    maxWidth: 200,
  },
  media: {
    height: 100,
  },
};

function Locations(props){

  return (<React.Fragment>
          <Typography gutterBottom variant="h5" component="h4">{props.sede.nombresede}</Typography>
          <Typography component="p">{props.sede.direccion1}</Typography>
          <Typography component="p">{props.sede.direccion2}</Typography>
          <Typography component="p">{props.sede.telefono1}</Typography>
          <Typography component="p">{props.sede.fax}</Typography>
        </React.Fragment>);
}

class Boton extends Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event){
		const valor = event.target.
		props.clickubicacion(valor);
	}
	render(){
		const { classes } = this.props;
		return (
				<Button variant="outlined" className={classes.root} color="primary" >
					<Locations sede={this.props.nombre} />
				</Button>
			);
	}
}

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/calonge.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Locations sede={props.nombre} />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Añadir
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);