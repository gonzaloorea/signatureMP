import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  }
};

class MyCompanyAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      valor: "todavia no ha elegido!!!",
      logosMP:null
    };
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handletoClose = event => {
    this.setState({
      anchorEl: null,
    });
  };
  handleClose = event => {
    this.setState({
      anchorEl: null,
      valor: event.currentTarget.childNodes[0].nodeValue
    });
    this.props.logoseleccionado(event.target.childNodes[0].nodeValue);
  };

  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
        return response.json()
      })
      .then(response=>{
        this.setState({
          logosMP: response
        })
      })
      .catch(error=>{
        console.log(error.message);
      });
  }
  
  render() {
    const { classes } = this.props;

    const lista = this.props.listaseleccion.sort(function(a,b){
                                                    var x = a.name.toLowerCase();
                                                    var y = b.name.toLowerCase();
                                                    if (x < y) {return -1;}
                                                    if (x > y) {return 1;}
                                                    return 0;})
                                            .map((elem)=>
      <MenuItem onClick={this.handleClose} key={elem[this.props.keytoiterate].toString()} >{elem[this.props.keytoiterate]}</MenuItem>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#BA0C2F", marginBottom:20 }}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              open={Boolean(this.state.anchorEl)}
              onClose={this.handletoClose}
            >
              {lista}
            </Menu>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Select Company
            </Typography>
            {this.props.logoicon}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MyCompanyAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyCompanyAppBar);
