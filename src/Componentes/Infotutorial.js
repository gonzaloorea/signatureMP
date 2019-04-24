import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Infotutorial extends React.Component {
	render(){
		return (
			<Grid container alignContent="center" style={{marginTop:40}}>
				<Grid item xs={12}>
					<img src={`./images/videocapas.gif`} alt="tutorial" style={{display:'block'}} />
				</Grid>
				<Grid item xs={12}>
					<Typography variant="subtitle2" align="center" style={{color:'#DDDDDD'}}>FORMULARIO DE FIRMA SOPORTADO POR LOS SIGUIENTES NAVEGADORES</Typography>
		      		<Typography variant="caption" align="center">signature form supported in the following browsers</Typography>
		      	</Grid>
		      	<Grid item xs={2}></Grid>
		      	<Grid item xs={8}>
					<Grid container justify="space-evenly">
						<Grid item style={{textAlign:'center'}}>
							<img src="./images/chrome.png" alt="Chrome logo" width={34} height={34} />
							<Typography variant="caption" align="center">Chrome 42+</Typography>
						</Grid>
						<Grid item style={{textAlign:'center'}}>
							<img src="./images/firefox.png" alt="Firefox logo" width={34} height={34} />
							<Typography variant="caption" align="center">Firefox 41+</Typography>
						</Grid>
						<Grid item style={{textAlign:'center'}}>
							<img src="./images/ie.png" alt="Internet Explorer logo" width={34} height={34} />
							<Typography variant="caption" align="center">IE 9+</Typography>
						</Grid>
						<Grid item style={{textAlign:'center'}}>
							<img src="./images/opera.png" alt="Opera logo" width={34} height={34} />
							<Typography variant="caption" align="center">Opera 29+</Typography>
						</Grid>
						<Grid item style={{textAlign:'center'}}>
							<img src="./images/safari.png" alt="Safari logo" width={34} height={34} />
							<Typography variant="caption" align="center">Safari ✘</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={2}></Grid>

			</Grid>
			);
	}
}

export default Infotutorial;