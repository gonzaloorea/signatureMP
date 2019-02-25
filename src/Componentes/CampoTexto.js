import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import  { withStyles } from '@material-ui/core/styles';

const styles = {
	root:{
		marginLeft: 10,
    	marginRight: 10,
    	maxWidth: 260,
	}
};


const inputProps = {
    step: 300,
};


class CampoTexto extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(evt){
		this.props.onChangevalue(evt);
	}

	render(){
		const {classes} = this.props;
		return(
			<TextField 
				variant='standard' 
				style={{margin: 'auto 10px'}} 
				className={classes.root} 
				margin="normal" 
				id={this.props.idvalue} 
				name={this.props.namevalue} 
				type={this.props.typevalue} 
				label={this.props.labelvalue} 
				inputProps={inputProps}
				value={this.props.valor}
				onChange={this.handleChange}>
			</TextField>
		);
	}
}

export default withStyles(styles)(CampoTexto);