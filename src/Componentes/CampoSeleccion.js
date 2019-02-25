import React, { Component } from 'react';
import classNames from 'classnames';
import Input from  '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import {withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
	root : {
		width: 200,
		margin:20
	},
	formControl : {
		margin : 5,
		minWidth : 200
	},
	inputs:{
		minWidth: 200,
	},
	label: {
		minWidth: 200,
	}
};

class CampoSeleccion extends Component {

	handleChange = (event)=>{
		this.props.handleSeleccion(event);
		//console.log(event.target.value);
		//console.log(event.currentTarget.id);
	}

	render(){
		const {classes} = this.props;
		const lista = this.props.listaseleccion.map((elem)=>
			<MenuItem value={elem[this.props.keytoiterate]} key={elem['clave'].toString()} id={elem['clave']}>{elem[this.props.keytoiterate]}</MenuItem>
		);
		const clases = classNames(classes.formControl, classes.root);
		return (
			<FormControl className={clases.root}>
				<InputLabel>{`${this.props.campolabelayuda}`}</InputLabel>
				<Select
					value = {this.props.valor}
					onChange = {this.handleChange}
					input  = {<Input name={this.props.name}  className={classes.inputs}/>}>

					{lista}

				</Select>
			</FormControl>
		);
	}
}

export default withStyles(styles)(CampoSeleccion);